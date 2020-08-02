const mongoose=require("mongoose")

const imageschema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    URL: {
        type:String,
        required:true
    }
})

module.exports=mongoose.model("image",imageschema)