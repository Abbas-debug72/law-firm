import Image from "next/image";
import { blurDataUrl, type Pic } from "@/lib/images";

type Props = {
  image: Pic;
  name: string;
  role: string;
  focus: string[];
};

export default function AttorneyCard({ image, name, role, focus }: Props) {
  return (
    <article className="group overflow-hidden border border-navy/10 bg-white transition-all hover:shadow-xl hover:shadow-navy/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-tint">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl("#eef2f8")}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-navy-deep">{name}</h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{role}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {focus.map((f) => (
            <li key={f} className="border border-navy/15 px-3 py-1 text-xs text-slate">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
