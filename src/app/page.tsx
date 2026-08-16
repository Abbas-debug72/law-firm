import Hero from "@/components/hero";
import StatsBand from "@/components/stats-band";
import SectionHeading from "@/components/section-heading";
import PracticeAreaCard, { type PracticeArea } from "@/components/practice-area-card";
import ApproachStrip from "@/components/approach-strip";
import AttorneyCard from "@/components/attorney-card";
import InsightCard from "@/components/insight-card";
import CtaBand from "@/components/cta-band";
import ButtonLink from "@/components/button";
import JsonLd from "@/components/json-ld";
import { pic } from "@/lib/images";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE.name,
  image: "https://picsum.photos/seed/sterling-hero/1200/630",
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "400 Meridian Tower",
    addressLocality: "Example City",
    addressCountry: "US",
  },
  priceRange: "$$$",
  openingHours: ["Mo-Fr 09:00-18:00"],
  areaServed: "Example City",
};

const areas: PracticeArea[] = [
  { num: "01", title: "Corporate & M&A", blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { num: "02", title: "Commercial Litigation", blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { num: "03", title: "Real Estate", blurb: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
];

export default function HomePage() {
  const attorneyOne = pic("sterling-attorney-1", 700, 875, "Portrait of a partner");
  const attorneyTwo = pic("sterling-attorney-2", 700, 875, "Portrait of senior counsel");
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <StatsBand />

      {/* Practice areas */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Practice Areas"
            title="Deep expertise, focused counsel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <ButtonLink href="/practice-areas" variant="outline" className="shrink-0">
            All Practice Areas
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <PracticeAreaCard key={area.num} area={area} />
          ))}
        </div>
      </section>

      <ApproachStrip />

      {/* Attorneys teaser */}
      <section className="bg-navy-tint py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our People"
              title="Attorneys who stand beside you"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ButtonLink href="/attorneys" variant="outline" className="shrink-0">
              Meet the Attorneys
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <AttorneyCard
              image={attorneyOne}
              name="Eleanor Sterling"
              role="Managing Partner"
              focus={["Corporate", "M&A"]}
            />
            <AttorneyCard
              image={attorneyTwo}
              name="James Hale"
              role="Senior Partner"
              focus={["Litigation", "Arbitration"]}
            />
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Recent writing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ButtonLink href="/insights" variant="outline" className="shrink-0">
            All Insights
          </ButtonLink>
        </div>
        <div className="mt-10">
          <InsightCard tag="Corporate" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" date="August 2026" />
          <InsightCard tag="Litigation" title="Ut enim ad minim veniam, quis nostrud exercitation" date="July 2026" />
          <InsightCard tag="Real Estate" title="Duis aute irure dolor in reprehenderit in voluptate" date="June 2026" />
        </div>
      </section>

      <CtaBand title="Speak with counsel today." />
    </>
  );
}
