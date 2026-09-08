# Launch checklist

Everything that must be resolved before this goes live.

## Blocking — content we do not have

- [ ] **Reviews are placeholders.** `lib/reviews.ts` contains illustrative
      quotes, not real ones. Replace with verbatim quotes from the salon's 146
      Google reviews before launch. Do not publish invented testimonials.
      (Schema only emits the aggregate 4.8/146 rating, never these quotes — keep
      it that way unless the reviews are real and attributable.)
- [ ] **All photography is interim stock.** 27 Pexels photographs in
      `public/images/photos/` stand in for the salon's own work. They are
      licence-clean for commercial use, but they are not Megas — no client
      should recognise their own hair, and no shot shows the actual Coquitlam
      room. Replace with the real shoot, keeping the filenames.
- [ ] **Stylist portraits are still abstract placeholders** in
      `public/images/ph/`. This is deliberate: a stock model's face under a
      named stylist's bio invents a person. Only real portraits go here.
- [ ] **Bios for Fara, Nadia, Rain and Angela.** Currently honest placeholders
      ("a fuller profile is on its way"), `years: null`, no invented experience.
      Need real title, bio, years, and specialties per person.
- [ ] **Confirm the Instagram and Facebook handles** in `lib/site.ts`. They are
      currently guessed from the business name and feed the `sameAs` schema.

## Confirm with the client

- [ ] Postal code V3B 0J1 — verify against the Google Business Profile.
- [ ] Geo coordinates (49.2814, -122.7905) — verify against the actual storefront.
- [ ] Cancellation / deposit policy — `/terms` currently points people at their
      Phorest confirmation rather than stating terms we were not given.
- [ ] Does Megas run an academy or offer training? If yes, that becomes a
      footer column and a page (Zazou has one; we left it out rather than
      invent it).
- [ ] Have `/privacy` and `/terms` reviewed against PIPEDA and BC PIPA.

## Technical, before going live

- [ ] Point `SITE.url` in `lib/site.ts` at the real domain.
- [ ] Remove `dangerouslyAllowSVG` from `next.config.ts` once real portraits land.
- [ ] Replace `app/icon.svg` with the salon's real mark, plus an apple-touch icon.
- [ ] Point `SITE.ogImage` at a purpose-made 1200×630 share image (it currently
      reuses the hero photo, which crops awkwardly at that ratio).
- [ ] Run Lighthouse on mobile across home / service / team / menu templates.
- [ ] Verify the Google Business Profile NAP matches the site exactly.
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Decide on analytics (GA4, Plausible, or none) — nothing is installed.

## After launch

- [ ] Request indexing for the 8 service pages and 4 area pages.
- [ ] Build local citations (Yellow Pages CA, n49, Cylex).
- [ ] Keep writing the journal — three posts is a start, not a programme.
