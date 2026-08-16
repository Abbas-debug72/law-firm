import ButtonLink from "@/components/button";

type Props = {
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaBand({
  title,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  ctaLabel = "Get a Consultation",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          Sterling &amp; Hale
        </p>
        <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ivory md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/70">{text}</p>
        <div className="mt-9">
          <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
