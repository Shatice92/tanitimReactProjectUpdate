import React from "react";
import { useNavigate } from "react-router-dom";

function AdminPageSideBar() {
    const navigate = useNavigate(); 

    return (
        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-warning sidebar">
            <div className="list-group">
                <h3>ADMIN PANEL</h3>
                <select
                    className="form-select active py-3 bg-secondary text-white" 
                    aria-label="Default select example" 
                    onChange={(e) => { 
                        const value = e.target.value;
                        if (value) {
                            navigate(`/${value}`); 
                        }
                    }}
                >
                   
                    <option value="">MENU</option>
                    <option value="products">Products</option>
                    <option value="categories">Categories</option>
                    <option value="users">Users</option>
                    <option value="orders">Orders</option>
                    <option value="add-product">Add Product</option>
                </select>
            </div>
        </nav>
    );
}

export default AdminPageSideBar;
