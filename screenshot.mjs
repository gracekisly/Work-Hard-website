import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label]");
  process.exit(1);
}

const screenshotDir = "./temporary-screenshots";
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// Auto-increment: find the next available N
const existing = fs.readdirSync(screenshotDir)
  .map(f => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map(m => parseInt(m[1]));

const nextN = existing.length > 0 ? Math.max(...existing) + 1 : 1;
const filename = label
  ? `screenshot-${nextN}-${label}.png`
  : `screenshot-${nextN}.png`;
const outputPath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

try {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log(`✓ Screenshot saved: ${outputPath}`);
} catch (err) {
  console.error(`✗ Failed to screenshot ${url}:`, err.message);
  process.exit(1);
} finally {
  await browser.close();
}