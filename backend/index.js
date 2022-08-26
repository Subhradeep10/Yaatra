const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/users');
const hotels = require('./routes/hotels');
const rooms = require('./routes/rooms');
const cookieParser = require('cookie-parser')
const cors = require('cors');

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

//Middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/hotels", hotels);
app.use("/api/users", users);
app.use("/api/rooms", rooms);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json({ status: errorStatus, message: errorMessage, stack: err.stack });
});

app.listen(8800, () => {
    connect();
    console.log('Server is running on port 8800');
});