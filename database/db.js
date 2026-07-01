const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connection Successful`);
    } catch (error) {
        console.log(`Connection error ${error}`);
        process.exit(1);
    }
}

module.exports = connectDB;