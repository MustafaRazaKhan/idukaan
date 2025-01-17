import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useCart } from "../context/Cart";
import axios from "axios";
import { Prices } from "../components/Prices";
import { toast } from "react-toastify";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Category from "../components/Category";

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
        <Hero />
        <Featured />
        {/* <Category /> */}
      </div>
    </>
  );
};

export default Home;
