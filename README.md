# Megas Hair Salon

Marketing site for Megas Hair Salon — 150-1169 Pacific St, Coquitlam BC. Turkish
salon founded in Istanbul in 1984, opened in Coquitlam in 2025.

**Design direction:** Salon Haze's restraint (whitespace, few sections, light
uppercase type, one full-bleed hero photo) with Salon Zazou's content depth
(grouped footer, service pages, area pages, journal). Megas has no training
academy, so Zazou's Academy column becomes **Visit** rather than inventing an
offering.

Haze sets its display type in Brandon Grotesque, which is licensed through
Adobe Fonts. We use **Jost** as the free stand-in — same Futura lineage, same
behaviour in light weights and uppercase — over **Rubik**, which is Haze's own
UI face and is on Google Fonts.

## Stack

- Next.js 15 (App Router) · TypeScript · Tailwind CSS v4
- Fonts: Jost (display) + Rubik (body), via `next/font`
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

Two sets, on purpose.

**`public/images/photos/` — interim stock.** 27 photographs from Pexels, pulled
by `npm run photos`. The Pexels License allows free commercial use without
attribution. These stand in for the salon's own photography; when the real
shoot lands, overwrite the files keeping the same names and nothing in `lib/`
has to change.

**`public/images/ph/` — generated placeholders.** Only the eight stylist
portraits still use these, and deliberately: putting a stock model's face under
"Bülent, 35 years' experience" would be inventing a person. Those stay abstract
until real portraits arrive. Regenerate with `npm run placeholders`.

Once real portraits land, drop `dangerouslyAllowSVG` from `next.config.ts`.

## SEO

- `lib/seo.ts` builds every page's title, description, canonical, and OG tags.
- `lib/schema.ts` builds JSON-LD: `HairSalon` sitewide, plus `Service`,
  `Person`, `FAQPage`, `BreadcrumbList`, `OfferCatalog`, and `BlogPosting`.
- `app/sitemap.ts` and `app/robots.ts` generate from the same data.

Before launch, see [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md).
