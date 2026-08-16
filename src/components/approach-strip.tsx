const steps = [
  { num: "01", title: "Listen", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { num: "02", title: "Advise", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { num: "03", title: "Resolve", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
];

export default function ApproachStrip() {
  return (
    <section aria-label="How we work" className="bg-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        {steps.map((step) => (
          <div key={step.num} className="border-t border-gold/40 pt-6">
            <p className="font-display text-4xl font-medium italic text-gold">{step.num}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
