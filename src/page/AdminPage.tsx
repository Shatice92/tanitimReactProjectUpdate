import React, { useEffect, useState } from 'react';
import AdminPageSideBar from '../component/organisms/AdminPageSideBar';
import AdminPageProductTable from '../component/molecules/AdminPageProductTable';
import AdminPageDashBoard from '../component/organisms/AdminPageDashBoard';
import { IAdminProductList } from '../model/IAdminProductList';

function Adminpage() {
    const [productList, setProductList] = useState<IAdminProductList[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:9090/product/get-all');
            const data = await response.json();
            setProductList(data.data); // Veriyi state'e aktar
        };

        fetchProducts();
    }, []); // Boş bağımlılıkla sadece component ilk yüklendiğinde çalışacak

    return (
        <div>
            <header>
                {/* Header içeriği */}
            </header>

            <div className="container-fluid">
                <div className="row">
                    <AdminPageSideBar />

                    <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                        <h1>Dashboard</h1>

                        <AdminPageDashBoard />

                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Modal içeriği */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-group pull-right mb-2" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary mr-2">Print</button>
                            <button type="button" className="btn btn-success mr-2">Export</button>
                        </div>
                        <h2>Table</h2>
                        <div className="table-responsive">
                            {/* productList'i AdminPageProductTable bileşenine geçiriyoruz */}
                            <AdminPageProductTable productList={productList} />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Adminpage;
