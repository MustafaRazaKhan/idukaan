import React, { useState, useEffect } from "react";
import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = () => {
    let total = 0;
    cart?.map((item) => {
      total += item.price;
    });
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === pid);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <div className="cart-page">
        <div className="container py-5">
          <div className="row">
            {/* Cart Items Section */}
            <div className="col-md-8">
              {cart?.map((p) => (
                <div className="card mb-4 shadow-lg rounded" key={p._id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={`http://localhost:8080/api/product-photo/${p._id}`}
                        className="img-fluid rounded-start"
                        alt={p.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text text-muted">
                          {p.description.substring(0, 50)}...
                        </p>
                        <p className="card-text text-success">
                          <strong>Price: {p.price}</strong>
                        </p>
                        <button
                          className="btn btn-danger mt-2"
                          onClick={() => removeCartItem(p._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary Section */}
            <div className="col-md-4">
              <div className="sticky-top">
                <div className="card shadow-lg p-4">
                  <h2 className="text-center">Cart Summary</h2>
                  <hr />
                  <h4>Total: {totalPrice()}</h4>
                  {auth?.user?.address ? (
                    <p>
                      <strong>Shipping Address:</strong> {auth?.user?.address}
                    </p>
                  ) : (
                    <p className="text-muted">No shipping address available.</p>
                  )}
                  <div className="d-flex justify-content-between mt-3">
                    {auth?.token ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate("/checkout")}
                      >
                        Proceed to Checkout
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => navigate("/login")}
                      >
                        Login to Checkout
                      </button>
                    )}
                    <button className="btn btn-danger" onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
