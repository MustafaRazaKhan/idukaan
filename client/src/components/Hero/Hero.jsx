import React from "react";

const Hero = () => {
  return (
    <div className="hero-container p-4 bg mt-3">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <img
              src="hero1.png"
              alt=""
              className="img-fluid"
              style={{ height: "400px", width: "100%" }}
            />
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <h3>i-Dukaan Online Store</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              consectetur corrupti debitis vero, nisi incidunt delectus culpa
              assumenda sit, atque ab? Earum, distinctio architecto atque
              suscipit illo repellendus, iusto ipsam corporis optio impedit
              aliquid.
            </p>
            <button className="btn bg-danger text-white">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
