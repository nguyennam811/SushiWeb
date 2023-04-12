import React from "react";
import { useCart } from "react-use-cart";

import { NavLink, Outlet } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/apiRequest";
import { createAxios } from "../instance/createinstance";
import { logOutSuccess } from "../redux/authSlice";

import logo from "../images/logo.png";
import search from "../images/Search.png";

const UserLayout = () => {

  const { totalUniqueItems, emptyCart } = useCart();

  //Login
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
    emptyCart();
  };

  

  return (
    <>
      <div >
        <header>
          <div className="nav-layer">
            <div className="logo">
              <NavLink to="/">
                <img className="logo1" src={logo} />
              </NavLink>
            </div>
            <nav>
              <ul className="menu-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/promo">
                    Promo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <img src={search} style={{ height: "15px", width: "15px" }} />
                </li>
              </ul>

              <div className="buttons" >
                {/* <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1"></i> Register</NavLink> */}
                <NavLink to="/cart" className="btn btn-outline-dark ms-2" style={{ backgroundColor: "red" }}>
                  <i className="fa fa-shopping-cart me-1"></i>
                  {totalUniqueItems}
                </NavLink>
              </div>
              {user ? (
                <>
                  <button className="btn ms-2 btn-outline-dark">
                    {" "}
                    <i class="fa fa-user"></i>
                    <span> {user.username} </span>
                  </button>
                  {/* <p className="navbar-user">Hi, <span> {user.username}  </span> </p> */}
                  <NavLink
                    to="/logout"
                    className="ms-2"
                    style={{ textDecoration: "none" }}
                    onClick={handleLogout}
                  >
                    {" "}
                    Log out
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="btn btn-outline-dark ms-2"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa fa-sign-in me-1"></i> Login
                  </NavLink>
                </>
              )}
            </nav>
          </div>
        </header>
      </div>

      <CartProvider>
        <Outlet />
      </CartProvider>

      <div>
        <section className="footer">
          <div className="media">
            <p>Title here</p>
            <p style={{ padding: "5% 0" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos id incidunt cum, nulla officia saepe aliquam eveniet,
              doloremque quos modi consequatur ipsum rem{" "}
            </p>
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-whatsapp" />
          </div>
          <div className="about">
            <p style={{ paddingBottom: "5%" }}>About</p>
            <a href="#">History</a>
            <br />
            <a href="#">Our Team</a>
            <br />
            <a href="#">Brand Guidelines</a>
            <br />
            <a href="#">Terms &amp; Condition</a>
            <br />
            <a href="#">Privacy Policy</a>
          </div>
          <div className="service">
            <p style={{ paddingBottom: "5%" }}>Services</p>
            <a href="#">How to Order</a>
            <br />
            <a href="#">Our Product</a>
            <br />
            <a href="#">Order Status</a>
            <br />
            <a href="#">Promo</a>
            <br />
            <a href="#">Payment Method</a>
          </div>
          <div className="other">
            <p style={{ paddingBottom: "5%" }}>Other</p>
            <a href="#">Contact Us</a>
            <br />
            <a href="#">Help</a>
            <br />
            <a href="#">Privacy</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserLayout;
