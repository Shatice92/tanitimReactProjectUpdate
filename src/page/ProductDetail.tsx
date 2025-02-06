import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { IAdminProductList } from "../model/IAdminProductList";
import { ICategory } from "../model/ICategory";

const ProductDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("productId"));
  const [product, setProduct] = useState<IAdminProductList |  null>(null);
  const [productC, setProductC] = useState<ICategory |  null>(null);

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
        setProduct(response.data.data);
      } catch (error) {
        console.error("Ürün getirilemedi:", error);
      }
    }
      
    getProduct();

  }, [productId]);

  return (
    <div>
      <div
        className="container d-flex justify-content-center align-items-center min-vh-100 bg-warning"
        style={{ fontFamily: "revert-layer" }}
      >
        <div className="row justify-content-center">
          <h1 className="text-center mb-4">Product Details</h1>
          {product ? (
            <div
              className="card"
              style={{ width: "18rem", height: "auto" }}
            >
              <img src={product.thumpnail} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <strong>Kategori:</strong> {product.categoryName}
                </p>
                <p className="card-text">
                  <strong>Review:</strong> {product.review}
                </p>
                <p className="card-text">
                  <strong>Fiyat:</strong> {product.price} TL
                </p>
              </div>
            </div>
          ) : (
            <p>Ürün yükleniyor...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
