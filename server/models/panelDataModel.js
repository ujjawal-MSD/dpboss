const mongoose = require('mongoose');

const panelDataSchema = new mongoose.Schema({ },{strict:false});


module.exports = mongoose.model('PanelData', panelDataSchema);
