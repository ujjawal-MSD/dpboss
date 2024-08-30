const express = require('express');
const { getPanelData } = require('../controller/getController');

const router = express.Router();

// Use a single dynamic route
router.get('/:panelName', getPanelData);

module.exports = router;
