const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require('./config/mongodbConfig');
const panelRouter = require('./routes/panel.routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;

app.use('/api', panelRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
