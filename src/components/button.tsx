import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  solid: "bg-gold text-navy-deep hover:bg-gold-light",
  outline: "border border-navy/40 text-navy hover:border-gold hover:text-gold",
  "outline-light": "border border-ivory/50 text-ivory hover:border-gold hover:bg-gold hover:text-navy-deep",
};

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Link>;

export default function ButtonLink({ href, variant = "solid", children, className = "", ...rest }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
