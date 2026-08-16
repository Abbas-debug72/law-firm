import Link from "next/link";

type Props = {
  tag: string;
  title: string;
  date: string;
};

export default function InsightCard({ tag, title, date }: Props) {
  return (
    <article className="group border-b border-navy/10 py-6">
      <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
        <span className="bg-gold/15 px-2.5 py-1 text-gold">{tag}</span>
        <time className="text-slate/70">{date}</time>
      </div>
      <Link href="/insights" className="mt-3 block font-display text-2xl font-semibold leading-snug text-navy-deep transition-colors group-hover:text-gold">
        {title}
      </Link>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </article>
  );
}
