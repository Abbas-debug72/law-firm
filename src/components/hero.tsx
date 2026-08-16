import Image from "next/image";
import ButtonLink from "@/components/button";
import { blurDataUrl, pic } from "@/lib/images";

export default function Hero() {
  const hero = pic("sterling-hero", 1600, 900, "Classical architecture detail — columns and light");
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl("#122b4e")}
        className="object-cover opacity-20"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-navy/40" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-44 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
          Established 1998
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.08] md:text-7xl">
          Counsel for the <span className="italic text-gold-light">long term</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Get a Consultation</ButtonLink>
          <ButtonLink href="/practice-areas" variant="outline-light">
            Practice Areas
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
