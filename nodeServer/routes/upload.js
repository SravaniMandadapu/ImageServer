const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const image=require("../models/image")
const multer=require("multer")
const path =require("path")
const  fs=require("fs")
const AWS=require("aws-sdk")
const Accesskeys=require("../secret_keys")


//storage
const storage = multer.memoryStorage()

//init upload

var upload=multer({
    storage:storage
   
})

router.post("/images/upload",upload.single("Picture"),(req,res,next)=>{
 const file= req.file
 const user=req.user
 console.log(user)
 
 const s3FileURL = Accesskeys.AWS_FILE_URL_LINK;

 

 let s3bucket = new AWS.S3({
   accessKeyId: Accesskeys.AWS_ACCESS_KEY_ID,
   secretAccessKey: Accesskeys.AWS_SECRET_ACCESS_KEY,
   region: Accesskeys.AWS_REGION
 });

 var params = {
    Bucket: Accesskeys.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };
    
 

  s3bucket.upload(params, function(err, data) {
    
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      res.send({ data });
      var newFileUploaded = {
        
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      var document = new image(newFileUploaded);
      
      document.save(function(error, newFile) {
        if (error) {
          throw error;
        }
      });
    }
  });
});

module.exports=router;