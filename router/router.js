const express=require("express")
const  {createUser, login } = require("../controller/authctrl")
const { getallUser } = require("../controller/authctrl")
const { getALLblog, createblog, updateBlogs, getbyId,deleteblog ,getbyUId} = require("../controller/blogcontroller")
const router=express.Router()



router.post("/signup",createUser)
router.get("/",getallUser)
router.post("/",login)
router.get("/blog",getALLblog)
router.post("/blog",createblog)
router.patch("/update/:id",updateBlogs)
router.get("/blog/:id",getbyId)
router.delete("/blog/:id",deleteblog)
router.get("/:id",getbyUId)
module.exports=router;