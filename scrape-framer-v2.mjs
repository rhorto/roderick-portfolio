import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';

const outDir = '/tmp/framer-v2';
await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

async function capturePage(url, name) {
  console.log(`\n=== ${name.toUpperCase()} ===`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

  // Scroll fully to trigger lazy loading
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 300) {
      window.scrollTo(0, i);
      await delay(100);
    }
    window.scrollTo(0, 0);
    await delay(1000);
  });
  await new Promise(r => setTimeout(r, 2000));

  // Get page height
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${totalHeight}px`);

  // Find text-based section positions
  const sectionPositions = await page.evaluate(() => {
    const findText = (text) => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        if (walker.currentNode.textContent.trim().toLowerCase().includes(text.toLowerCase())) {
          const el = walker.currentNode.parentElement;
          if (el) {
            const rect = el.getBoundingClientRect();
            return Math.round(rect.top + window.scrollY);
          }
        }
      }
      return null;
    };

    return {
      problemOverview: findText('Problem Overview'),
      process: findText('Process'),
      userFlows: findText('User Flows'),
      wireframes: findText('Wireframe'),
      prototypes: findText('Prototype'),
      onboardingScreens: findText('Onboarding Screens'),
      dashboardScreens: findText('Dashboard Screens'),
    };
  });

  console.log('Section positions:', sectionPositions);

  // Take overlapping viewport-height screenshots down the whole page
  const step = 800; // scroll step
  let idx = 0;
  for (let y = 0; y < totalHeight; y += step) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 300));
    const filename = `${outDir}/${name}-${String(idx).padStart(2, '0')}.png`;
    await page.screenshot({ path: filename });
    idx++;
  }
  console.log(`Captured ${idx} viewport screenshots`);

  await page.close();
  return { sectionPositions, totalHeight };
}

const deltaInfo = await capturePage('https://roderick.framer.website/delta', 'delta');
const pfizerInfo = await capturePage('https://roderick.framer.website/pfizer', 'pfizer');

await browser.close();
console.log('\nDone!');
console.log('Delta sections:', deltaInfo.sectionPositions);
console.log('Pfizer sections:', pfizerInfo.sectionPositions);
