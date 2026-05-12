import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const posterDir = path.resolve(__dirname, "../public/poster-slider");
const manifestPath = path.resolve(__dirname, "../src/data/poster-manifest.json");
const IMAGE_EXT = /\.(jpe?g|png|gif|webp|avif|svg)$/i;

function main() {
  if (!fs.existsSync(posterDir)) {
    fs.mkdirSync(posterDir, { recursive: true });
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(manifestPath, "[]\n", "utf8");
    console.warn("[poster-slider] Created empty poster folder; wrote empty src/data/poster-manifest.json.");
    return;
  }

  const urls = fs
    .readdirSync(posterDir)
    .filter((name) => IMAGE_EXT.test(name))
    .sort()
    .map((name) => `/poster-slider/${encodeURIComponent(name)}`);

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(urls, null, 2) + "\n", "utf8");
  console.log(`[poster-slider] Wrote ${urls.length} image(s) to src/data/poster-manifest.json`);
}

main();
