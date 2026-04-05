import puppeteer from 'puppeteer';
import { writeFile } from 'fs/promises';
import { basename } from 'path';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

const pages = [
  { url: 'https://roderick.framer.website/ihg', name: 'ihg' },
  { url: 'https://roderick.framer.website/pfizer', name: 'pfizer' },
  { url: 'https://roderick.framer.website/delta', name: 'delta' },
];

for (const p of pages) {
  console.log(`\n--- Scraping ${p.name} ---`);
  await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Scroll to bottom to trigger lazy-loaded images
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 400) {
      window.scrollTo(0, i);
      await delay(200);
    }
    // Scroll back to top and wait
    window.scrollTo(0, 0);
    await delay(500);
  });

  // Wait for images to load
  await new Promise(r => setTimeout(r, 2000));

  // Get all image URLs
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const bgs = Array.from(document.querySelectorAll('[style*="background-image"]'));

    const urls = new Set();

    imgs.forEach(img => {
      if (img.src && !img.src.includes('data:') && !img.src.includes('svg')) {
        urls.add(img.src);
      }
      // Also check srcset
      if (img.srcset) {
        img.srcset.split(',').forEach(s => {
          const url = s.trim().split(' ')[0];
          if (url && !url.includes('data:')) urls.add(url);
        });
      }
    });

    bgs.forEach(el => {
      const style = el.style.backgroundImage;
      const match = style.match(/url\(["']?([^"')]+)["']?\)/);
      if (match) urls.add(match[1]);
    });

    return Array.from(urls);
  });

  console.log(`Found ${images.length} images on ${p.name}`);

  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    try {
      const response = await page.evaluate(async (url) => {
        const res = await fetch(url);
        const buf = await res.arrayBuffer();
        return Array.from(new Uint8Array(buf));
      }, url);

      // Determine extension from URL
      const urlPath = new URL(url).pathname;
      let ext = urlPath.split('.').pop()?.split('?')[0] || 'jpg';
      if (!['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext)) ext = 'jpg';

      const filename = `/tmp/framer-${p.name}-${String(i).padStart(2, '0')}.${ext}`;
      await writeFile(filename, Buffer.from(response));
      console.log(`  Saved: ${filename} (${Math.round(response.length/1024)}KB)`);
    } catch (e) {
      console.log(`  Failed: ${url} — ${e.message}`);
    }
  }
}

await browser.close();
console.log('\nDone!');
