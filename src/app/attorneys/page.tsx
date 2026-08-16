import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import AttorneyCard from "@/components/attorney-card";
import CtaBand from "@/components/cta-band";
import { pic } from "@/lib/images";

export const metadata: Metadata = {
  title: "Attorneys",
  description:
    "Lorem ipsum dolor sit amet — meet the partners and counsel of Sterling & Hale.",
  alternates: { canonical: "/attorneys" },
};

const attorneys = [
  { name: "Eleanor Sterling", role: "Managing Partner", focus: ["Corporate", "M&A"], seed: "sterling-attorney-1" },
  { name: "James Hale", role: "Senior Partner", focus: ["Litigation", "Arbitration"], seed: "sterling-attorney-2" },
  { name: "Marcus Whitmore", role: "Partner", focus: ["Real Estate", "Finance"], seed: "sterling-attorney-3" },
  { name: "Sofia Laurent", role: "Partner", focus: ["Employment", "Regulatory"], seed: "sterling-attorney-4" },
];

export default function AttorneysPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Attorneys & counsel"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      />
      <section className="bg-navy-tint py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys.map((attorney) => (
              <AttorneyCard
                key={attorney.name}
                image={pic(attorney.seed, 700, 875, `Portrait of ${attorney.name}`)}
                name={attorney.name}
                role={attorney.role}
                focus={attorney.focus}
              />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Work with a partner, not a committee." />
    </>
  );
}
