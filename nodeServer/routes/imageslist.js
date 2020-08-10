const express=require("express")
const router=express.Router()

const image=require("../models/image")

router.get("/images",(req,res,next)=>{

    image.find()
    .then(images=>{
        res.status(200).json(images)
    }).catch(err=>{
        res.status(500).json({
            message: "Authentication failure"
        })
    })
})

module.exports=router;