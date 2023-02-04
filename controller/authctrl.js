const User=require("../model/usermodel")

const getallUser=async(req,res)=>{
    let users
    try {
        users=await User.find()
        
        
    } catch (error) {
        console.log("er2")
    }
    if(!users){
        return res.status(400).json({message:"no user found"})

    }
    res.status(202).json({users})
}

const createUser=async(req,res)=>{

        const email=req.body.email
        const user= await User.findOne({email:email})

        if (!user) {
            let newuser= await User.create(req.body)
            res.status(200).json({msg:"User successfully created"})
        }
        else{
            res.status(202).json({msg:"User alredy existed"})
        }

}
const login=async(req,res)=>{
    let {name,email,password}=req.body
    let pass=req.body.password
    let user1=await User.findOne({email:email})

    if(user1){
        let user2=await User.findOne({password:pass})
        if(user2){
            res.send("login sucessful")
        }
        else{
            return res.status(405).json("password dot match login fail")
        }
    }
    else{
        return res.status(500).json({msg:"please singup for login"})
    }
    
}
module.exports={
    login:login,
    getallUser:getallUser,
    createUser:createUser
}

