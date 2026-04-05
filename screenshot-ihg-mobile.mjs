import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 2 });
await page.goto('https://roderick.framer.website/ihg', { waitUntil: 'networkidle0', timeout: 60000 });

// Scroll to trigger lazy loading
await page.evaluate(async () => {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  for (let i = 0; i < document.body.scrollHeight; i += 300) {
    window.scrollTo(0, i);
    await delay(100);
  }
  await delay(1000);
});

// Scroll to the mobile phones section
// From our data: mobile phones appear after the dashboard prototypes
// Let's scroll to ~7400px which should show the 3 mobile phones
await page.evaluate(() => window.scrollTo(0, 7300));
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: '/tmp/ihg-mobile-phones.png' });

// Also get the Key Learning + Results section
await page.evaluate(() => window.scrollTo(0, 8300));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: '/tmp/ihg-key-learning.png' });

await browser.close();
console.log('Done');
