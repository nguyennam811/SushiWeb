import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/apiRequest";

const Edit = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  // const user = useSelector((state) => state.auth.login?.currentUser);
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user = useSelector((state) => state.auth.login?.currentUser);
  //   useEffect(() => {
  //     if (!user) {
  //       navigate("/login");
  //     }
  //     if (user?.accessToken) {
  //       getAllUser(user?.accessToken, dispatch);
  //     }
  //   }
  // );

  const user = useSelector((state) => state.auth.login?.currentUser);
    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
      if (user?.accessToken) {
        getAllUser(user?.accessToken, dispatch);
      }
    }
  );

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(
        `http://localhost:3002/api/products/${id}`
      );
      setProducts(data);
    };
    fetchproducts();
  }, [id]);

  const updateProduct = (_id) => async () => {
    try {
      await axios.put(`http://localhost:3002/api/update/${_id}`, products);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thành công",
        showConfirmButton: false,
        timer: 900,
      });
      navigate("/admin/products");
      // setTimeout(() => window.location.reload(false), 1000);
    } catch {
      swal({
        title: "Thất bại!",
        icon: "error",
        button: false,
      });
    }
  };

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(products);
  return (
    <div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Tên sản phẩm</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder=""
          onChange={handleChange}
          value={products.title || ""}
        />
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="number">giá</label>
        <input
          type="number"
          class="form-control"
          id="price"
          name="price"
          placeholder=""
          onChange={handleChange}
          value={products.price || ""}
        />
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Loại</label>
        <select
          class="custom-select d-block w-100"
          id="category"
          name="category"
          required=""
          onChange={handleChange}
          value={products.category || ""}
        >
          <option>Nare sushi</option>
          <option>Inari sushi</option>
          <option>Nigiri sushi</option>
          <option>Temari sushi</option>
          <option>Futomaki</option>
          <option>Hosomaki</option>
          <option>Temaki</option>
          <option>Oshi sushi</option>
          <option>Chirashi sushi</option>
        </select>
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Mô tả</label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          rows="7"
          name="description"
          placeholder=""
          onChange={handleChange}
          value={products.description || ""}
        />
      </div>
      <div class="mb-3 col-md-1 mx-auto">
        <button
          type="button"
          class="btn btn-outline-dark"
          onClick={updateProduct(products._id)}
        >
          Lưu Sản Phẩm
        </button>
      </div>
    </div>
  );
};

export default Edit;
