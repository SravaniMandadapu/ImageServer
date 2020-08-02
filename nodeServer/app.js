const express=require("express")
const app=express()
const signupRoutes=require("./routes/signup")
const loginRoutes=require("./routes/login")
const uploadRoutes=require("./routes/upload")
const ImgRoutes=require("./routes/imageslist")
const morgan =require("morgan")
const cors=require("cors")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const options={
	useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}
const authtoken=require("./middleware/authToken")



mongoose.connect("mongodb+srv://sravani:sravani@cluster0.lgxen.mongodb.net/ImageServer?retryWrites=true&w=majority", options)   
mongoose.Promise = global.Promise;

app.use(morgan(".dev"))
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//Connecting to route API
app.use("/",signupRoutes)
app.use("/",loginRoutes)
app.use("/",authtoken,uploadRoutes)
app.use("/",authtoken,ImgRoutes)

module.exports = app;