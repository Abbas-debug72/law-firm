import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import NewsletterForm from "@/components/newsletter-form";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold">
              Sterling <span className="italic text-gold">&amp;</span> Hale
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Firm
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Contact
            </h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ivory/75">
              {SITE.address}
              <br />
              <a href={SITE.phoneHref} className="mt-1 inline-block text-gold-light hover:underline">
                {SITE.phone}
              </a>
              <br />
              <a href={SITE.emailHref} className="mt-1 inline-block text-gold-light hover:underline">
                {SITE.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Hours
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              {SITE.hours.map((row) => (
                <li key={row.days}>
                  <span className="block text-ivory/50">{row.days}</span>
                  {row.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              The Digest
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-md text-center sm:text-right">
            Lorem ipsum dolor sit amet — attorney advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
}
