import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import InsightCard from "@/components/insight-card";
import CtaBand from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Lorem ipsum dolor sit amet — recent writing and alerts from Sterling & Hale.",
  alternates: { canonical: "/insights" },
};

const insights = [
  { tag: "Corporate", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", date: "August 2026" },
  { tag: "Litigation", title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco", date: "July 2026" },
  { tag: "Real Estate", title: "Duis aute irure dolor in reprehenderit in voluptate velit", date: "June 2026" },
  { tag: "Employment", title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa", date: "May 2026" },
  { tag: "IP", title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit", date: "April 2026" },
  { tag: "Trusts", title: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", date: "March 2026" },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Recent writing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        {insights.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </section>
      <CtaBand title="Questions about an alert?" ctaLabel="Ask an Attorney" ctaHref="/contact" />
    </>
  );
}
