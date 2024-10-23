const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require('./config/mongodbConfig');
// const redis  = require('./config/redisConfig');
// const {storeHtmlTags} = require('./controller/apiController'); 
const panelRouter = require('./routes/apiRoutes');
// const { startScraping } = require('./services/process');
// const { processHtmlContent } = require('./services/process');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// startScraping();

const PORT = process.env.PORT || 9000;

app.use('/api', panelRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
