import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('https://roderick.framer.website/ihg', { waitUntil: 'networkidle0', timeout: 60000 });

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

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
console.log(`Page height: ${totalHeight}px`);

// Full page screenshot
await page.screenshot({ path: '/tmp/framer-sections/ihg-fullpage.png', fullPage: true });
console.log('Full page screenshot saved');

// Section positions
const positions = await page.evaluate(() => {
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
    dashboardScreens: findText('Dashboard'),
    mobileScreens: findText('Mobile'),
  };
});
console.log('Sections:', positions);

// Viewport screenshots
const step = 800;
let idx = 0;
for (let y = 0; y < totalHeight; y += step) {
  await page.evaluate(sy => window.scrollTo(0, sy), y);
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: `/tmp/framer-v2/ihg-${String(idx).padStart(2, '0')}.png` });
  idx++;
}
console.log(`Captured ${idx} viewport screenshots`);

await browser.close();
