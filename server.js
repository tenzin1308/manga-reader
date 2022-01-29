import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import mangaReader from "./routes/mangaRouter.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.2djpc.mongodb.net/mangaReader?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/api/manga", mangaReader);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});