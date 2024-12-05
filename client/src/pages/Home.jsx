import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useCart } from "../context/Cart";
import axios from "axios";
import { Prices } from "../components/Prices";
import { toast } from "react-toastify";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  console.log(cart);
  const handleRadio = (e) => {
    setRadio(e.target.value);
  };
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // ? GET ALL CATEGORIES
  //  todo handleCheck
  const handleCheck = (value, id) => {
    console.log(value, id);
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  const getAllCat = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/get-category");
      const data = res.data;

      if (data.sucess) {
        setCategories(data.cat);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllCat();
  }, []);

  // !get all products
  const setAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/get-product");
      if (data?.sucess) {
        setProducts(data?.products);
        toast.success("product ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!checked.length || !radio.length) setAllProducts();
  }, [checked.length, radio.length]);
  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);
  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4>Filter By Category</h4>
            <div className="d-flex flex-column">
              {categories?.map((c, i) => {
                return (
                  <>
                    {c.name}{" "}
                    <input
                      type="checkbox"
                      value={c.name}
                      name="khan"
                      id=""
                      onChange={(e) => handleCheck(e.target.checked, c._id)}
                    />
                  </>
                );
              })}
            </div>
            <h4>Filter by Price</h4>
            {Prices?.map((p) => {
              return (
                <div>
                  <input
                    type="radio"
                    name="price"
                    value={p.array}
                    onChange={(e) => handleRadio(e)}
                  />
                  {p.name}
                </div>
              );
            })}
            <div className="col-md-4">
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
              >
                Reset All
              </button>
            </div>

            {/* </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
            } */}
          </div>
          <div className="col-md-8">
            {/* {JSON.stringify(radio)} */}
            <h1>All Products</h1>
            <div className="d-flex flex-wrap flex-column">
              <h1> Products</h1>
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  flexWrap: "wrap",
                }}
              >
                {products?.map((p) => {
                  return (
                    <>
                      <div
                        className="card p-2"
                        style={{
                          width: "15rem",
                          height: "25rem",
                          boxShadow: "0 0 3px black",
                        }}
                      >
                        <img
                          src={`http://localhost:8080/api/product-photo/${p._id}`}
                          className=""
                          alt="Product image"
                          height="100px"
                          style={{
                            border: "2px solid black",
                            padding: "2px",
                          }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                          <p className="card-text">
                            {p.description.substring(0, 20)}......
                          </p>
                          <p className="card-text">{p.price}</p>
                          <div style={{ display: "flex", gap: "4px" }}>
                            <div>
                              {" "}
                              <button
                                className=" btn btn-danger"
                                onClick={() => navigate(`/product/${p.slug}`)}
                              >
                                More Detail
                              </button>
                            </div>
                            <div>
                              {" "}
                              <button
                                className=" btn btn-secondary"
                                onClick={() => {
                                  setCart([...cart, p]);
                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify([...cart, p])
                                  );
                                  toast.success("item add to cart");
                                }}
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
