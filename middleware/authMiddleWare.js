const   jwt = require("jsonwebtoken");
const User = require("../models/Register")

const tokenVerification = (req,res,next)=>{
   try {
   const decode= jwt.verify(req.headers.authorization,"khan123")
   req.user=decode
//    console.log(decode)
   next()
    
   } catch (error) {
    console.log(error)
   }
}
const isAdmin = async(req,res,next)=>{
    try {
        const user = await User.findById(req.user._id)
        console.log(user)
        if(user.role!==1){
            return res.status(401).send({
                sucess:false,
                message:"Unauthorized user"
            })
          
        }
        else{
            next()
        }
        
    } catch (error) {
        
    }

}
module.exports=  {tokenVerification,isAdmin}