import React from "react";
import {
  FaFacebook,
  FaGooglePay,
  FaInstagram,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <strong> i-Dukaan Online Store</strong>
          <h6>!23,Bihar Kalan Izzat nagar Bareilly</h6>
          <p>hello@gamil.com</p>
          <p>+917983884009</p>
          <div className="d-flex gap-4">
            <div className="icons">
              <FaFacebook />
            </div>
            <div className="icons">
              <FaInstagram />
            </div>
            <div className="icons">
              <FaWhatsapp />
            </div>
            <div className="icons">
              <FaTwitch />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <strong>Subscribe</strong>
          <div>
            <p>Be the First One to Subscribe</p>
          </div>
          <div className="d-flex ">
            <input
              className="p-1 px-2 rounded-3 bg-transparent btn border border-secondary lg-w-50 sm-w-25"
              type="text"
              placeholder="Subscribe"
            />
            <button className="btn bg-danger px-4 text-white sm-w-50">
              Join
            </button>
          </div>
          <div>
            <p>Secure Payments</p>
          </div>
          <div className="d-flex gap-2">
            <div>
              <FaGooglePay className="icons" />
            </div>
            <div>
              <FaGooglePay className="icons" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <strong>Shop</strong>
          <div>
            <p>New Arrial</p>
            <p>Mens</p>
            <p>Womens</p>
            <p>All Products</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 col-12">
          <strong>Help</strong>
          <div>
            <p>Custome Service</p>
            <p>My Account</p>
            <p>My Account</p>
            <p>Find a Store</p>
            <p>Tems And Condittions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
