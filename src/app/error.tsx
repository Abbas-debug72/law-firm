"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[80svh] items-center bg-navy text-ivory">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          Something went wrong
        </p>
        <h1 className="mt-6 font-display text-4xl font-medium leading-tight md:text-5xl">
          We&apos;ll get to this.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-10 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep transition-colors hover:bg-gold-light"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
