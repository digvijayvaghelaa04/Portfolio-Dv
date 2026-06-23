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
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    
    // Windows file URLs need an extra slash if using absolute paths, 
    // but puppeteer handles standard file:// paths if properly formatted.
    const fileUrl = 'file://' + path.join(__dirname, 'og.html').replace(/\\/g, '/');
    await page.goto(fileUrl);
    
    await page.screenshot({ path: path.join(__dirname, 'public', 'og-image.png') });
    console.log("Successfully generated public/og-image.png!");
    await browser.close();
  } catch(e) {
    console.error("Error generating image:", e);
    process.exit(1);
  }
})();
