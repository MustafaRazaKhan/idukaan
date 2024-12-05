const router = require("express").Router();
const controller= require("../controllers/authController")
const middleToken =require("../middleware/authMiddleWare")
const  {tokenVerification,isAdmin} = middleToken
const {registerController,loginController,forgotPasswordController,updateProfile} =controller
// console.log(registerController)

// ? registeration route
router.post("/register", registerController)

// todo login route
router.post("/login",loginController);
// todo forgote password route

router.post("/forgot-password",forgotPasswordController)

// ! user authentication route
router.get("/user-auth",tokenVerification,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})
// todo admin route
router.get("/admin-auth",tokenVerification, isAdmin,  (req,res)=>{
    res.status(200).send({
        ok:true
    })
})


// ! update Profile
router.put("/profile" , tokenVerification,updateProfile)

module.exports= router