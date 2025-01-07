import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Custom CSS for flipkart-style card

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="flipkart-product-card shadow-sm rounded">
        {/* Product Image with Hover Effect */}
        <div className="flipkart-product-image-container">
          <img
            // src={`data:${product?.photo?.contentType};base64,${product?.photo?.data}`}
            src="https://img.freepik.com/free-vector/headphones-listen-music-dj-audio-headset_107791-12548.jpg?ga=GA1.1.564173597.1706198553&semt=ais_hybrid"
            alt={product?.name}
            className="flipkart-product-image img-fluid rounded-top"
          />
        </div>
        <div className="flipkart-product-card-body">
          {/* Product Title */}
          <h5 className="flipkart-product-title">{product?.name}</h5>

          {/* Product Description */}
          <p className="flipkart-product-description">
            {product?.description.substring(0, 70)}...
          </p>

          {/* Product Price */}
          <div className="flipkart-product-price">
            <span>{`₹${product?.price}`}</span>
          </div>

          {/* Add to Cart Button */}
          <div className="text-center mt-3">
            <button className="btn btn-primary flipkart-add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
