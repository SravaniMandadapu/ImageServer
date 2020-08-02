const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const images=require("../models/image")

router.get("/images" ,(req,res,next)=>{
    images.find()
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
})

module.exports=router;