import Link from "next/link";

export type PracticeArea = {
  title: string;
  blurb: string;
  num: string;
};

export default function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <article className="group border border-navy/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-navy/10">
      <p className="font-display text-4xl font-medium italic text-gold">{area.num}</p>
      <h3 className="mt-4 font-display text-2xl font-semibold text-navy-deep">{area.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{area.blurb}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors group-hover:text-navy"
      >
        Discuss your matter
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
