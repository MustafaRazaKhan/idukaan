const express = require("express");
// const controller= require("../controllers/authController")
const controller = require("../controllers/createCategoryController")

const { tokenVerification, isAdmin } = require("../middleware/authMiddleWare");
const{ categoryController , getCategory ,updateCategory ,singleCategory,deleteCategory} = controller

const router =express.Router();
// ? create a new category
router.post("/create-category",  tokenVerification, isAdmin, categoryController)

// ! get a category
router.get("/get-category",getCategory)
//  TODO  GET A SINGLE CATEGORY
router.get("/single-category/:slug",singleCategory)

// ? update a category
router.put("/update-category/:id", tokenVerification, isAdmin,updateCategory)

// ! DELETE A CATEGORY
router.delete("/delete-category/:did",tokenVerification,isAdmin  ,deleteCategory)


module.exports = router