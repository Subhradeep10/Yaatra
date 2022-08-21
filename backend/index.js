const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
dotenv.config();

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
};


app.listen(8800, () => {
    connect();
    console.log('Server is running on port 8800');
});