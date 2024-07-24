import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";


const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
    const image: any  = req.file;
    try {
    if(!image){
        res.status(400).json({message : "image is required"});
    }
    const result = await handleUpload(image.path);
    res.status(201).json({message : "upload success", result});
    }
    catch(err){
        res.send(err);
    }
});
router.get("/upload/multiple", multiple, async (req, res) => {
    const images : any = req.files;
    try{
        if(!images){
            res.status(404).json({message : "image is required"});
        }
        const result = await images.map((img: {path : string})=> handleUpload(img.path));
        res.status(201).json({message : "upload success", result});
    }
    catch(err){
        res.send(err);
    }
});

export default router;

