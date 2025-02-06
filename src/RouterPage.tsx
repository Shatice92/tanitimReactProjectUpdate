import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './page/HomePage'
import AdminPanel from './page/AdminPanel'
import Login from './page/Login'
import Register from './page/Register'
import Adminpage from './page/AdminPage'
import AddProduct from './page/AddProduct'
import AddProductPage from './page/AddProductPage'
import ProductDetail from './page/ProductDetail'
import ProductEditPage from './page/ProductEditPage'


function RouterPage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admin-panel' element={<AdminPanel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin-page' element={<Adminpage/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/add-product-page' element={<AddProductPage/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        <Route path='/product-edit-page' element={<ProductEditPage/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}

export default RouterPage