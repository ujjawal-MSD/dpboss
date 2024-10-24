const cheerio = require('cheerio');

// Validate and process URLs
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : `${url}/`;
}

function isValidUrl(url) {
    const baseUrl = ensureTrailingSlash(process.env.SITE_URL);

    if (url.startsWith("#") || url.startsWith("mailto")) return false;
    if (url.startsWith(baseUrl)) return true;
    if (url.startsWith("https://") && !url.includes(baseUrl)) return false;
    if (url.startsWith("/") || /^[a-zA-Z]/.test(url)) return true;

    return false;
}

function processUrl(url, uniqueUrlsSet) {
    const baseUrl = ensureTrailingSlash(process.env.SITE_URL);
    const processedUrl = url.startsWith(baseUrl) ? url.replace(baseUrl, '') : url;

    if (!uniqueUrlsSet.has(processedUrl)) {
        uniqueUrlsSet.add(processedUrl);
        return processedUrl;
    }
    return null;
}

module.exports = { isValidUrl, processUrl, ensureTrailingSlash };
