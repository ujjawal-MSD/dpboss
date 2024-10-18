const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urls = [
  // Panels Links  
  "",
  "/panel-chart-record/milan-morning.php",
  "/panel-chart-record/sridevi.php",
  "/panel-chart-record/kalyan-morning.php",
  "/panel-chart-record/padmavati.php",
  "/panel-chart-record/madhuri.php",
  "/panel-chart-record/sridevi-morning.php",
  "/panel-chart-record/maharani.php",
  "/panel-chart-record/prabhat.php",
  "/panel-chart-record/karnataka-day.php",
  "/panel-chart-record/time-bazar-morning.php",
  "/panel-chart-record/time-bazar.php",
  "/panel-chart-record/diamond.php",
  "/panel-chart-record/tara-mumbai-day.php",
  "/panel-chart-record/main-kalyan.php",
  "/panel-chart-record/time-bazar-day.php",
  "/panel-chart-record/milan-day.php",
  "/panel-chart-record/main-bazar-day.php",
  "/panel-chart-record/puna-bazar.php",
  "/panel-chart-record/kalyan.php",
  "/panel-chart-record/sridevi-night.php",
  "/panel-chart-record/diamond-night.php",
  "/panel-chart-record/madhuri-night.php",
  "/panel-chart-record/night-time-bazar.php",
  "/panel-chart-record/tara-mumbai-night.php",
  "/panel-chart-record/main-bazar-night.php",
  "/panel-chart-record/milan-night.php",
  "/panel-chart-record/rajdhani-night.php",
  "/panel-chart-record/main-bazar.php",
  "/panel-chart-record/maharani-day.php",
  "/panel-chart-record/sridevi-day.php",
  "/panel-chart-record/dhanshree.php",
  "/panel-chart-record/kalyan-night.php",
  "/panel-chart-record/kalyan-pro.php",
  "/panel-chart-record/gujrat.php",
  "/panel-chart-record/old-main-mumbai.php",
  "/panel-chart-record/rajlaxmi.php",
  "/panel-chart-record/madhur-morning.php",
  "/panel-chart-record/madhur-day.php",
  "/panel-chart-record/madhur-night.php",
  "/panel-chart-record/ratan-khatri.php",
  "/panel-chart-record/maharani-night.php",
  "/panel-chart-record/padmavati-night.php",
  "/panel-chart-record/jay-shree-day.php",
  "/panel-chart-record/sri-dhanalaxmi.php",
  "/panel-chart-record/dhanshree-day.php",
  "/panel-chart-record/main-bombay.php",
  "/panel-chart-record/sunday-bazar.php",
  "/panel-chart-record/sunday-bazar-night.php",
  "/panel-chart-record/super-goa-day.php",
  "/panel-chart-record/puna-night-main.php",
  "/panel-chart-record/khajana.php",
  "/panel-chart-record/sridevi-main.php",
  "/panel-chart-record/sridevi-main-night.php",
  "/panel-chart-record/supreme-morning.php",
  "/panel-chart-record/supreme-day.php",
  "/panel-chart-record/supreme-night.php",
  "/panel-chart-record/gujrat-night.php",
  "/panel-chart-record/dhanshree-night.php",
  "/panel-chart-record/bsf-bazar.php",
  "/panel-chart-record/sita-morning.php",
  "/panel-chart-record/kalyan-gold-night.php",
  "/panel-chart-record/bombay-day.php",
  "/panel-chart-record/srilakshmi.php",
  "/panel-chart-record/milan-bazar.php",
  "/panel-chart-record/ratan-day.php",
  "/panel-chart-record/chandan.php",
  "/panel-chart-record/maharashtra.php",
  "/panel-chart-record/worli.php",
  "/panel-chart-record/worli-mumbai-day.php",
  "/panel-chart-record/main-mumbai-rk.php",
  "/panel-chart-record/worli-mumbai.php",
  "/panel-chart-record/sita-day.php",
  "/panel-chart-record/satyam-mumbai.php",
  "/panel-chart-record/country-bazar.php",
  "/panel-chart-record/rose-bazar-day.php",
  "/panel-chart-record/rose-bazar-night.php",
  "/panel-chart-record/janta-morning.php",
  "/panel-chart-record/central-bombay.php",
  "/panel-chart-record/teen-patti.php",
  "/panel-chart-record/super-time.php",
  "/panel-chart-record/bhagyalaxmi.php",
  "/panel-chart-record/kaali.php",
  "/panel-chart-record/main-mumbai-night.php",
  "/panel-chart-record/super-matka.php",
  "/panel-chart-record/maharaj-time.php",
  "/panel-chart-record/maharaj-day.php",
  "/panel-chart-record/maharaj-night.php",
  "/panel-chart-record/bazar-day.php",
  "/panel-chart-record/bazar-night.php",
  "/panel-chart-record/rajdhani-day.php",
  "/panel-chart-record/puna-night.php",
  "/panel-chart-record/time-night.php",
  "/panel-chart-record/mohini.php",
  "/panel-chart-record/mumbai-star.php",
  "/panel-chart-record/kalyan-bazar.php",
  "/panel-chart-record/main-bazar-morning.php",
  "/panel-chart-record/mahadevi.php",
  "/panel-chart-record/satyam-mumbai-evening.php",
  "/panel-chart-record/kalyan-gold.php",
  "/panel-chart-record/sita-night.php",
  "/panel-chart-record/kamal-morning.php",
  "/panel-chart-record/kamal-day.php",
  "/panel-chart-record/kamal-night.php",
  "/panel-chart-record/rajdhani-sunday.php",
  "/panel-chart-record/andhra-morning.php",
  "/panel-chart-record/andhra-day.php",
  "/panel-chart-record/andhra-night.php",
  "/panel-chart-record/bombay-rajshree-day.php",
  "/panel-chart-record/bombay-rajshree-night.php",
  "/panel-chart-record/bombay-rajshree-morning.php",
  "/panel-chart-record/milan-bazar-day.php",
  "/panel-chart-record/milan-bazar-night.php",
  "/panel-chart-record/mahadevi-morning.php",
  "/panel-chart-record/mahadevi-night.php",
  "/panel-chart-record/rajyog-day.php",
  "/panel-chart-record/rajyog-night.php",
  "/panel-chart-record/gowa.php",
  "/panel-chart-record/royal-day.php",
  "/panel-chart-record/mumbai-star-main.php",






  // Jodi Panels Links  
  "/jodi-chart-record/milan-morning.php",
  "/jodi-chart-record/sridevi.php",
  "/jodi-chart-record/kalyan-morning.php",
  "/jodi-chart-record/padmavati.php",
  "/jodi-chart-record/madhuri.php",
  "/jodi-chart-record/sridevi-morning.php",
  "/jodi-chart-record/maharani.php",
  "/jodi-chart-record/prabhat.php",
  "/jodi-chart-record/karnataka-day.php",
  "/jodi-chart-record/time-bazar-morning.php",
  "/jodi-chart-record/time-bazar.php",
  "/jodi-chart-record/diamond.php",
  "/jodi-chart-record/tara-mumbai-day.php",
  "/jodi-chart-record/main-kalyan.php",
  "/jodi-chart-record/time-bazar-day.php",
  "/jodi-chart-record/milan-day.php",
  "/jodi-chart-record/main-bazar-day.php",
  "/jodi-chart-record/puna-bazar.php",
  "/jodi-chart-record/kalyan.php",
  "/jodi-chart-record/sridevi-night.php",
  "/jodi-chart-record/diamond-night.php",
  "/jodi-chart-record/madhuri-night.php",
  "/jodi-chart-record/night-time-bazar.php",
  "/jodi-chart-record/tara-mumbai-night.php",
  "/jodi-chart-record/main-bazar-night.php",
  "/jodi-chart-record/milan-night.php",
  "/jodi-chart-record/rajdhani-night.php",
  "/jodi-chart-record/main-bazar.php",
  "/jodi-chart-record/maharani-day.php",
  "/jodi-chart-record/sridevi-day.php",
  "/jodi-chart-record/dhanshree.php",
  "/jodi-chart-record/kalyan-night.php",
  "/jodi-chart-record/kalyan-pro.php",
  "/jodi-chart-record/gujrat.php",
  "/jodi-chart-record/old-main-mumbai.php",
  "/jodi-chart-record/rajlaxmi.php",
  "/jodi-chart-record/madhur-morning.php",
  "/jodi-chart-record/madhur-day.php",
  "/jodi-chart-record/madhur-night.php",
  "/jodi-chart-record/ratan-khatri.php",
  "/jodi-chart-record/maharani-night.php",
  "/jodi-chart-record/padmavati-night.php",
  "/jodi-chart-record/jay-shree-day.php",
  "/jodi-chart-record/sri-dhanalaxmi.php",
  "/jodi-chart-record/dhanshree-day.php",
  "/jodi-chart-record/main-bombay.php",
  "/jodi-chart-record/sunday-bazar.php",
  "/jodi-chart-record/sunday-bazar-night.php",
  "/jodi-chart-record/super-goa-day.php",
  "/jodi-chart-record/puna-night-main.php",
  "/jodi-chart-record/khajana.php",
  "/jodi-chart-record/sridevi-main.php",
  "/jodi-chart-record/sridevi-main-night.php",
  "/jodi-chart-record/supreme-morning.php",
  "/jodi-chart-record/supreme-day.php",
  "/jodi-chart-record/supreme-night.php",
  "/jodi-chart-record/gujrat-night.php",
  "/jodi-chart-record/dhanshree-night.php",
  "/jodi-chart-record/bsf-bazar.php",
  "/jodi-chart-record/sita-morning.php",
  "/jodi-chart-record/kalyan-gold-night.php",
  "/jodi-chart-record/bombay-day.php",
  "/jodi-chart-record/srilakshmi.php",
  "/jodi-chart-record/milan-bazar.php",
  "/jodi-chart-record/ratan-day.php",
  "/jodi-chart-record/chandan.php",
  "/jodi-chart-record/maharashtra.php",
  "/jodi-chart-record/worli.php",
  "/jodi-chart-record/worli-mumbai-day.php",
  "/jodi-chart-record/main-mumbai-rk.php",
  "/jodi-chart-record/worli-mumbai.php",
  "/jodi-chart-record/sita-day.php",
  "/jodi-chart-record/satyam-mumbai.php",
  "/jodi-chart-record/country-bazar.php",
  "/jodi-chart-record/rose-bazar-day.php",
  "/jodi-chart-record/rose-bazar-night.php",
  "/jodi-chart-record/janta-morning.php",
  "/jodi-chart-record/central-bombay.php",
  "/jodi-chart-record/teen-patti.php",
  "/jodi-chart-record/super-time.php",
  "/jodi-chart-record/bhagyalaxmi.php",
  "/jodi-chart-record/kaali.php",
  "/jodi-chart-record/main-mumbai-night.php",
  "/jodi-chart-record/super-matka.php",
  "/jodi-chart-record/maharaj-time.php",
  "/jodi-chart-record/maharaj-day.php",
  "/jodi-chart-record/maharaj-night.php",
  "/jodi-chart-record/bazar-day.php",
  "/jodi-chart-record/bazar-night.php",
  "/jodi-chart-record/rajdhani-day.php",
  "/jodi-chart-record/puna-night.php",
  "/jodi-chart-record/time-night.php",
  "/jodi-chart-record/mohini.php",
  "/jodi-chart-record/mumbai-star.php",
  "/jodi-chart-record/kalyan-bazar.php",
  "/jodi-chart-record/main-bazar-morning.php",
  "/jodi-chart-record/mahadevi.php",
  "/jodi-chart-record/satyam-mumbai-evening.php",
  "/jodi-chart-record/kalyan-gold.php",
  "/jodi-chart-record/sita-night.php",
  "/jodi-chart-record/kamal-morning.php",
  "/jodi-chart-record/kamal-day.php",
  "/jodi-chart-record/kamal-night.php",
  "/jodi-chart-record/rajdhani-sunday.php",
  "/jodi-chart-record/andhra-morning.php",
  "/jodi-chart-record/andhra-day.php",
  "/jodi-chart-record/andhra-night.php",
  "/jodi-chart-record/bombay-rajshree-day.php",
  "/jodi-chart-record/bombay-rajshree-night.php",
  "/jodi-chart-record/bombay-rajshree-morning.php",
  "/jodi-chart-record/milan-bazar-day.php",
  "/jodi-chart-record/milan-bazar-night.php",
  "/jodi-chart-record/mahadevi-morning.php",
  "/jodi-chart-record/mahadevi-night.php",
  "/jodi-chart-record/rajyog-day.php",
  "/jodi-chart-record/rajyog-night.php",
  "/jodi-chart-record/gowa.php",
  "/jodi-chart-record/royal-day.php",
  "/jodi-chart-record/mumbai-star-main.php"

];
const modifiedHtmlContent = [];
const maxRetries = 3;

async function getHtmlTags(page, url, index) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to fetch URL ${url} for the ${attempt} time.`);
      await page.goto(`${process.env.SITE_URL}${url}`, { waitUntil: 'networkidle0' });

      const htmlContent = await page.$eval('html', element => element.outerHTML);
      const modifiedContent = htmlContent
        .replaceAll(`${process.env.SITE_URL}`, `${process.env.FRONTEND_URL}`)
        .replaceAll(/Boss|dpbossss.services|DPBOSS\.Services|DPBOSS|dpboss|dp|boss|DP|DP\sBOSS|DpBossss\.services/gi, 'WOLF247')

      modifiedHtmlContent[index] = modifiedContent;
      console.log(`Data for URL ${url} collected successfully.`);

      // Wait for 2 seconds before moving to the next URL
      await new Promise(resolve => setTimeout(resolve, 2000));
      return; // Exit the function on successful fetch
    } catch (error) {
      console.error(`Error fetching URL ${url} on attempt ${attempt}:`, error.message);
      if (attempt === maxRetries) {
        console.error(`Failed to fetch URL ${url} after ${maxRetries} attempts.`);
        modifiedHtmlContent[index] = await getErrorHtmlContent();
      } else {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait before retrying
      }
    }
  }
}

async function getErrorHtmlContent() {
  try {
    const errorHtmlPath = path.resolve('./error.html');
    const errorHtmlContent = fs.readFileSync(errorHtmlPath, 'utf8');
    return errorHtmlContent;
  } catch (error) {
    console.error('Error reading error.html file:', error.message);
    return '<html><body><h1>Error occurred while fetching the page</h1></body></html>';
  }
}

async function* startScraping() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/opt/google/chrome/google-chrome'
  });

  try {
    const page = await browser.newPage();

    while (true) {
      for (let i = 0; i < urls.length; i++) {
        await getHtmlTags(page, urls[i], i);
        yield modifiedHtmlContent[i];
      }
    }
  } finally {
    await browser.close();
  }
}

module.exports = startScraping;