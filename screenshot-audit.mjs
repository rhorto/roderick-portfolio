import { chromium } from 'playwright';

const BASE = 'https://roderick-portfolio-mu.vercel.app';
const pages = [
  { name: 'home', path: '/' },
  { name: 'work', path: '/work' },
  { name: 'case-study', path: '/work/audiences247' },
  { name: 'about', path: '/about' },
  { name: 'resume', path: '/resume' },
  { name: '404', path: '/nonexistent' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();

  for (const pg of pages) {
    await page.goto(BASE + pg.path, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(2000); // wait for animations
    
    // Full page screenshot
    await page.screenshot({
      path: `/tmp/portfolio-screenshots/${pg.name}-${vp.name}-full.png`,
      fullPage: true,
    });
    
    // Above the fold screenshot
    await page.screenshot({
      path: `/tmp/portfolio-screenshots/${pg.name}-${vp.name}-fold.png`,
      fullPage: false,
    });
    
    console.log(`✓ ${pg.name} @ ${vp.name}`);
  }
  await context.close();
}

await browser.close();
console.log('\nDone! Screenshots saved to /tmp/portfolio-screenshots/');
