import { stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const images = [
  ["Logo.png", "Logo.webp"],
  ["PENTA.png", "PENTA.webp"],
  ["web.jfif", "web.webp"],
  ["mob.jpeg", "mob.webp"],
  ["ai.jfif", "ai.webp"],
  ["reddune.png", "reddune.webp"],
  ["ecommerce.png", "ecommerce.webp"],
  ["Gym.png", "Gym.webp"],
  ["engi.png", "engi.webp"],
  ["inovate.png", "inovate.webp"],
  ["itrate.png", "itrate.webp"],
  ["michel.png", "michel.webp"],
  ["sara.png", "sara.webp"],
  ["david.png", "david.webp"],
  ["jen.png", "jen.webp"],
  ["robert.png", "robert.webp"],
];

for (const [name, outputName] of images) {
  const input = path.join(publicDir, name);
  const output = path.join(publicDir, outputName);
  const image = sharp(input, { failOn: "none" });
  const meta = await image.metadata();
  const width = meta.width && meta.width > 1600 ? 1600 : meta.width;

  await image
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(output);

  const outputStats = await stat(output);
  console.log(
    `${name} ${meta.width}x${meta.height} -> ${outputName} ${outputStats.size} bytes`,
  );
}

const mapOutput = path.join(publicDir, "footer-world-map.webp");
await sharp(path.join(publicDir, "footer-world-map.svg"), { failOn: "none" })
  .resize({ width: 2500, withoutEnlargement: true })
  .webp({ quality: 88, effort: 6 })
  .toFile(mapOutput);
console.log(`footer-world-map.svg -> footer-world-map.webp ${(await stat(mapOutput)).size} bytes`);
