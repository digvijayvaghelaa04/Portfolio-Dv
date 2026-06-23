import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
      headless: true
    });
    
    // 1. Generate OG Image
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    const ogUrl = 'file://' + path.join(__dirname, 'og.html').replace(/\\/g, '/');
    await page.goto(ogUrl);
    await page.screenshot({ path: path.join(__dirname, 'public', 'og-image.png') });
    console.log("Successfully generated public/og-image.png!");

    // 2. Generate Favicons
    await page.setViewport({ width: 512, height: 512 });
    const favUrl = 'file://' + path.join(__dirname, 'favicon.html').replace(/\\/g, '/');
    await page.goto(favUrl);
    
    // apple-touch-icon (512x512)
    await page.screenshot({ path: path.join(__dirname, 'public', 'apple-touch-icon.png') });
    console.log("Successfully generated public/apple-touch-icon.png!");
    
    // favicon-32x32.png
    await page.setViewport({ width: 32, height: 32 });
    await page.goto(favUrl); // reload to resize content
    await page.screenshot({ path: path.join(__dirname, 'public', 'favicon-32x32.png') });
    console.log("Successfully generated public/favicon-32x32.png!");
    
    // favicon.ico
    await page.screenshot({ path: path.join(__dirname, 'public', 'favicon.ico') });
    console.log("Successfully generated public/favicon.ico!");

    await browser.close();
  } catch(e) {
    console.error("Error generating image:", e);
    process.exit(1);
  }
})();
