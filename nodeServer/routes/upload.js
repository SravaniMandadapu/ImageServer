const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const image=require("../models/image")




router.post("/Upload", (req,res,next)=>{
    image.find({URL:req.body.URL})
    .exec()
    .then(newimage=>{

        //find if user exists or not 
        if(newimage.length>=1){
            return res.status(409).json({
                message:"image already exists"
            })
        }else{
            //create new image

                    const newimage=new image({
                        _id:new mongoose.Types.ObjectId,
                        URL:req.body.URL
                    })
                    newimage.save()
                    .then(newimage=>{
                        console.log(newimage)
                    })
                    .catch(err =>{
                        res.status(500).json({
                            error: err
                        })
                    })
                }
            
        
    })
    .catch(err=>{
        res.status(422).json({
            error:err
        })
    })
    
})

module.exports=router;