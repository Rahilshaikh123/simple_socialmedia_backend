const mongoose=require("mongoose")
const { stringify } = require("qs")
const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }


})
module.exports=mongoose.model("Blog",blogSchema)