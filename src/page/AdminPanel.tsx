import React from 'react'
import './css/app.min.css'
import './css/icons.min.css'
import './css/vendor.min.css'
import AdminLeftMenu from '../component/organisms/AdminLeftMenu';
import AdminProductList from '../component/organisms/AdminProductList';

function AdminPanel() {
  return (
    <div className="wrapper">
            <AdminLeftMenu />
        
            <div className="page-content">

                  <div className="container-fluid">
                        <div className="row mt-5">                              
                        </div>
                        <div className="row">
                              <AdminProductList />
                        </div>
                  </div>
            </div>

    </div>
  )
}

export default AdminPanel