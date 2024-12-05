// const Products = require("./models/Products");
// const Product = require("../models/Product")

const fs = require("fs")
const slugify = require("slugify")
const Category = require("../models/Category")
const Product = require("../models/Product")
// const formi= express()

//  todo  create a new product

const createProduct = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields
        const { photo } = req.files;
        const products = new Product({ ...req.fields, slug: slugify(name) })
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(200).send({
            sucess: true,
            message: "Product Added sucessfully",
            products
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Error in  creating a new Product"
        })

    }


}

// ? update a new product
const updateProduct = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields
        const { photo } = req.files;
        const products = await Product.findByIdAndUpdate(req.params.pid, { ...req.fields, slug: slugify(name) }, { new: true })

        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(200).send({
            sucess: true,
            message: "Update  sucessfully",
            products
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Error in  creating a updating a  Product"
        })

    }


}

// ! get all project
const getProduct = async (req, res) => {
    try {
        const products = await Product.find({}).select("-photo").populate("category").limit(12).sort({ createdAt: -1 })
        res.status(200).send({
            sucess: true,
            countTotal: products.length,
            message: "All Products",
            products
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Error in getting Products"
        })

    }

}

// ? getSingleProduct

const getSingleProduct = async (req, res) => {
    try {
        const singleProduct = await Product.findOne({ slug: req.params.slug }).select("-photo").populate("category")
        res.status(200).send({
            sucess: true,
            message: true,
            singleProduct
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Error  Occured During  fechting singleProduct"

        })

    }
}
// ! delete a product
 const deleteProduct = async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.pid).select("-photo");
      res.status(200).send({
        sucess: true,
        message: "Product Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        sucess: false,
        message: "Error while deleting product",
        error,
      });
    }
  };
// product count
 const productCount = async (req, res) => {
    try {
      const total = await Product.find({}).estimatedDocumentCount();
      res.status(200).send({
        sucess: true,
        total,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        message: "Error in product count",
        error,
        sucess: false,
      });
    }
  };
//  todo product list base on page
const productList = async (req, res) => {
    try {
      const perPage = 6;
      const page = req.params.page ? req.params.page : 1;
      const products = await Product
        .find({})
        .select("-photo")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ createdAt: -1 });
      res.status(200).send({
        sucess: true,
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        sucess: false,
        message: "error in per page ctrl",
        error,
      });
    }
  };
// todo search product
const searchProduct = async (req, res) => {
    try {
      const { keyword } = req.params;
      const resutls = await Product
        .find({
          $or: [
            { name: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
          ],
        })
        .select("-photo");
      res.json(resutls);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        sucess: false,
        message: "Error In Search Product API",
        error,
      });
    }
  };
// ? similar products
 const realtedProduct = async (req, res) => {
    try {
        const { pid, cid } = req.params;
        const products = await Product
            .find({
                category: cid,
                _id: { $ne: pid },
            })
            .select("-photo")
            .limit(3)
            .populate("category");
        res.status(200).send({
            sucess: true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            sucess: false,
            message: "error while geting related product",
            error,
        });
    }
};
//  todo get product by catgory 
const getProductPhoto = async (req, res) => {
  console.log(req.params.pid)
    try {
        const product = await Product.findById(req.params.pid).select("photo");
        if (product.photo.data) {
            res.set("content-type", product.photo.contentType)
            res.status(200).send(product.photo.data)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "photo not get "
        })

    }

}
const productCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug });
        const products = await Product.find({ category }).populate("category");
        res.status(200).send({
            sucess: true,
            category,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            sucess: false,
            error,
            message: "Error While Getting products",
        });
    }
};
 const productFilters = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const products = await Product.find(args);
    res.status(200).send({
      sucess: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      sucess: false,
      message: "Error WHile Filtering Products",
      error,
    });
  }
};

module.exports = {
    createProduct,
    getProduct,
    getSingleProduct,
    getProductPhoto,
    updateProduct,
    deleteProduct,
  productFilters

    // productCategory,
    // realtedProduct,
    // searchProduct,
    // productList,
    // productCount,deleteProduct
}