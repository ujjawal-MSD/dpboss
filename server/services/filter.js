const cheerio = require('cheerio');


// url validation checking in anchor tag 
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : `${url}/`;
}

// Function to check if a URL is valid based on the provided criteria
function isValidUrl(url) {
    const baseUrl = ensureTrailingSlash(process.env.SITE_URL);
    
    if (url.startsWith("#")) {
        return false;
    }
    if (url.startsWith(baseUrl)) {  // Use SITE_URL from environment variables
        return true;
    }
    if (url.startsWith("https://") && !url.includes(baseUrl)) {
        return false;
    }
    if (url.startsWith("mailto")) {
        return false;
    }
    if (url.startsWith("/") || /^[a-zA-Z]/.test(url)) {
        return true;
    }
    return false;
}

// Process URLs to remove base URL and ensure uniqueness
function processUrl(url, uniqueUrlsSet) {
    const baseUrl = ensureTrailingSlash(process.env.SITE_URL); // Ensure base URL ends with '/'
    let processedUrl = url.startsWith(baseUrl) ? url.replace(baseUrl, '') : url;

    // Ensure the URL is unique before adding
    if (!uniqueUrlsSet.has(processedUrl)) {
        uniqueUrlsSet.add(processedUrl); // Store unique URL in the set
        return processedUrl; // Return processed URL if unique
    }
    return null; // Return null if the URL is a duplicate
}

// Fetch anchor tag URLs from the HTML content
async function fetchAnchorUrls(html) {
    try {
        const $ = cheerio.load(html); // Load HTML into cheerio
        const uniqueUrlsSet = new Set(); // Set to store unique URLs
        const urls = [];

        // Extract all anchor tags' href attributes
        const elements = $("a"); // Get all anchor elements
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const href = $(element).attr("href");
            if (href && isValidUrl(href)) {
                const processedUrl = processUrl(href, uniqueUrlsSet); // Process and clean the URL
                console.log('processedUrl: ', processedUrl);
                if (processedUrl) {

                    // urls.push(processedUrl); // Add processed URL to the array if it's unique
                }
            }
        }
        
        return urls; // Return all valid and unique processed URLs
    } catch (error) {
        console.error(`Error fetching urls:`, error.message);
        return [];
    }
}

// get panels name from urls 
// function getPanelsName(url) {
//     const match = url.match(/\/([^\/]+)\.php$/);
//     return match ? match[1] : null;
// }

// html content modificattion name and urls modification 
async function modifyHtmlContent(htmlContent) {
    return htmlContent
        .replaceAll(`${process.env.SITE_URL}`, `${process.env.FRONTEND_URL}`)
        .replaceAll(/Boss|dpbossss.services|DPBOSS\.Services|DPBOSS|dpboss|dp|boss|DP|DP\sBOSS|DpBossss\.services/gi, 'WOLF247');
}

  
module.exports = { isValidUrl, modifyHtmlContent, ensureTrailingSlash,processUrl };