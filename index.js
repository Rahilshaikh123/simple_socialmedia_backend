const express=require("express")
const dbconnect = require("./config/usrmg")
const app=express()
const dotenv=require("dotenv").config()
const PORT=process.env.PORT
const router=require("./router/router")
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
dbconnect()
app.use("/api/user",router)
app.listen(PORT,()=>{
    console.log(`your server is started at PORT: ${PORT}`)
})