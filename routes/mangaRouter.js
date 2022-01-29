import express from "express";
import readmModel from "../models/readmModel.js";

const mangaReader = express.Router();

// GET method for READM
mangaReader.route("/readm/").get(async (req, res) => {
    const mangas = await readmModel.find();
    if (mangas.length > 0) {
        const result = [];
        mangas.map(manga => {
            const temp = {};
            temp["manga_name"] = manga.manga_name;
            temp["manga_URL"] = manga.manga_URL;
            temp["manga_image"] = manga.manga_image;
            temp["manga_description"] = manga.manga_description;
            result.push(temp);
        });
        return res.json(result);
    }
    return res.json({ message: "No manga readers found" });
});
mangaReader.route("/readm/title/manga_chapters").get(async (req, res) => {
    const manga = await readmModel.findOne({"manga_name": req.query.manga_name});
    if (manga) {
        return res.json(manga.manga_chapters);
    }
    return res.json({ message: "No manga readers found" });
});

// GET method for ASURA

mangaReader.route("/asura/").get(async (req, res) => {
    // some code here
    return res.json({ message: "Manga's from ASURA DB" });
});
mangaReader.route("/asura/title/manga_chapters").get(async (req, res) => {
    // some code here
    return res.json({ message: "Manga's from ASURA DB" });
});
export default mangaReader;