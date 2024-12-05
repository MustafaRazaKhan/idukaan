const router = require("express").Router();
const controller = require("../controllers/createProductController");
const { createProduct, getProduct, getSingleProduct, getProductPhoto, updateProduct,
    //  productCategory,
    // realtedProduct,
    // searchProduct,
    deleteProduct
    , productFilters
    // , productCount
    // , productList

} = controller;

const formidable = require('express-formidable');
const { tokenVerification, isAdmin } = require("../middleware/authMiddleWare");
// const {createProducts,getProduct} = controller
// console.log(controller.createProducts)

// ! routes

//  todo  create  a new product
router.post("/create-product", tokenVerification, isAdmin, formidable(), createProduct)
// ? update a new product
router.put("/update-product/:pid", tokenVerification, isAdmin, formidable(), updateProduct)
//  ! get products
router.get("/get-product", getProduct)

// ? get single product
router.get("/get-single-product/:slug", getSingleProduct)

//  todo get photo from product

router.get("/product-photo/:pid", getProductPhoto)
// ?delete rproduct
router.delete("/delete-product/:pid", deleteProduct);

// ?filter product
router.post("/product-filters", productFilters);

// TODO product count
// router.get("/product-count", productCount);

// !product per page
// router.get("/product-list/:page", productList);

// TODO search product
// router.get("/search/:keyword", searchProduct);
//  !similar product
// router.get("/related-product/:pid/:cid", realtedProduct);

// ?category wise product
// router.get("/product-category/:slug", productCategory);



module.exports = router