const stats = [
  { value: "25+", label: "Years of practice" },
  { value: "1,200+", label: "Matters resolved" },
  { value: "3", label: "Offices" },
  { value: "40+", label: "Attorneys & counsel" },
];

export default function StatsBand() {
  return (
    <section aria-label="Firm statistics" className="border-y border-gold/25 bg-navy-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-5xl font-medium text-gold">{stat.value}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-ivory/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
