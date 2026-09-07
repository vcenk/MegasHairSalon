# Megas Hair Salon — working notes

Marketing site for a Turkish hair salon in Coquitlam BC. Read `README.md` first;
it explains the structure and where content lives.

## Rules that matter here

- **Never invent salon facts.** Prices, stylist experience, reviews, and
  policies come from the client or from Phorest. If something is unknown, say so
  in the copy (as the four placeholder stylist profiles do) rather than filling
  the gap.
- **`lib/site.ts` is the only place NAP lives.** Address, phone, and hours are
  reused across the footer, contact page, and every schema block. Do not hardcode
  them anywhere else.
- **Phorest is the source of truth for prices.** `lib/menu.ts` and
  `lib/services.ts` must agree with each other and with Phorest. Update
  `MENU_UPDATED` whenever they change.
- **Every page uses `pageMeta()` from `lib/seo.ts`** for its metadata, and gets
  at least one JSON-LD block. Do not hand-roll `metadata` objects.
- **Motion is CSS-driven and respects `prefers-reduced-motion`.** The `Reveal`
  component only flips a data attribute; `app/globals.css` owns the transition
  and disables it under reduced motion.

## Design system

Tokens are in the `@theme` block of `app/globals.css` — warm bone paper, ink,
and burnished copper, with Fraunces for display and DM Sans for UI. Use the
semantic colour names (`bone`, `sand`, `clay`, `ink`, `espresso`, `muted`,
`copper`), not raw hex.

## Before saying something is done

`npm run build` must pass (it type-checks and prerenders all 42 pages), and
`npx next lint` must be clean.
