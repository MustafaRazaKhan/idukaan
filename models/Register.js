const  mongoose  = require("mongoose");


const RegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
    unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    },
    question:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})


module.exports = mongoose.model("User",
RegisterSchema)