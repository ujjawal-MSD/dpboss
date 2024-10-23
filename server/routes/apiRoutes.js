const express = require('express');
const { getPanelData } = require('../controller/getController');

const router = express.Router();

// Use a single dynamic route
router.post('/get-html', getPanelData);

module.exports = router;
