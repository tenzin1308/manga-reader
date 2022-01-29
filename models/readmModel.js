import mongoose from "mongoose";

const readmModelSchema = new mongoose.Schema({
    "manga_name": {
        type: String,
        required: true
    },
    "manga_URL": {
        type: String,
        required: true
    },
    "manga_image": {
        type: String,
        required: true
    },
    "manga_description": {
        type: String,
        required: true
    },
    "manga_chapters": [
        {
            "chapter_URL": [
                {
                    type: String,
                    required: true
                }
            ]
        }
    ]
},
    {
        collection: "readm"
    }
);


const readmModelModel = mongoose.model("readmModelModel", readmModelSchema);
export default readmModelModel;

