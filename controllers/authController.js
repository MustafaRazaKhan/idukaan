const { hashpasswordfun, comparepasswordfun } = require("../helpers/authHelper");
// const User = require("../models/User");
// const User  = require("../models/User")

const User = require("../models/Register")
const jwt =require("jsonwebtoken")

// ! Register controller
const  registerController  = async(req,res)=>{
    const {name, email,phone,password,address,question} = req.body;
    const exsitingUser = await User.findOne({email});
    if(exsitingUser){
        return  res. status(200).send({
            sucess:false,
            message:"Already Exsist"
        })
    }

    const hashPassword = await hashpasswordfun(password);
    const newUser  = new User({
        name,
        email,phone,
        password:hashPassword,
        address,
        question
    })

    const  savedUser =  await newUser.save();
    res.status(201).send({
        sucess:true,
        message:"User Register",
        savedUser
    })

}

// todo loginController
const loginController = async(req,res)=>{
    const {email,password} =req.body;
   try {
    if(!email || !password){
        return  res.status(404).send({
            status:false,
            message:"email Or password invalid"
        }) 
    }
    const exsistingLoginUser = await User.findOne({email});
    if(!exsistingLoginUser){
        return res.status(404).send({
            sucess:false,
            message:"Email  does not exsist"
        })
    }
    const match = await comparepasswordfun(password,exsistingLoginUser.password)
    if(!match){
        return res.status(200).send({
            sucess:false,
            message:"Invalid Password"
        })
    }
    // ! TOKEN CREATED
    const token = await jwt.sign({_id:exsistingLoginUser._id},"khan123",{
        expiresIn:"7d"
    })
    res.status(200).send({
        sucess:true,
        message:"login  Sucessfully",
        user:{
            name:exsistingLoginUser.name,
            email:exsistingLoginUser.email,
            phone:exsistingLoginUser.phone,
            address:exsistingLoginUser.address,
            role:exsistingLoginUser.role

        },
    token
    })
    

   } catch (error) {
    res.status(500).send({
        sucess:false,
        message:"Error in login",
        error
    })
   }

}
//  !forgotPasswordController
const forgotPasswordController =async(req,res)=>{
    try {
        const {email,newPassword,question} =req.body;
    //   !check 
    const user  =await User.findOne({email,question})
    if(!user){
        res.status(404).send({
            sucess:false,
            message:"wrong Email or Answer"
        })
    }
    const hashed = await hashpasswordfun(newPassword);
    await User.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
        sucess:true,
        message:"Password reset sucessfully"
    })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:"something went wrong",
            error
        })
        
    }
    
}


const updateProfile =async(req,res)=>{
    const {name,email,password,phone,address }= req.body
    const user = await User.findById(req.user._id);
    

}


module.exports ={registerController,loginController,forgotPasswordController  ,updateProfile};