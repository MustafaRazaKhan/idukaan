import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Authcontext";
const Login = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/login",
        registerData
      );

      if (res.data.sucess) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        // console.log(auth)

        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(res.data.message);
    }
  };
  return (
    <div className="container-fluid ">
      {/* <Layout> */}
      <h4 className="text-center">Login For Your Account</h4>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={registerData.email}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Your email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                value={registerData.password}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-danger border-none"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password
              </button>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-warning">
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col">
          <img src="" alt="" />
        </div>
      </div>

      {/* </Layout> */}
    </div>
  );
};

export default Login;
