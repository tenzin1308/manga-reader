import express from "express";
import readmModel from "../models/readmModel.js";

const mangaReader = express.Router();

mangaReader.route("/readm/").get(async (req, res) => {
    const mangas = await readmModel.find();
    if (mangas.length > 0) {
        return res.json(mangas);
    }
    return res.json({ message: "No manga readers found" });
});

export default mangaReader;