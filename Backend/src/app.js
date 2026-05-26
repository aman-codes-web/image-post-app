const express = require('express');
const multer = require('multer');
const postModel=require("./models/post.model");
const uploadfile = require("./services/storage.service");

const cors = require('cors');

const app = express();

app.use(cors())
const upload =multer({storage:multer.memoryStorage()})
app.use(express.json());
 
app.post("/create-post",upload.single("image"), async(req,res)=>{ 
    try {
        if (!req.file) {
            return res.status(400).json({
                message:"Image is required"
            })
        }

        const result = await uploadfile(req.file.buffer, req.file.originalname)
        const post = await postModel.create({
            image:result.url,
            caption:req.body.caption
        })
        return res.status(201).json({

            message:"Post created successfully",
            post
            
        })
    } catch (error) {
        console.error("Create post failed:", error)
        return res.status(500).json({
            message:"Failed to create post",
            error:error.message
        })
    }
})

app.get("/posts",async(req,res)=>{

try {
const posts = await postModel.find()

return res.status(200).json({

    message:"Post are fetched",
    posts
})
} catch (error) {
    console.error("Fetch posts failed:", error)
    return res.status(500).json({
        message:"Failed to fetch posts",
        error:error.message
    })
}

})

module.exports = app
