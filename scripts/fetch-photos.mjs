/**
 * Downloads the interim stock photography into public/images/photos/.
 *
 * Source: Pexels (https://pexels.com). The Pexels License permits free
 * commercial use without attribution. These are a STAND-IN for the salon's own
 * photography — swap each file for the real shoot when it lands, keeping the
 * filenames so nothing in lib/ has to change.
 *
 * ⚠️ The `stylist-*` entries are the sensitive ones. They are stock models
 * standing in for named, real people so the client can review a complete demo.
 * They must be replaced before this site is published — see
 * docs/LAUNCH-CHECKLIST.md. The Pexels License does not cover using an
 * identifiable person in a way that implies they endorse a business.
 *
 * Run: npm run photos
 */

import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images", "photos");

/** [pexels id, output name, width] */
const PHOTOS = [
  // Hero + salon. The hero and salon-1/2 are the same real styling floor, so
  // the set reads as one room rather than a stock grab-bag.
  [7195810, "hero", 2400],
  [7195796, "salon-1", 1600],
  [9146943, "salon-2", 1600],
  [7750144, "salon-3", 1600],
  [14730864, "salon-4", 1600],
  [1654834, "salon-5", 1600],

  // Work
  [7752412, "work-balayage-1", 1400],
  [6391646, "work-balayage-2", 1400],
  [34097012, "work-blonde-1", 1400],
  [8030666, "work-blonde-2", 1400],
  [17320162, "work-colour-1", 1400],
  [10224830, "work-colour-2", 1400],
  [3993447, "work-cut-1", 1400],
  [32329615, "work-cut-2", 1400],
  [7755528, "work-blowout-1", 1400],
  [23349912, "work-keratin-1", 1400],
  [5700067, "work-treatment-1", 1400],
  [2301842, "work-updo-1", 1400],

  // Journal
  [23384617, "journal-balayage", 1600],
  [28994388, "journal-keratin", 1600],
  [28743778, "journal-colourist", 1600],

  // About
  [3992850, "about-heritage", 1400],
  [27165067, "about-today", 1400],

  // Stylist portraits — DEMO ONLY, see the warning above. Chosen at work
  // rather than as ID-style headshots, and rendered desaturated in the UI so
  // eight unrelated stock frames read as one team.
  [8867400, "stylist-bulent-bill", 1000],
  [5188606, "stylist-gazi", 1000],
  [32329615, "stylist-emir", 1000],
  [26759527, "stylist-fulya", 1000],
  [28743778, "stylist-fara", 1000],
  [8834023, "stylist-nadia", 1000],
  [3993455, "stylist-rain", 1000],
  [7879790, "stylist-angela", 1000],

  // Areas
  [7195799, "area-coquitlam", 1600],
  [16571735, "area-port-moody", 1600],
  [7195807, "area-port-coquitlam", 1600],
  [11690875, "area-vancouver", 1600],
];

const force = process.argv.includes("--force");

mkdirSync(OUT_DIR, { recursive: true });

let downloaded = 0;
let skipped = 0;

for (const [id, name, width] of PHOTOS) {
  const target = join(OUT_DIR, `${name}.jpg`);

  if (existsSync(target) && !force) {
    skipped += 1;
    continue;
  }

  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`✗ ${name} (pexels ${id}) — HTTP ${response.status}`);
    continue;
  }

  writeFileSync(target, Buffer.from(await response.arrayBuffer()));
  downloaded += 1;
  console.log(`✓ ${name}.jpg`);
}

console.log(
  `\n${downloaded} downloaded, ${skipped} already present, in public/images/photos/`,
);
