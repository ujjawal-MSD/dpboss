
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const maxRetries = 3;

async function getHtmlTags(url) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to fetch URL ${url} for the ${attempt} time.`);
      // Fetch the HTML content of the page using axios
      const response = await axios.get(`${url}`);
      const htmlContent = response.data;

      console.log(`Data for URL ${url} collected successfully.`);
      return htmlContent; // Return the raw HTML content

    } catch (error) {
      console.error(`Error fetching URL ${url} on attempt ${attempt}:`, error.message);
      if (attempt === maxRetries) {
        console.error(`Failed to fetch URL ${url} after ${maxRetries} attempts.`);
        return await getErrorHtmlContent(); // Return error HTML content if all attempts fail
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

module.exports = { getHtmlTags };