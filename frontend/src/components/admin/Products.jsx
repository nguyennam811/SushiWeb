import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  //   if (user?.accessToken) {
  //     getAllUser(user?.accessToken, dispatch);
  //   }
  // });

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("http://localhost:3002/api/products");
      setProducts(data);
    };
    fetchproducts();
  }, []);

  const deleteProduct = (id) => async () => {
    try {
      await axios.delete(`http://localhost:3002/api/delete/${id}`);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Xoá thành công",
        showConfirmButton: false,
      });
      setTimeout(() => window.location.reload(false), 1000);
    } catch {
      swal({
        title: "Xoá thất bại!",
        icon: "error",
        button: false,
      });
    }
  };
  return (
    <div class="mt-4" style={{ margin: "25px" }}>
      <h3 style={{ marginBottom: "20px" }}>Danh Mục Sản Phẩm</h3>
      <table className="table table-bordered table-light table-hover m-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ảnh minh họa</th>
            <th scope="col">Tên</th>
            <th scope="col">Giá</th>
            <th scope="col">Loại</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1} </th>
                <td
                  style={{
                    width: "150px",
                    height: "130px",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "150px",
                      height: "130px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    alt={item.title}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price} ₫</td>
                <td>{item.category}</td>
                <td>
                  <tr>
                    <td class="btn btn-success" style={{ marginRight: "20px" }}>
                      <NavLink
                        to={`/admin/edit/${item._id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Edit
                      </NavLink>
                    </td>
                    <td
                      className="btn btn-danger"
                      onClick={deleteProduct(item._id)}
                    >
                      Xoá
                    </td>
                  </tr>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
