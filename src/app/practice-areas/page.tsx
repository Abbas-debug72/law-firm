import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import PracticeAreaCard, { type PracticeArea } from "@/components/practice-area-card";
import CtaBand from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Lorem ipsum dolor sit amet — corporate, litigation, real estate, employment, intellectual property and trusts & estates at Sterling & Hale.",
  alternates: { canonical: "/practice-areas" },
};

const areas: PracticeArea[] = [
  { num: "01", title: "Corporate & M&A", blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { num: "02", title: "Commercial Litigation", blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { num: "03", title: "Real Estate", blurb: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { num: "04", title: "Employment", blurb: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { num: "05", title: "Intellectual Property", blurb: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
  { num: "06", title: "Trusts & Estates", blurb: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam." },
];

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Where we advise"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <PracticeAreaCard key={area.num} area={area} />
          ))}
        </div>
      </section>
      <CtaBand title="Not sure where to start?" ctaLabel="Talk to Us" ctaHref="/contact" />
    </>
  );
}
