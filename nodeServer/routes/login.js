

const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const User=require("../models/user")
const jwt=require("jsonwebtoken")




router.post("/login",(req,res,next)=>{

    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length <1){
        //No User exists
        
        return res.status(401).json({
            message:"Auth failed",
            
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
                const accesstoken= jwt.sign({
                    userId: user[0]._id,
                    FirstName: user[0].FirstName,
                    LastName: user[0].LastName,
                    email: user[0].email,
                  },require("../secret_keys").ACCESS_TOKEN_SECRET,
                  {
                    expiresIn: "1h"
                  })
                  return res.status(200).json({
                    message:"Auth Successful",
                    accesstoken: accesstoken

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

function generatetoken(req,res,next){
	
	const username=req.body.username
	user.find({username},async function(err,user){
		if(err){
			res.status(400).send("user not found")
		}
		else{
			console.log(Object.assign(user))
			const accesstoken= jwt.sign(JSON.stringify(user),process.env.ACCESS_TOKEN_SECRET)
			res.header("Access-Control-Allow-Origin", "*");
			 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
			res.setHeader("Authorization",accesstoken)
			console.log(res.header("Authorization"))
			next()
		
			 
		}
		
	})	
	
}	
		

module.exports=router