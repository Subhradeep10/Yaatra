import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

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
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.get('/', (req, res) => {
    res.json('Hello World');
})
app.use("/api/auth", auth);
app.use("/api/hotels", hotels);
app.use("/api/users", users);
app.use("/api/rooms", rooms);




app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json({ status: errorStatus, message: errorMessage, stack: err.stack });
});

app.listen(process.env.PORT || 8800, () => {
    connect();
    console.log('Server is running on port 8800');
});