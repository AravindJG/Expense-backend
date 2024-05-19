import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import expenseRouter from "./routes/expenseRoute.js"

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',expenseRouter);

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to mongodb");
        app.listen(PORT, () => {
            console.log(`Node api app is running in port ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    })