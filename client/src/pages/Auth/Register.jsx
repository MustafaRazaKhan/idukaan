import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    question: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/register",
        registerData
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card shadow d-flex flex-column flex-lg-row">
        {/* Left Image Section */}
        <div className="image-section">
          <img
            src="https://img.freepik.com/free-photo/register-now-application-information-concept_53876-125164.jpg?ga=GA1.1.564173597.1706198553&semt=ais_hybrid" // Replace with your image URL
            alt="Register Illustration"
          />
        </div>
        {/* Right Form Section */}
        <div className="form-section">
          <h2 className="text-center mb-4 text-primary">Register Account</h2>
          <p className="text-center text-muted mb-4">
            Create your account to enjoy exclusive features.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={registerData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={registerData.address}
                  onChange={handleChange}
                  placeholder="1234 Main St"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="question" className="form-label">
                  Security Question
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="question"
                  name="question"
                  value={registerData.question}
                  onChange={handleChange}
                  placeholder="What is your favorite game?"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 text-uppercase fw-bold"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-decoration-none text-primary fw-bold"
            >
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
