const mongoose=require("mongoose")
mongoose.set("strictQuery",false)
mongoose.set("strictPopulate",false)
const dbconnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("your server is sucessfully connected to mongodb")
        
    }
     
    catch (error) {
        console.log("er1")

    }
}
module.exports=dbconnect;