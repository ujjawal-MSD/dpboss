const { startScraping } = require('./controller/scrape.controller');
const mongoose = require('./config/mongodbConfig');

// Initialize and start the scraping process
startScraping();
