import React, {useEffect, useState } from "react";
import AdminPageSideBarNotAddProduct from "../component/organisms/AdminPageSideBarNotAddProduct"
import { ICategory } from "../model/ICategory";

function AddProduct() {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [stock, setStock] = useState<number>(0);
    const [sizeList, setSizeList] = useState<string[]>([]);
    const [thumpnail, setThumpnail] = useState<string>("");
    const [images, setImages] = useState<string[]>([]);
    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

  
    useEffect(() => {
        fetch("http://localhost:9090/category/get-all")
            .then(response => response.json())
            .then(data => {
                if (data.code === 200 && Array.isArray(data.data)) {
                    setCategories(data.data);
                } else {
                    throw new Error("Kategori listesi alınamadı!");
                }
            })
            .catch(error => {
                console.error("Kategori yüklenirken hata oluştu:", error);
                setError("Kategoriler yüklenemedi!");
            });
    }, []);

    const addProduct = async () => {
        if (categoryId === null) {
            alert("Lütfen bir kategori seçin!");
            return;
        }

        setLoading(true);
        setError(null);

        const productData = {
            categoryId,
            name,
            sizeList: sizeList,
            price: parseFloat(price.toString()),
            stock,
            thumpnail: thumpnail,
            images: images.length > 0 ? images : [],
        };

        try {
            const response = await fetch("http://localhost:9090/product/add-product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Ürün başarıyla eklendi:", data);
            alert("Ürün başarıyla eklendi!");

        } catch (error: any) {
            console.error("Ürün eklenirken hata oluştu:", error);
            setError(error.message || "Bilinmeyen bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container text-start bg-warning" style={{ fontFamily: 'inherit' }}>
            <div className="row">
                <AdminPageSideBarNotAddProduct />
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                    <h1 className="text-center">Add Product</h1>
                    <div className="col-8 mt-3">
                        {error && <div className="alert alert-danger">{error}</div>}

                        {/* ✅ Kategori Seçimi Dropdown */}
                        <div className="row mb-2">
                            <div className="col-4 mt-2">
                                <label className="form-label">Select Category</label>
                            </div>
                            <div className="col-8">
                                <select
                                    className="form-select"
                                    value={categoryId || ""}
                                    onChange={(e) => setCategoryId(Number(e.target.value))}
                                >
                                    <option value="" disabled>Choose a category</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.categoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* ✅ Ürün Bilgileri */}
                        <div className="row mb-2">
                            <div className="col-4 mt-2">
                                <label className="form-label">Enter Product Name</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-4 mt-2">
                                <label className="form-label">Enter Sizes (comma separated)</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    onChange={(e) => setSizeList(e.target.value.split(","))}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-4 mt-2">
                                <label className="form-label">Enter Price</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="number"
                                    step="0.01"
                                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-4 mt-2">
                                <label className="form-label">Enter Stock</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="number"
                                    onChange={(e) => setStock(Number(e.target.value) || 0)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-4 mt-2">
                                <label className="form-label">Enter Thumbnail URL</label>
                            </div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    onChange={(e) => setThumpnail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <button
                            onClick={addProduct}
                            className="btn btn-success mt-3"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Product"}
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AddProduct;

function setError(arg0: string) {
    throw new Error("Function not implemented.");
}
