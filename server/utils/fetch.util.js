const axios = require('axios');
const fs = require('fs');
const path = require('path');

const maxRetries = 3;

async function fetchHtmlContent(url) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Fetching URL: ${url}, Attempt: ${attempt}`);
            const response = await axios.get(url, { timeout: 30000 });  // Adding timeout
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch URL ${url} on attempt ${attempt}: ${error.message}`);
            if (attempt === maxRetries) {
                return await fetchErrorHtml();  // Fetch error HTML after max retries
            }
            await delay(2000);  // Wait before retrying
        }
    }
}

async function fetchErrorHtml() {
    try {
        const errorHtmlPath = path.resolve('./error.html');
        console.log('Resolved error.html path:', errorHtmlPath);  // Check the path
        const errorHtmlContent = fs.readFileSync(errorHtmlPath, 'utf8');
        return errorHtmlContent;
    } catch (error) {
        console.error('Error reading error.html file:', error.message);
        return '<html><body><h1>Error occurred while fetching the page</h1></body></html>';
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { fetchHtmlContent };
