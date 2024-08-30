const mongoose = require('mongoose');  
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.log('Error connecting to database', err.message);
});


module.exports = mongoose;


