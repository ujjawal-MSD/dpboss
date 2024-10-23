const PanelData = require('../models/panelDataModel'); // Single collection where all panel data is stored

// Define a single function to handle fetching panel data by URL
const getPanelData = async (req, res) => {
    const payload = req.body; // This should match the 'url' field in the database
    console.log('panelName: ', payload);

    try {
        // Find the panel data by matching the 'url' field with the payload.url param
        const panelData = await PanelData.findOne({ url: payload.url }, { html: 1, _id: 0 }); // Return only the 'html' field

        // If no panel data is found, return a 404
        if (!panelData) {
            return res.status(404).send('Panel not found');
        }

        // Send the HTML content as a response
        return res.json(panelData);
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = { getPanelData };
