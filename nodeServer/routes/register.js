const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const User=require("../models/user")
const bcrypt=require("bcrypt")



router.post("/SignUp", (req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(newuser=>{

        //find if user exists or not 
        if(newuser.length>=1){
            return res.status(409).json({
                message:"user already exists"
            })
        }else{
            //create new user
            bcrypt.hash(req.body.password,10,(err,hashPassword)=>{
                if(err){
                    return res.status(500).json({
                        error:err
                    })
                }else{
                    const newuser=new User({
                        _id:new mongoose.Types.ObjectId,
                        Firstname:req.body.Firstname,
                        Middlename:req.body.Middlename,
                        Lastname:req.body.Lastname,
                        email:req.body.email,
                        password:hashPassword
                    })
                    newuser.save()
                    .then(newuser=>{
                        console.log(newuser)
                    })
                    .catch(err =>{
                        res.status(500).json({
                            error: err
                        })
                    })
                }
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