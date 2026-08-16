"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "@/app/actions/newsletter";

const initialState: SubscribeState = { status: "idle" };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  if (state.status === "success") {
    return (
      <p role="status" className="mt-4 border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-light">
        Thank you — you&apos;re subscribed.
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-4" noValidate>
      <div className="flex">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          aria-invalid={state.status === "error"}
          className="w-full min-w-0 border border-ivory/25 bg-navy px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 bg-gold px-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy-deep transition-colors hover:bg-gold-light disabled:opacity-60"
        >
          {pending ? "Joining…" : "Subscribe"}
        </button>
      </div>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {state.status === "error" && state.message ? (
        <p role="alert" className="mt-2 text-sm text-red-300">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
