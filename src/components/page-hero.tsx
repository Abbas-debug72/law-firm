type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="bg-navy pt-32 text-ivory">
      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight md:text-6xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl leading-relaxed text-ivory/75">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
