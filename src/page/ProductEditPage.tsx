import React, { useEffect, useState } from "react";
import AdminPageSideBar from "../component/organisms/AdminPageSideBar";
import { useSearchParams } from "react-router-dom";
import { IAdminProductList } from "../model/IAdminProductList";
import { IUpdateAdminProductList } from "../model/IUpdateAdminProductList";
import { ICategory } from "../model/ICategory";
import swal from "sweetalert";

import axios, { AxiosError } from 'axios';  

function ProductEditPage() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [sizeList, setSizesList] = useState<string[]>([]);
  const [thumpnail, setThumpnail] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("productId"));
  const [productC, setProductC] = useState<ICategory | null>(null);

  const [form, setForm] = useState<IAdminProductList | null>(null);
  const [product, setProduct] = useState<IUpdateAdminProductList >({
    productId:0,
    categoryId: 0,
    name: "",
    sizeList: [],
    price: 0,
    thumpnail: "",
    stock: 0,
    
  });

  const getArray = (list: string[] | undefined): string => {
    if (list === undefined) return "";
    return (
      "" +
      list.map((s) => {
        return "" + s;
      })
    );
  };

  useEffect(() => {
    async function getProduct() {
      if (!productId) {
        console.error("Geçersiz productId, API çağrısı yapılmadı.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:9090/product/get-product-by-id?productId=${productId}`
        );
        const  productData = response.data.data;
        setForm(productData);
        setProduct(productData);
        
      } catch (error) {
        console.error("Ürün getirilemedi:", error);
      }
    }

    getProduct();
   
  }, [productId,searchParams]);
  


 

 

  
  const fetchProductList = async () => {
    try {
        const response = await axios.get("http://localhost:9090/product/get-all");
        setProduct(response.data.data || []);
    } catch (error) {
        console.error("Ürünler listelenirken hata oluştu:", error);
    }
};
const updateProduct = async () => {
  if (!productId) {
    console.error("Geçersiz productId, API çağrısı yapılmadı.");
    return;
  }

  try {
    const responseUpdate = await axios.put(
      `http://localhost:9090/product/edit-product?productId=${productId}`,
      {
        productId:product.productId,
        name: product.name,
        price: product.price,
        stock: product.stock,
        sizeList: product.sizeList,
        thumpnail: product.thumpnail,
        categoryId: product.categoryId,
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    
    if (responseUpdate && responseUpdate.data) {
     
      const updatedProduct = responseUpdate.data.data; 
     if(updatedProduct)
      swal("Kayıt başarılı ")
      else{
        swal("Kayıt başarısız");
      }
    } else {
      console.error("Beklenen yanıt alınamadı:", responseUpdate);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error("API Hata Mesajı:", error.response.data);
        console.error("API Hata Kodu:", error.response.status);
      } else if (error.request) {
        console.error("API'ye istek gönderildi ancak yanıt alınamadı:", error.request);
      } else {
        console.error("Bir Axios hatası oluştu:", error.message);
      }
    } else {
      console.error("Bir hata oluştu:", (error as Error).message);
    }
  }
};


  return (
    <div>
      <head></head>

      <div
        className="container text-start bg-warning "
        style={{ fontFamily: "revert-layer" }}
      >
        <div className="row  ">
          <AdminPageSideBar />
          <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1 className="text-center">Add Product</h1>
            <div className="col-8 mt-3 display-inline padding-left-10">
              <div className="row mb-2 ">
                <div className="col-4 mt-2 ">
                  <label className="form-label ">Enter categoryId</label>
                </div>
                <div className="col-8">
                  <input
                    type="number "
                    readOnly
                    className="form-control shadow-ml"
                    value={product?.categoryId}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 mt-2">
                  <label className="form-label">Enter Product Name</label>
                </div>
                <div className="col-8">
                  <input 
                  value={product?.name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 mt-2">
                  <label className="form-label">Enter sizes</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    onChange={(e) => {
                      if (product) {
                        setProduct({
                          ...product,
                          sizeList: e.target.value.split(","),
                        });
                      }
                    }}
                    className="form-control"
                    value={product?.sizeList?.join(",") || ""}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 mt-2">
                  <label className="form-label">Enter Price</label>
                </div>
                <div className="col-8">
                  <input
                    type="number "
                    onChange={(e) => setProduct({...product,price: parseInt(e.target.value)})}
                    className="form-control"
                    value={product?.price}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 mt-2">
                  <label className="form-label">Enter Stock</label>
                </div>
                <div className="col-8">
                  <input
                    type="number "
                    onChange={(e) => setProduct({...product,stock: parseInt(e.target.value)})}
                    className="form-control"
                    value={product?.stock}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 mt-2">
                  <label className="form-label">Enter thumbnailUrl</label>
                </div>
                <div className="col-8">
                  <input
                    type="text "
                    onChange={(e) => setProduct({...product,thumpnail: e.target.value})}
                    className="form-control"
                    value={form?.thumpnail}
                  />
                </div>
              </div>

              <div></div>
              <button onClick={updateProduct} className="btn btn-success mt-3">Update Product</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProductEditPage;
