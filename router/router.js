const express=require("express")
const  {createUser, login } = require("../controller/authctrl")
const { getallUser } = require("../controller/authctrl")
const router=express.Router()



router.post("/signup",createUser)
router.get("/user",getallUser)
router.post("/user",login)

module.exports=router;