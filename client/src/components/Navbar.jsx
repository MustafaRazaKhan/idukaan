import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useCart } from "../context/Cart";
import { FaCartPlus, FaUser, FaRegRegistered } from "react-icons/fa";
import {} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  console.log(cart);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">
              i-Dukaan
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link" href="#">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ms-lg-auto me-sm-auto border w-lg-25 w-sm-50 d-flex justify-content-between align-items-center p-1 rounded-1">
              <input
                type="text"
                placeholder="Search"
                className="border-0 bg-transparent w-100"
              />
              <CiSearch className="icon-size" />
            </div>

            <div className=" ms-auto d-flex gap-4">
              <div>
                {!auth.user ? (
                  <div className="d-flex gap-4 align-center">
                    <Link to="/register" className="nav-link">
                      <FaRegRegistered className="align-item-center" />
                    </Link>

                    <Link to="/login" className="nav-link" href="#">
                      <FaUser className="icon-size" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth?.user?.name}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-link">
                          {" "}
                          <Link
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            class="dropdown-item"
                          >
                            DashBoard
                          </Link>
                        </li>

                        <li className="nav-link">
                          <Link
                            to="/login"
                            onClick={handleLogout}
                            class="dropdown-item"
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </div>

              <div>
                {/* <Fa /> */}
                <li className="nav-item">
                  <Link to="/cart" className="nav-link" href="#">
                    <FaCartPlus className="icon-size" />
                    <sup class="">{cart?.length}</sup>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
