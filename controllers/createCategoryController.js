// const Category = require("../models/Category");
const Category = require("../models/Category")
const slugify = require("slugify")

//  ? CREATE A NEW CATEGORY
const categoryController = async(req,res)=>{
    try {
        const{ name } = req.body;

        // const exsistingCategory = Category.findOne({name});
        const exsistingCategory = await Category.findOne({name})
        if(exsistingCategory){
            return res.status(200).send({
                sucess:false,
                message:"category Already Exsist"
            })
        }
        const newCat = new Category({
            name,
            slug:slugify(name)
        })
        const savedCategory =await newCat.save();
    
        res.status(201).send({
            sucess:true,
            message:"category Add sucessfully",
            savedCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            error,
            message:"Error in category"
        })
    }

}
// TODO  GET A CATEGORY
const getCategory = async(req,res)=>{
    try {
    const cat = await Category.find({}) 
    console.log(cat)
    res.status(200).send({
        sucess:true,
        message:"category fetched sucessfully",
        cat
    })
       
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            error,
            message:"Error occured while fetching category"
        })
        
    }

}

// ? UPDATE A CATEGORY
const updateCategory =async(req,res)=>{
    try {
        const {name} = req.body;
        const{id} = req.params;
        const  updateCat = await Category.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true});
        res.status(200).send({
            sucess:true,
            message:"category updated sucessfully",
            updateCat
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            error,
            message:" Error in Updating Category"
        })
        
    }

}
const singleCategory = async(req,res)=>{
        try {
            const singleCat = await Category.findOne({slug:req.params.slug});
            res.status(200).send({
                sucess:true,
                message:"Category fetched sucessfully",
                singleCat
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).send({
                sucess:false,
                error,
                message:"Error in fetching single Category"

            })
            
        }

}

//   TODO  DELETE A  CATEGORY
const deleteCategory = async(req,res)=>{
    try {
        const {did}=req.params
        await Category.findByIdAndDelete(did);
        res.status(200).send({
            sucess:true,
            message:"Category deleted sucessfully",
            
        })
        // const deletCategory = 
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            error,
            message:"Category Delete sucessfully"
        })
        
    }

}

module.exports=  {  categoryController ,getCategory,updateCategory,singleCategory,deleteCategory}