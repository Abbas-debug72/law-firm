type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${
          tone === "dark" ? "text-gold" : "text-gold-light"
        }`}
      >
        {eyebrow}
      </p>
      <div className={`gold-rule mt-3 ${centered ? "mx-auto" : ""} w-16`} aria-hidden="true" />
      <h2
        className={`mt-5 font-display text-3xl font-medium leading-tight md:text-5xl ${
          tone === "dark" ? "text-navy-deep" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 leading-relaxed ${
            tone === "dark" ? "text-slate" : "text-ivory/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
