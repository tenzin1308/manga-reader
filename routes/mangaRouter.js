import express from "express";
import readmModel from "../models/readmModel.js";

const mangaReader = express.Router();

mangaReader.route("/readm/titles").get(async (req, res) => {
    const mangas = await readmModel.find();
    if (mangas.length > 0) {
        return res.json(mangas.map(manga => manga.manga_name));
    }
    return res.json({ message: "No manga readers found" });
});

mangaReader.route("/readm/titles/manga_chapters").get(async (req, res) => {
    const manga = await readmModel.findOne({"manga_name": req.query.manga_name});
    if (manga.length > 0) {
        return res.json(manga.manga_chapters);
    }
    return res.json({ message: "No manga readers found" });
});

export default mangaReader;