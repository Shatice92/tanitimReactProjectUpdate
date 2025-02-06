import React, { useEffect, useState } from 'react'
import { ICategory } from '../../model/ICategory';
import SizeList from '../molecules/SizeList';

function AddProduct() {
  const [categories, setCategories] = useState<ICategory[]>();
  const [product, setProduct] = useState({
    "categoryId": 0,
    "name": "",
    "sizeList": [
      "string"
    ],
    "price": 0,
    "stock": 0,
    "thumpnail": "https://picsum.photos/100/100",
    "images": [
      "https://picsum.photos/100/100"
    ]
  });

  useEffect(()=>{
    fetch('http://localhost:9090/category/get-all').then(res=>res.json()).then(r=>setCategories(r.data))
  },[])

  const addProductFect= ()=>{
    fetch('http://localhost:9090/product/add-product',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res=> res.json())
    .then(data=>console.log(data))
  }

  return (
    <div className="col-xl-12">
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
                <h4>Add Product</h4>
            </div>
            <div>
                <div className="row">
                    <div className="col-6 p-3">
                        <div className="mb-3">
                            <label className="form-label"> Kategori Seçiniz</label>
                            <select onChange={
                                evt=> setProduct({...product, categoryId : parseInt(evt.target.value)}) 
                            }  
                            className='form-control'>
                                <option>Lütfen Seçiniz</option>
                                {
                                    categories?.map((c, index)=>{
                                        return <option key={index} value={c.id}>{c.categoryName}</option>
                                    })
                                }
                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Ürün Adı</label>
                            <input onChange={
                                evt=> setProduct({...product, name : evt.target.value}) 
                            }   type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Fiyat</label>
                            <input onChange={
                                evt=> setProduct({...product, price : parseInt(evt.target.value)}) 
                            }   type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Stok Miktarı</label>
                            <input onChange={
                                evt=> setProduct({...product, stock : parseInt(evt.target.value)}) 
                            }   type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-6 p-3">
                    <div className="mb-3">
                                <label className="form-label"> Tumpnail URL</label>
                                <input onChange={
                                evt=> setProduct({...product, thumpnail : evt.target.value}) 
                            }   type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label"> Resim Listesi</label>
                                <textarea rows={3} className="form-control" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label"> Boyut Listesi</label>
                                <SizeList  onChange={
                                (evt)=> setProduct({...product, sizeList : evt}) 
                            } />
                        </div>
                    </div>
                    <div className="col d-grid p-4">
                         <button onClick={addProductFect} className='btn btn-success'>K A Y D E T</button>
                    </div>
                </div>
            </div>
            <div className="card-footer border-top">

            </div>
        </div>
    </div>
  )
}

export default AddProduct