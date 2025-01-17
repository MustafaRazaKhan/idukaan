import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  console.log(product)
  // const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/get-single-product/${params.slug}`
      );
      console.log(data)
      setProduct(data?. singleProduct);
      // console.log(product)
      // getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  // const getSimilarProduct = async (pid, cid) => {
  //   try {
  //     const { data } = await axios.get(
  //       `/api/v1/product/related-product/${pid}/${cid}`
  //     );
  //     setRelatedProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`http://localhost:8080/api/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <h1>{product._id}</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr />
     
    </>
  );
};

export default ProductDetails;
