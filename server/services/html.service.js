const cheerio = require('cheerio');
const zlib = require('zlib');

// Modify HTML content (replace URLs, text)
async function modifyHtmlContent(htmlContent) {
    return htmlContent
    .replaceAll(`${process.env.SITE_URL}`, `${process.env.FRONTEND_URL}`)
    .replaceAll(/Boss|dpbossss.services|DPBOSS\.Services|DPBOSS|dpboss|dp|boss|DP|DP\sBOSS|DpBossss\.services/gi, 'WOLF247');
}

// Compress HTML using gzip
async function compressHtmlContent(htmlContent) {
    return zlib.gzipSync(htmlContent).toString('base64');
}

module.exports = { modifyHtmlContent, compressHtmlContent };
