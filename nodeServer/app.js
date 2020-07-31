const express=require("express")
const app=express()
const regRoutes=require("./routes/register")
const loginRoutes=require("./routes/login")
const morgan =require("morgan")
const cors=require("cors")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const options={
	useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}



mongoose.connect("mongodb+srv://sravani:sravani@cluster0.lgxen.mongodb.net/ImageServer?retryWrites=true&w=majority", options)   
mongoose.Promise = global.Promise;

app.use(morgan(".dev"))
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//Connecting to route API
app.use("/",regRoutes)
app.use("/",loginRoutes)

module.exports = app;