# Launch checklist

Everything that must be resolved before this goes live.

## ⛔ Cannot ship as-is

The site is currently dressed as a **complete demo** for the client to review.
Three things in it are presented as real and are not. None of them are subtle
once you know, and none of them are visible on the page — which is exactly why
they are listed first.

- [ ] **The eight stylist portraits are stock models.** Real names and titles,
      someone else's face. This is a misrepresentation of identifiable people
      and falls outside the Pexels License, which does not cover using a person
      in a way that implies they endorse a business. Replace with real
      portraits, or pull the portraits entirely, before this is public.
- [ ] **Fara, Nadia, Rain and Sima have written-for-demo bios.** Their names,
      titles, and Phorest levels are real; the prose is not. It was written to
      avoid stating anything falsifiable — no years, no training, no awards, no
      previous employers — but it is still not their words. See
      `SENIOR_PROFILES` in `lib/team.ts`.
- [ ] **The reviews are invented.** See below.

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
- [ ] **Bios for Fara, Nadia, Rain and Sima in their own words** — replacing
      the demo copy described above.
- [ ] **Confirm the Instagram and Facebook handles** in `lib/site.ts`. They are
      currently guessed from the business name and feed the `sameAs` schema.

## Confirm with the client — retail

- [ ] **Which brands does the salon actually retail?** `lib/products.ts` names
      Aveda only, because Aveda is the one brand evidenced by the Phorest
      service menu. The page is written to survive more brands being added, but
      none should be added on a guess. (Emir's bio mentions L'Oréal, Kérastase
      and Wella — that is his training history, not the retail shelf.)
- [ ] **Does the salon sell gift cards?** The FAQ currently says "call us",
      which is true but weak. Phorest supports gift cards if they want them sold.

## Confirm with the client

- [ ] Postal code V3B 0J1 — verify against the Google Business Profile.
- [ ] Geo coordinates (49.2814, -122.7905) — verify against the actual storefront.
- [ ] Cancellation / deposit policy — `/terms` currently points people at their
      Phorest confirmation rather than stating terms we were not given.
- [ ] Does Megas run an academy or offer training? If yes, that becomes a
      footer column and a page (Zazou has one; we left it out rather than
      invent it).
- [ ] Have `/privacy` and `/terms` reviewed against PIPEDA and BC PIPA.

## Dependencies

- [x] **Next.js patched to 15.5.25** — 15.5.4 carried CVE-2025-66478, which
      Vercel flags on every deploy. Stayed on the 15.5 line rather than jumping
      to 16 so the fix carried no breaking changes.
- [ ] **Plan the Next 16 upgrade.** `npm audit` still reports two advisories in
      the PostCSS that Next bundles, and the only fix npm offers is Next 16 (a
      semver major). Both are build-time issues — a stringify XSS and a file
      read, reachable through attacker-controlled CSS input, which a site whose
      CSS we author entirely ourselves does not have. Worth doing deliberately,
      not under deadline.

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
