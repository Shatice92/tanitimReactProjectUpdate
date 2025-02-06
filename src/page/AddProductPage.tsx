
import React from 'react'
import './css/app.min.css'
import './css/icons.min.css'
import './css/vendor.min.css'
import AdminLeftMenu from '../component/organisms/AdminLeftMenu';
import AddProduct from '../component/organisms/AddProduct';
function AddProductPage() {
  return (
    <div className="wrapper">
            <AdminLeftMenu />
        
            <div className="page-content">

                  <div className="container-fluid">
                        <div className="row mt-5">                              
                        </div>
                        <div className="row">
                              <AddProduct />
                        </div>
                  </div>
            </div>

    </div>
  )
}

export default AddProductPage
