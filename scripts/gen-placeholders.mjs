/**
 * Generates the placeholder art in public/images/ph/.
 *
 * These stand in for the salon's photography, which is being shot once the
 * Coquitlam build-out finishes. Each file carries the shot description it is
 * standing in for, so the set doubles as a shot list for the photographer.
 *
 * Run: npm run placeholders
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images", "ph");

/** Warm, salon-appropriate gradient families. Keys are used per asset below. */
const TONES = {
  copper: ["#D9A276", "#B26B3F", "#7A4326"],
  bone: ["#F3EADC", "#DFCDB6", "#BFA88E"],
  espresso: ["#4A3B31", "#2C221C", "#171110"],
  clay: ["#E4C7B4", "#C39476", "#8C5A3E"],
  ash: ["#DAD5CB", "#B4AEA1", "#837D6E"],
  ember: ["#E0B48A", "#C1793F", "#6E3E22"],
};

function svg({ w, h, tone, label, sub }) {
  const [c1, c2, c3] = TONES[tone];
  const id = Math.random().toString(36).slice(2, 8);
  const diag = Math.round(Math.hypot(w, h));

  // Soft light streaks, angled like fallen hair.
  const streaks = Array.from({ length: 7 }, (_, i) => {
    const x = (w / 8) * (i + 0.5);
    const sway = w * 0.12;
    return `<path d="M ${x - sway} -40 C ${x + sway} ${h * 0.3}, ${x - sway} ${h * 0.7}, ${x + sway * 0.6} ${h + 40}" stroke="#FFFFFF" stroke-opacity="${(0.05 + (i % 3) * 0.025).toFixed(3)}" stroke-width="${18 + (i % 4) * 22}" fill="none" filter="url(#soft${id})"/>`;
  }).join("");

  const labelBlock = label
    ? `<g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - 4}" font-size="${Math.round(Math.min(w, h) * 0.055)}" fill="#FFFFFF" fill-opacity="0.82" letter-spacing="1">${label}</text>
    <text x="${w / 2}" y="${h / 2 + Math.round(Math.min(w, h) * 0.055) + 10}" font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.026)}" fill="#FFFFFF" fill-opacity="0.5" letter-spacing="${Math.round(Math.min(w, h) * 0.006)}">${sub ?? "PHOTOGRAPHY COMING SOON"}</text>
  </g>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="52%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3}"/>
    </linearGradient>
    <radialGradient id="v${id}" cx="50%" cy="42%" r="78%">
      <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.34"/>
    </radialGradient>
    <filter id="soft${id}" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="${Math.round(diag * 0.022)}"/>
    </filter>
    <filter id="blob${id}" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="${Math.round(diag * 0.055)}"/>
    </filter>
    <filter id="grain${id}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.16"/></feComponentTransfer>
    </filter>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <ellipse cx="${w * 0.28}" cy="${h * 0.24}" rx="${w * 0.34}" ry="${h * 0.26}" fill="#FFFFFF" fill-opacity="0.17" filter="url(#blob${id})"/>
  <ellipse cx="${w * 0.78}" cy="${h * 0.74}" rx="${w * 0.32}" ry="${h * 0.3}" fill="#000000" fill-opacity="0.16" filter="url(#blob${id})"/>
  ${streaks}
  <rect width="${w}" height="${h}" fill="url(#v${id})"/>
  <rect width="${w}" height="${h}" filter="url(#grain${id})" opacity="0.5"/>
  ${labelBlock}
</svg>
`;
}

/** [filename, width, height, tone, label] */
const ASSETS = [
  ["og-default", 1200, 630, "espresso", "Megas Hair Salon", "COQUITLAM · SINCE 1984"],
  ["hero", 2000, 1400, "espresso", "", ""],
  ["hero-portrait", 1100, 1400, "copper", "Hero portrait", "SALON INTERIOR OR COLOUR WORK"],

  ["salon-1", 1200, 900, "bone", "Styling floor", ""],
  ["salon-2", 1200, 900, "ash", "Chair & mirror", ""],
  ["salon-3", 1200, 900, "clay", "Wash station", ""],
  ["salon-4", 1200, 900, "espresso", "Tools & detail", ""],
  ["salon-5", 1200, 900, "bone", "Reception", ""],

  ["work-balayage-1", 1000, 1250, "ember", "Balayage", ""],
  ["work-balayage-2", 1000, 1250, "copper", "Balayage, close up", ""],
  ["work-blonde-1", 1000, 1250, "bone", "Platinum blonde", ""],
  ["work-blonde-2", 1000, 1250, "ash", "Lived-in blonde", ""],
  ["work-colour-1", 1000, 1250, "espresso", "Rich brunette", ""],
  ["work-colour-2", 1000, 1250, "clay", "Root touch-up", ""],
  ["work-cut-1", 1000, 1250, "ash", "Precision cut", ""],
  ["work-cut-2", 1000, 1250, "espresso", "Men's cut", ""],
  ["work-blowout-1", 1000, 1250, "copper", "Blowout", ""],
  ["work-keratin-1", 1000, 1250, "bone", "Keratin finish", ""],
  ["work-treatment-1", 1000, 1250, "clay", "Treatment ritual", ""],
  ["work-updo-1", 1000, 1250, "ember", "Bridal updo", ""],

  ["stylist-bulent-bill", 900, 1200, "espresso", "Bülent", "PORTRAIT COMING SOON"],
  ["stylist-gazi", 900, 1200, "copper", "Gazi", "PORTRAIT COMING SOON"],
  ["stylist-emir", 900, 1200, "ash", "Emir", "PORTRAIT COMING SOON"],
  ["stylist-fulya", 900, 1200, "clay", "Fulya", "PORTRAIT COMING SOON"],
  ["stylist-fara", 900, 1200, "bone", "Fara", "PORTRAIT COMING SOON"],
  ["stylist-nadia", 900, 1200, "ember", "Nadia", "PORTRAIT COMING SOON"],
  ["stylist-rain", 900, 1200, "ash", "Rain", "PORTRAIT COMING SOON"],
  ["stylist-sima", 900, 1200, "copper", "Sima", "PORTRAIT COMING SOON"],

  ["area-coquitlam", 1400, 900, "bone", "Coquitlam", ""],
  ["area-port-moody", 1400, 900, "ash", "Port Moody", ""],
  ["area-port-coquitlam", 1400, 900, "clay", "Port Coquitlam", ""],
  ["area-vancouver", 1400, 900, "espresso", "Vancouver", ""],

  ["journal-balayage", 1400, 900, "ember", "Balayage vs highlights", ""],
  ["journal-keratin", 1400, 900, "bone", "Keratin in winter", ""],
  ["journal-colourist", 1400, 900, "ash", "Choosing a colourist", ""],

  ["about-heritage", 1200, 1500, "espresso", "Istanbul, 1984", ""],
  ["about-today", 1200, 1500, "copper", "Coquitlam, today", ""],
];

mkdirSync(OUT_DIR, { recursive: true });

for (const [name, w, h, tone, label, sub] of ASSETS) {
  writeFileSync(join(OUT_DIR, `${name}.svg`), svg({ w, h, tone, label, sub }), "utf8");
}

console.log(`Generated ${ASSETS.length} placeholders in public/images/ph/`);
