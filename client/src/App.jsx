import React from "react";
// import { AuthProvider } from './context/AuthContext';

import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import Forgotpassword from "./pages/Auth/Forgotpassword";
import AdminRoutes from "./components/routes/AdminRoutes";
import Admindashboard from "./pages/admin/Admindashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProducts from "./pages/admin/CreateProducts";
import Users from "./pages/admin/Users";
import Profile from "./pages/user/Profile";
import Order from "./pages/user/Order";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart/CartPage";
import Contact from "./pages/Contact/Contact";
import AllProducts from "./pages/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />

        <Route exact path="/dashboard" element={<PrivateRoutes />}>
          <Route exact path="user" element={<Dashboard />} />
          <Route exact path="user/profile" element={<Profile />} />
          <Route exact path="user/order" element={<Order />} />
        </Route>
        <Route exact path="/dashboard" element={<AdminRoutes />}>
          <Route exact path="admin" element={<Admindashboard />} />
          <Route
            exact
            path="admin/create-category"
            element={<CreateCategory />}
          />
          <Route exact path="admin/products" element={<Products />} />
          <Route
            exact
            path="admin/update-product/:slug"
            element={<UpdateProduct />}
          />
          <Route
            exact
            path="admin/create-products"
            element={<CreateProducts />}
          />
          <Route exact path="admin/users" element={<Users />} />
        </Route>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="forgot-password" element={<Forgotpassword />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
      <div className="bg">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
