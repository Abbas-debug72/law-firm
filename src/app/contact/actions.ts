"use server";

import { headers } from "next/headers";
import { isEmail, isHoneypotFilled, isPhone, sanitize } from "@/lib/validate";

export type ConsultState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const PRACTICE_AREAS = [
  "Corporate & M&A",
  "Commercial Litigation",
  "Real Estate",
  "Employment",
  "Intellectual Property",
  "Trusts & Estates",
  "Other",
];

const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 4) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function requestConsultation(
  _prevState: ConsultState,
  formData: FormData
): Promise<ConsultState> {
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many requests. Please try again in a few minutes.",
    };
  }

  const name = sanitize(formData.get("name")?.toString() ?? "");
  const email = sanitize(formData.get("email")?.toString() ?? "");
  const phone = sanitize(formData.get("phone")?.toString() ?? "");
  const company = sanitize(formData.get("company")?.toString() ?? "");
  const area = sanitize(formData.get("area")?.toString() ?? "");
  const message = sanitize(formData.get("message")?.toString() ?? "");
  const honeypot = formData.get("website")?.toString() ?? "";

  if (isHoneypotFilled(honeypot)) {
    return { status: "success" };
  }

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Please enter your name.";
  }
  if (email.length > 254 || !isEmail(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (phone && !isPhone(phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (company.length > 100) {
    fieldErrors.company = "Company must be under 100 characters.";
  }
  if (!PRACTICE_AREAS.includes(area)) {
    fieldErrors.area = "Please choose a practice area.";
  }
  if (message.length < 10 || message.length > 2000) {
    fieldErrors.message = "Message must be between 10 and 2000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  // Demo: no persistence. A production build would route this to the intake
  // system and an attorney's calendar.
  return { status: "success" };
}
