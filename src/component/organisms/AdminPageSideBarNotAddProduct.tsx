import React from "react";
import { useNavigate } from "react-router-dom";

function AdminPageSideBarNotAddProduct() {
  const navigate = useNavigate();
  return (
    <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-primary sidebar">
      <div className="list-group">
        <h3>ADMIN PANEL</h3>
        <select
          className="form-select active py-3 bg-secondary text-white"
          aria-label="Default select example"
          onChange={(e) => {
            if (e.target.value === "product") {
              navigate("/product");
            }
          }}
        >
          <option value="">MENU</option>
          <option value="products">Products</option>
          <option value="categories">Categories</option>
          <option value="users">Users</option>
          <option value="orders">Orders</option>
        </select>
      </div>
    </nav>
  );
}
export default AdminPageSideBarNotAddProduct;
