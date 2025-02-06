import React from 'react'
import { Icon } from "@iconify/react";
function AdminLeftMenu() {
  return (
    
    <div className="main-nav">               
    <div className="scrollbar" data-simplebar>
         <ul className="navbar-nav" id="navbar-nav">

              <li className="menu-title">Menü</li>

              <li className="nav-item">
                   <a className="nav-link" href="index.html">
                        <span className="nav-icon">
                             <Icon icon="solar:widget-5-bold-duotone" />
                        </span>
                        <span className="nav-text"> Dashboard </span>
                   </a>
              </li>

              <li className="nav-item">
                   <a className="nav-link" href="#sidebarProducts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProducts">
                        <span className="nav-icon">
                             <Icon icon="solar:t-shirt-bold-duotone" />
                        </span>
                        <span className="nav-text"> Products </span>
                   </a>
                   <div className="collapse" id="sidebarProducts">
                        <ul className="nav sub-navbar-nav">
                             <li className="sub-nav-item">
                                  <a className="sub-nav-link" href="product-list.html">List</a>
                             </li>
                             <li className="sub-nav-item">
                                  <a className="sub-nav-link" href="product-grid.html">Grid</a>
                             </li>
                             <li className="sub-nav-item">
                                  <a className="sub-nav-link" href="product-details.html">Details</a>
                             </li>
                             <li className="sub-nav-item">
                                  <a className="sub-nav-link" href="product-edit.html">Edit</a>
                             </li>
                             <li className="sub-nav-item">
                                  <a className="sub-nav-link" href="product-add.html">Create</a>
                             </li>
                        </ul>
                   </div>
              </li>
         </ul>
    </div>
</div>   
  )
}

export default AdminLeftMenu