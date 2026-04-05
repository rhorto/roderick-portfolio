import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';

const outDir = '/tmp/framer-sections';
await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

const pages = [
  { url: 'https://roderick.framer.website/delta', name: 'delta' },
  { url: 'https://roderick.framer.website/pfizer', name: 'pfizer' },
];

for (const p of pages) {
  console.log(`\n=== ${p.name.toUpperCase()} ===`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 60000 });

  // Scroll fully to trigger lazy loading
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 300) {
      window.scrollTo(0, i);
      await delay(150);
    }
    window.scrollTo(0, 0);
    await delay(1000);
  });
  await new Promise(r => setTimeout(r, 3000));

  // Full page screenshot
  const fullPath = `${outDir}/${p.name}-fullpage.png`;
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log(`Full page: ${fullPath}`);

  // Get all top-level sections and their positions
  const sections = await page.evaluate(() => {
    // Get all direct children sections or major div containers
    const containers = document.querySelectorAll('section, [data-framer-name], [class*="framer-"]');
    const results = [];
    const seen = new Set();

    containers.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      // Only get substantial sections (height > 200px, width > 500px)
      if (rect.height > 200 && rect.width > 500) {
        const key = `${Math.round(rect.top)}-${Math.round(rect.height)}`;
        if (!seen.has(key)) {
          seen.add(key);
          results.push({
            index: results.length,
            top: Math.round(rect.top + window.scrollY),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            text: el.textContent?.slice(0, 100)?.trim() || '',
          });
        }
      }
    });

    return results.sort((a, b) => a.top - b.top);
  });

  console.log(`Found ${sections.length} sections`);

  for (const s of sections) {
    const filename = `${outDir}/${p.name}-section-${String(s.index).padStart(2, '0')}.png`;
    try {
      await page.screenshot({
        path: filename,
        clip: {
          x: Math.max(0, s.left),
          y: Math.max(0, s.top),
          width: Math.min(s.width, 1920),
          height: Math.min(s.height, 4000),
        },
      });
      console.log(`  Section ${s.index}: ${s.text.slice(0, 60)}... (${s.height}px)`);
    } catch (e) {
      console.log(`  Failed section ${s.index}: ${e.message}`);
    }
  }

  await page.close();
}

await browser.close();
console.log('\nDone!');
