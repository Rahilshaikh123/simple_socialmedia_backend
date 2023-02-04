const User=require("../model/usermodel")
const bcrypt=require("bcrypt")

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

        const {name,email,password}=req.body
        const user= await User.findOne({email:email})
        let salt =await bcrypt.genSalt(10)
        let secpass=await bcrypt.hash(req.body.password,salt)

        if (!user) {
            let user1=new User({
                name,
                email,
                password:secpass
            })
            await user1.save()
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
        let ispasscorrrect=bcrypt.compareSync(pass,user1.password)
        if(ispasscorrrect){
            res.status(203).json({
                message:"login sucessfull"
            })
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

