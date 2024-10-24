const cheerio = require('cheerio');
const zlib = require('zlib');

async function modifyHtmlContent(htmlContent) {
    // Regular expression to match the <img> tag with alt="dpboss net LAXMI_PICTURE"
    const imgTagRegex1 = /<img\s+[^>]*alt\s*=\s*["']dpboss\s*net\s*LAXMI_PICTURE["'][^>]*>/i;

    // Regular expression to match the <img> tag with alt="Image of dpbossss.services"
    const imgTagRegex2 = /<img\s+[^>]*alt\s*=\s*["']Image\s*of\s*dpbossss\.services["'][^>]*>/i;

    // First, replace the src attribute in the found <img> tags
    let modifiedContent = htmlContent
        // Replace the first image with /public/side.jpeg
        .replace(imgTagRegex1, (imgTag) => {
            return imgTag.replace(/src\s*=\s*["'][^"']*["']/, 'src="/public/side.jpeg"');
        })
        // Replace the second image with /public/logo.png
        .replace(imgTagRegex2, (imgTag) => {
            return imgTag.replace(/src\s*=\s*["'][^"']*["']/, 'src="/public/logo.png"');
        });

    // Replacing <a> tags based on "Matka Play" text, class, and href
    // 1. Find <a> tags by the inner text "Matka Play"
    const matkaPlayTextRegex = /<a\s+[^>]*>(\s*<i>\s*Matka\s*Play\s*<\/i>\s*)<\/a>/gi;

    // 2. Find <a> tags by class "mp-clk1" and "mp-btn"
    const classMpClkRegex = /<a\s+[^>]*class\s*=\s*["']mp-clk1["'][^>]*>([^<]*<i>\s*Matka\s*Play\s*<\/i>\s*[^<]*)<\/a>/gi;
    const classMpBtnRegex = /<a\s+[^>]*class\s*=\s*["']mp-btn["'][^>]*>([^<]*<i>\s*Matka\s*Play\s*<\/i>\s*[^<]*)<\/a>/gi;

    // 3. Find <a> tags by href attribute
    const hrefTmmatkaRegex = /<a\s+[^>]*href\s*=\s*["']https:\/\/tmmatka\.com\/["'][^>]*>([^<]*<i>\s*Matka\s*Play\s*<\/i>\s*[^<]*)<\/a>/gi;
    const hrefDpbossplayRegex = /<a\s+[^>]*href\s*=\s*["']https:\/\/dpbossplay\.online["'][^>]*>([^<]*<i>\s*Matka\s*Play\s*<\/i>\s*[^<]*)<\/a>/gi;

    // Perform replacements for <a> tags
    modifiedContent = modifiedContent
        // Replace based on inner text "Matka Play"
        .replace(matkaPlayTextRegex, '')
        // Replace based on class mp-clk1
        .replace(classMpClkRegex, '')
        // Replace based on class mp-btn
        .replace(classMpBtnRegex, '')
        // Replace based on href https://tmmatka.com/
        .replace(hrefTmmatkaRegex, '')
        // Replace based on href https://dpbossplay.online
        .replace(hrefDpbossplayRegex, '');

    // Regex to find all <a> tags
    const allAnchorTagsRegex = /<a\s+[^>]*href\s*=\s*["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;

    // Replace URLs based on the new condition
    modifiedContent = modifiedContent.replace(allAnchorTagsRegex, (match, url, innerHtml) => {
        if (url.includes('https')) {
            // Check if it contains "https://dpbossss.services"
            if (!url.includes(process.env.SITE_URL)) {
                return match.replace(url, '#'); // Replace with "#" if the URL does not contain it
            }
        }
        return match; // Return the original match if the condition is satisfied
    });

    // Finally, proceed with other replacements (site URL and specific words)
    modifiedContent = modifiedContent
        .replaceAll(`${process.env.SITE_URL}`, `${process.env.FRONTEND_URL}`)
        .replaceAll(/Boss|dpbossss.services|DPBOSS\.Services|DPBOSS|dpboss|dp|boss|DP|DP\sBOSS|DpBossss\.services/gi, '1PLUSBET');

    return modifiedContent;
}


// Compress HTML using gzip
async function compressHtmlContent(htmlContent) {
    return zlib.gzipSync(htmlContent).toString('base64');
}

module.exports = { modifyHtmlContent, compressHtmlContent };
