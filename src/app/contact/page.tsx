import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ConsultationForm from "./consultation-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Lorem ipsum dolor sit amet — request a consultation with Sterling & Hale.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a consultation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      />

      <section className="bg-navy-tint py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <div className="border border-navy/10 bg-white p-6 sm:p-10">
              <ConsultationForm />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border-t-2 border-gold pt-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Offices
              </h2>
              <address className="mt-4 text-sm not-italic leading-relaxed text-slate">
                {SITE.address}
                <br />
                <a href={SITE.phoneHref} className="mt-2 inline-block font-semibold text-navy underline-offset-4 hover:text-gold">
                  {SITE.phone}
                </a>
                <br />
                <a href={SITE.emailHref} className="mt-1 inline-block font-semibold text-navy underline-offset-4 hover:text-gold">
                  {SITE.email}
                </a>
              </address>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Hours
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {SITE.hours.map((row) => (
                  <li key={row.days}>
                    <span className="block text-slate/70">{row.days}</span>
                    {row.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                Confidentiality
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
