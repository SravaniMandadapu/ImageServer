const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const User=require("../models/user")

router.post("/login",(req,res,next)=>{

    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length <1){
        //No User exists
        return res.status(401).json({
            message:"Auth failed"
        })
    }else{
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:"Auth failed"
                })
            }
            if(result){
                //create JWT token
                return res.status(200).json({
                    message:"Auth Successful"
                })
            }
            res.status(401).json({
                message:"Auth failed"
            })
        })
    }
})


    .catch(err=>{
        return res.status(500).json({
            error:err
        })
    })


        
})

module.exports=router