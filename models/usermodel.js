

//import mongoose
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Reminderdb",{
    useNewUrlParser:true
})

//defining model
const User= mongoose.model("User",{
    email:String,
    name:String,
    password:String,
    reminders:[]
})

module.exports={
    User
}