const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Firstname:{
        type:String,
        required:true
    },
    Middlename:{
        type: String
    },
    Lastname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique: true,
        match:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    },
    password: {
       type:String,
       required:true
    }

    
})


module.exports=mongoose.model("User",userSchema);