import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useCart } from "../context/Cart";

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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link" href="#">
                  Category
                </Link>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" href="#">
                      Login
                    </Link>
                  </li>
                </>
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
              <li className="nav-item">
                <Link to="/cart" className="nav-link" href="#">
                  <span>Cart</span>
                  <sup class="">{cart?.length}</sup>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
