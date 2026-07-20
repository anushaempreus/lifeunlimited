// Converts the white-background JPEG logo into a transparent PNG.
// Near-white pixels become fully transparent; edges keep partial alpha.
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = path.join(root, "public/images/headerLogo.jpeg");
const out = path.join(root, "public/images/logo.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const px = new Uint8ClampedArray(data);
for (let i = 0; i < px.length; i += 4) {
  const r = px[i], g = px[i + 1], b = px[i + 2];
  const brightness = (r + g + b) / 3;
  if (brightness > 247) {
    px[i + 3] = 0; // pure background → transparent
  } else if (brightness > 225) {
    // soft edge — fade alpha proportionally to avoid halos
    px[i + 3] = Math.round(255 * (1 - (brightness - 225) / 22));
  }
}

await sharp(Buffer.from(px), {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(out);

console.log(`ok ${out} (${info.width}x${info.height})`);
