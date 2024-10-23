const cheerio = require('cheerio');
const { isValidUrl, processUrl, modifyHtmlContent, ensureTrailingSlash } = require('./filter');
const { getHtmlTags } = require('../api/scrap');
const dotenv = require('dotenv');
const PanelData = require('../models/panelDataModel');
const zlib = require('zlib');
dotenv.config();
const mongoose  = require('../config/mongodbConfig');


let baseUrl = ensureTrailingSlash(process.env.SITE_URL)
let interval = 60000 * 5;
// Function to fetch and process the HTML content from each URL
async function startScraping() {
  try {

    // Fetch the HTML from the initial page to get the URLs
    const htmlContent = await getHtmlTags(baseUrl);
    await update_htmlcontent(baseUrl, '/')

    const $ = cheerio.load(htmlContent); // Load HTML into cheerio
    const uniqueUrlsSet = new Set(); // Set to store unique URLs

    const elements = $("a"); // Get all anchor elements
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const href = $(element).attr("href");
      if (href && isValidUrl(href)) {
        const processedUrl = processUrl(href, uniqueUrlsSet); // Process and clean the URL
        console.log('href:', href, 'processedUrl:', processedUrl);
        if (processedUrl) {
          await update_htmlcontent(baseUrl, processedUrl)
        }
      }
    }

    await delay(interval);
    startScraping();

  } catch (error) {
    console.log('error: ', error);
    await delay(interval)
    startScraping()
  }
}
startScraping();
async function update_htmlcontent(baseUrl, processedUrl) {
  // Fetch the HTML content of the current URL
  const htmlContentForUrl = await getHtmlTags(`${baseUrl}${processedUrl}`);
  const modifiedHtmlContent = await modifyHtmlContent(htmlContentForUrl);
  const compressedHtml = await zlib.gzipSync(modifiedHtmlContent).toString('base64');
  // If no document exists for this URL, create a new one

  await PanelData.updateOne({ url: processedUrl }, {
    $setOnInsert: {
      url: processedUrl,
      html: compressedHtml
    }
  }, { upsert: true })
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = { startScraping };