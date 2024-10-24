const cheerio = require('cheerio');
const { fetchHtmlContent } = require('../utils/fetch.util');
const { isValidUrl, processUrl, ensureTrailingSlash } = require('../services/url.service');
const { modifyHtmlContent, compressHtmlContent } = require('../services/html.service');
const PanelData = require('../models/panel.model');
const dotenv = require('dotenv');
dotenv.config();

const baseUrl = ensureTrailingSlash(process.env.SITE_URL);
const INTERVAL = 60000 * 5;

async function startScraping() {
    try {
        const htmlContent = await fetchHtmlContent(baseUrl);
        await updateHtmlContent(baseUrl, '/')
        const $ = cheerio.load(htmlContent);
        const uniqueUrlsSet = new Set();

        const elements = $("a");
        for (let i = 0; i < elements.length; i++) {
            const href = $(elements[i]).attr("href");
            if (href && isValidUrl(href)) {
                const processedUrl = processUrl(href, uniqueUrlsSet);
                if (processedUrl) {
                    await updateHtmlContent(baseUrl, processedUrl);
                    await delay(1000);
                }
            }
        }
        console.log("Scraping finished. Waiting before next run...");
        await delay(INTERVAL);  // Wait 5 minutes before the next run
        startScraping();
    } catch (error) {
        console.error('Error during scraping:', error);
        await delay(INTERVAL);  // Wait before retrying
        startScraping();
    }
}

async function updateHtmlContent(baseUrl, processedUrl) {
    const htmlContent = await fetchHtmlContent(`${baseUrl}${processedUrl}`);
    const modifiedHtmlContent = await modifyHtmlContent(htmlContent);
    const compressedHtml = await compressHtmlContent(modifiedHtmlContent);

    await PanelData.updateOne(
        { url: processedUrl }, // Query to find the document
        { $set: { html: compressedHtml } }, // Update the 'html' field
        { upsert: true } // Insert if the document does not exist
    );

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { startScraping };
