const Blog=require("../model/blog")
const mongoose=require("mongoose")
const { findByIdAndDelete } = require("../model/blog")

const getALLblog=async(req,res,next)=>{

    try {
        let blogs=await Blog.find()
        res.status(200).json({blogs})
    } catch (err) {
        return console.log(err)
        
    }
}

const createblog=async(req,res,next)=>{
    try {
        let {title,description,image,user}=req.body
        let blogs= new Blog({
            title,
            description,
            image,
            user
        }
        )
        await blogs.save()
        res.status(202).json({msg:"bolg sucessfully created"})
    } catch (error) {
        console.log(error)
        
    }
}
const updateBlogs=async(req,res,next)=>{
    try {
        const blogId=req.params.id
        let update=req.body
        let blogs=await Blog.findByIdAndUpdate(blogId,update)
        if(!blogs){
            return res.status(404).json({msg:"failed to Update blog"})
        }
        else{
            res.status(203).json({blogs})
        }
        
    } catch (error) {
        res.send(req.params.id)
        
    }

}

const getbyId=async(req,res,next)=>{
    try {
        let blogsid=req.params.id
        let existingblog= await Blog.findById(blogsid)
        if(existingblog){
            res.status(200).json({existingblog})
        }
        else{
            res.status(405).json({msg:"this blog do not exist"})
        }

    } catch (error) {
        res.status(500).json({msg:"enter id in proper manner"})
        
    }
}

const deleteblog=async(req,res,next)=>{
    try {
        let blogsid=req.params.id
        let existingblog=await Blog.findByIdAndDelete(blogsid)
        if(blogsid){
            res.status(205).json({msg:"blog sucessfully deleted"})
        }
        else{
            res.status(400).send("blog do not exist")
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports={
    deleteblog:deleteblog,
    getbyId:getbyId,
    updateBlogs:updateBlogs,
    createblog:createblog,
    getALLblog:getALLblog
}