const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const getHtmlTags  = require('./api/scrap');
const mongoose  = require('./config/mongodbConfig');
const redis  = require('./config/redisConfig');
const {storeHtmlTags} = require('./controller/apiController'); 
const panelRouter = require('./routes/apiRoutes');

dotenv.config();

const app = express();
app.use(cors());

storeHtmlTags();

const PORT = process.env.PORT || 9000;

app.use('/api', panelRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
