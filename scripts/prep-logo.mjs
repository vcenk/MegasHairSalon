/**
 * Turns the client's white-background logo into transparent header assets.
 *
 * White is removed per pixel (colour-to-alpha), so the translucent purple
 * shears keep their see-through look on any ground. Two files are written:
 *   megas-logo.png        as supplied: purple shears, black lettering
 *   megas-logo-light.png  lettering swapped to paper-white for the dark hero;
 *                         the purple shears are lifted lighter
 *
 * Usage: node scripts/prep-logo.mjs <source-image>
 * Replace with a client-supplied SVG/transparent PNG when one exists.
 */
import sharp from "sharp";

const src = process.argv[2];
if (!src) {
  console.error("usage: node scripts/prep-logo.mjs <source>");
  process.exit(1);
}

const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Tight crop around everything that is not (near) white.
let x0 = width, y0 = height, x1 = 0, y1 = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    if (Math.min(data[i], data[i + 1], data[i + 2]) < 238) {
      x0 = Math.min(x0, x); x1 = Math.max(x1, x);
      y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    }
  }
}
const pad = 16;
const left = Math.max(0, x0 - pad);
const top = Math.max(0, y0 - pad);
const region = {
  left,
  top,
  width: Math.min(width, x1 + pad) - left,
  height: Math.min(height, y1 + pad) - top,
};

const PAPER = [252, 250, 247];
const SHEAR_LIFT = [225, 150, 225];
const dark = Buffer.alloc(width * height * 4);
const light = Buffer.alloc(width * height * 4);
for (let p = 0; p < width * height; p++) {
  const i = p * channels;
  const o = p * 4;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const a = 1 - Math.min(r, g, b) / 255;
  let c = [0, 0, 0];
  if (a > 0.004) c = [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round((v - 255 * (1 - a)) / a))));
  const alpha = Math.round(a * 255);
  dark[o] = c[0]; dark[o + 1] = c[1]; dark[o + 2] = c[2]; dark[o + 3] = alpha;
  const neutral = Math.max(...c) - Math.min(...c) < 40; // lettering, not the purple shears
  // Shears: lifted toward a light orchid and made more opaque so they hold on a dark photo.
  const l = neutral ? PAPER : c.map((v, k) => Math.round(v + (SHEAR_LIFT[k] - v) * 0.55));
  const la = neutral ? alpha : Math.min(255, Math.round(alpha * 1.9));
  light[o] = l[0]; light[o + 1] = l[1]; light[o + 2] = l[2]; light[o + 3] = la;
}

for (const [file, buf] of [["megas-logo.png", dark], ["megas-logo-light.png", light]]) {
  await sharp(buf, { raw: { width, height, channels: 4 } })
    .extract(region)
    .png({ compressionLevel: 9 })
    .toFile(`public/images/brands/${file}`);
  console.log("wrote", file, region);
}
