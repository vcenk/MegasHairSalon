/**
 * Turns the client's black-background logo into a transparent mark.
 *
 * The source is silver-and-white on solid black, so brightness maps cleanly to
 * opacity: black disappears, silver stays. Only the crossed-shears + MEGAS area
 * is kept — the "HAIR SALON" arc and "SINCE 1984" line are cropped away, since
 * the header sets its own wording beside the mark.
 *
 * Usage: node scripts/prep-logo.mjs <source-image> [output.png]
 * Replace this with a client-supplied transparent PNG/SVG when one exists.
 */
import sharp from "sharp";

const [src, out = "public/images/brands/megas-mark.png"] = process.argv.slice(2);
if (!src) {
  console.error("usage: node scripts/prep-logo.mjs <source> [out]");
  process.exit(1);
}

const meta = await sharp(src).metadata();
const k = meta.width / 1254; // crop box was measured on the 1254px original
const region = {
  left: Math.round(190 * k),
  top: Math.round(335 * k),
  width: Math.round(860 * k),
  height: Math.round(600 * k),
};

const { data, info } = await sharp(src)
  .extract(region)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const a = Math.max(data[i], data[i + 1], data[i + 2]);
  if (a === 0) continue;
  // Un-premultiply so the colour stays full-strength and alpha carries the shape.
  data[i] = Math.min(255, Math.round((data[i] * 255) / a));
  data[i + 1] = Math.min(255, Math.round((data[i + 1] * 255) / a));
  data[i + 2] = Math.min(255, Math.round((data[i + 2] * 255) / a));
  // Floor out the faint grey haze left by the source's compression noise.
  data[i + 3] = Math.max(0, Math.min(255, Math.round(((a - 22) * 255) / (255 - 22))));
}

await sharp(data, { raw: info })
  .resize({ height: 240 })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`wrote ${out}`);
