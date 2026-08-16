"use client";

import { useActionState } from "react";
import { requestConsultation, type ConsultState } from "./actions";

const initialState: ConsultState = { status: "idle" };

const PRACTICE_AREAS = [
  "Corporate & M&A",
  "Commercial Litigation",
  "Real Estate",
  "Employment",
  "Intellectual Property",
  "Trusts & Estates",
  "Other",
];

const inputClass =
  "w-full border border-navy/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-700">
      {message}
    </p>
  );
}

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(requestConsultation, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="border border-gold/50 bg-navy-tint p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
          Request received
        </p>
        <h2 className="mt-4 font-display text-3xl font-medium text-navy-deep">
          We&apos;ll be in touch within one business day.
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-slate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }

  const err = (field: string) => state.fieldErrors?.[field];

  return (
    <form action={formAction} noValidate className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {state.status === "error" && state.message && !state.fieldErrors ? (
        <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cs-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            Name
          </label>
          <input id="cs-name" name="name" type="text" autoComplete="name" required placeholder="Your name"
            aria-invalid={!!err("name")} aria-describedby={err("name") ? "cs-name-error" : undefined}
            className={inputClass} />
          <FieldError id="cs-name-error" message={err("name")} />
        </div>
        <div>
          <label htmlFor="cs-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            Email
          </label>
          <input id="cs-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"
            aria-invalid={!!err("email")} aria-describedby={err("email") ? "cs-email-error" : undefined}
            className={inputClass} />
          <FieldError id="cs-email-error" message={err("email")} />
        </div>
        <div>
          <label htmlFor="cs-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            Phone <span className="normal-case text-slate/60">(optional)</span>
          </label>
          <input id="cs-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000"
            aria-invalid={!!err("phone")} aria-describedby={err("phone") ? "cs-phone-error" : undefined}
            className={inputClass} />
          <FieldError id="cs-phone-error" message={err("phone")} />
        </div>
        <div>
          <label htmlFor="cs-company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            Company <span className="normal-case text-slate/60">(optional)</span>
          </label>
          <input id="cs-company" name="company" type="text" autoComplete="organization" placeholder="Company name"
            aria-invalid={!!err("company")} aria-describedby={err("company") ? "cs-company-error" : undefined}
            className={inputClass} />
          <FieldError id="cs-company-error" message={err("company")} />
        </div>
      </div>

      <div>
        <label htmlFor="cs-area" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate">
          Practice area
        </label>
        <select id="cs-area" name="area" required defaultValue=""
          aria-invalid={!!err("area")} aria-describedby={err("area") ? "cs-area-error" : undefined}
          className={inputClass}>
          <option value="" disabled>Select an area</option>
          {PRACTICE_AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <FieldError id="cs-area-error" message={err("area")} />
      </div>

      <div>
        <label htmlFor="cs-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate">
          How can we help?
        </label>
        <textarea id="cs-message" name="message" rows={5} required maxLength={2000} placeholder="Briefly describe your matter"
          aria-invalid={!!err("message")} aria-describedby={err("message") ? "cs-message-error" : undefined}
          className={inputClass} />
        <FieldError id="cs-message-error" message={err("message")} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request Consultation"}
      </button>
    </form>
  );
}
