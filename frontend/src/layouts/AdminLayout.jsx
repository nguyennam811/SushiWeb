import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/apiRequest";
import { createAxios } from "../instance/createinstance";
import { logOutSuccess } from "../redux/authSlice";

import background from "../images/Background.png"

const AdminLayout = () => {
  // Login
  const user = useSelector((state) => state.auth.login.currentUser);
  // const user = true;
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
          <div className="container">
              <NavLink className="navbar-brand fw-bold fs-4" to="/admin">
                Admin Page
              </NavLink>
             
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {user ? (
              <>
                <div
                  className="collapse mx-auto navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 fw-bolder d-flex justify-content-around">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin/order">
                        Yêu cầu
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin/products">
                        Sản phẩm
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <NavLink
                  to="/admin/upload"
                  className="btn btn-outline-dark ms-2"
                >
                  Thêm sản phẩm mới
                </NavLink>
                <button className="btn ms-2 btn-outline-dark">
                  {" "}
                  <i class="fa fa-user"></i>
                  <span> {user.username} </span>
                </button>
                {/* <p className="navbar-user">
                  Hi, <span> {user.username} </span>{" "}
                </p> */}
                <NavLink
                  to="/admin/logout"
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
                  to="/admin/login"
                  className="btn btn-outline-dark ms-2"
                >
                  <i className="fa fa-sign-in me-1"></i> Login
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
      

      <Outlet />
    </>
  );
};

export default AdminLayout;
