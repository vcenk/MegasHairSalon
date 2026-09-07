# Megas Hair Salon

Marketing site for Megas Hair Salon — 150-1169 Pacific St, Coquitlam BC. Turkish
salon founded in Istanbul in 1984, opened in Coquitlam in 2025.

**Design direction:** Salon Haze's restraint (whitespace, few sections, quiet
type) with Salon Zazou's content depth (grouped footer, service pages, area
pages, journal). Megas has no training academy, so Zazou's Academy column
becomes **Visit** rather than inventing an offering.

## Stack

- Next.js 15 (App Router) · TypeScript · Tailwind CSS v4
- Fonts: Fraunces (display) + DM Sans (body), via `next/font`
- Fully static — 42 prerendered pages, no database, no API routes
- Booking is external: every CTA links to Phorest

## Run it

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run placeholders`.

## Where the content lives

All copy and data is in `lib/` — there is no CMS, and pages read straight from
these files. To change the site, change these:

| File | Holds |
| --- | --- |
| `lib/site.ts` | Address, phone, email, hours, booking URL, social, rating. **Single source of truth for NAP.** |
| `lib/menu.ts` | The full 67-item price list. Snapshot of Phorest. |
| `lib/services.ts` | The 8 SEO service pages — copy, pricing tables, FAQs. |
| `lib/team.ts` | The 8 stylists. |
| `lib/areas.ts` | The 4 local-SEO area pages. |
| `lib/blog.ts` | Journal posts. |
| `lib/reviews.ts` | Testimonials. **Currently placeholders — see the launch checklist.** |
| `lib/gallery.ts` | Gallery grid. |
| `lib/nav.ts` | Header and footer navigation. |

## Prices

Phorest (`megashairsalon.phorest.me`) is authoritative. `lib/menu.ts` and
`lib/services.ts` are a manual snapshot taken 2026-07-31 — if the salon edits
anything in Phorest, update both files and bump `MENU_UPDATED`.

Do not swap the booking URL for `phorest.com/book/salons/megashairsalon`; that
address redirects to Phorest's own marketing site instead of the booking flow.

## Images

Every image is a generated placeholder in `public/images/ph/`, produced by
`scripts/gen-placeholders.mjs`. Each one is labelled with the shot it stands in
for, so the set doubles as a brief for the photographer.

When real photos arrive: drop them in `public/images/photos/`, update the `src`
values in `lib/` (keep the alt text), and remove `dangerouslyAllowSVG` from
`next.config.ts`.

## SEO

- `lib/seo.ts` builds every page's title, description, canonical, and OG tags.
- `lib/schema.ts` builds JSON-LD: `HairSalon` sitewide, plus `Service`,
  `Person`, `FAQPage`, `BreadcrumbList`, `OfferCatalog`, and `BlogPosting`.
- `app/sitemap.ts` and `app/robots.ts` generate from the same data.

Before launch, see [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md).
