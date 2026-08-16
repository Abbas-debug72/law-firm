import ButtonLink from "@/components/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-navy text-ivory">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-4xl font-medium leading-tight md:text-6xl">
          Not on the docket.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back Home</ButtonLink>
          <ButtonLink href="/contact" variant="outline-light">
            Get a Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
