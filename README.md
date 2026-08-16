# 04 — Law Firm (Sterling & Hale)

Corporate law firm demo site: practice areas, attorneys, insights, and consultation
requests. Part of the 10-site agency portfolio. See `../00-docs/04-law-firm.md` for the
planning document and non-functional checklist report.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Radix UI Dialog for mobile navigation
- `next/image` with picsum.photos placeholder imagery (deterministic seeds)
- Cormorant Garamond + Source Sans 3 via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typecheck + lint + compile)
```

## Structure

- `src/app` — routes (`/`, `/practice-areas`, `/attorneys`, `/insights`, `/contact`)
  plus `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`, `global-error.tsx`
- `src/components` — header, footer, hero, practice/attorney/insight cards, forms
- `src/lib` — site constants, image helpers, validation helpers (shared pattern)
- The consultation Server Action validates and sanitizes input, includes a honeypot,
  and rate-limits per IP (in-memory).

## Deployment

Target: Vercel. Update `SITE.url` in `src/lib/site.ts` to the production domain
before deploying (used by metadata, sitemap, robots, and JSON-LD).
