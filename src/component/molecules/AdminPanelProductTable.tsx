import React from 'react'
import { Icon } from "@iconify/react";
import { IAdminProductList } from '../../model/IAdminProductList';
import { getCurrency } from '../../util/tools';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
function AdminPanelProductTable(props: {productList?: IAdminProductList[]}) {
  const navigate = useNavigate();
  const list = props.productList;
  const deleteProduct = (productId: number)=>{
      /**
       * swal ile evet hayır
       */
      swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: [true,true],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                  // Eğer sil için OK demiş ise burada sunucuya fetch atılacak silme işlemi için 
              swal("Kayıt başarı ile silindi.!", {
                icon: "success",
              });
            } else {
              swal("Silme işlemi iptal edildi.");
            }
          });
  }
  const getRowList = ()=>{
      return   list?.map(p=>{
                return   <tr>
                              <td>
                                    <div className="form-check ms-1">
                                          <input type="checkbox" className="form-check-input" id="customCheck2" />
                                          <label className="form-check-label" >&nbsp;</label>
                                    </div>
                              </td>
                              <td>
                                    <div className="d-flex align-items-center gap-2">
                                          <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                <img src={p.thumpnail} alt="" className="avatar-md" />
                                          </div>
                                          <div>
                                                <a href="#!" className="text-dark fw-medium fs-15">{p.name}</a>
                                                <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>{p.sizeList.map(s=>{return s+'  '})}</p>
                                          </div>
                                    </div>

                              </td>
                              <td>{getCurrency(p.price)}</td>
                              <td>
                                    <p className="mb-1 text-muted"><span className="text-dark fw-medium">{p.stock} Item</span> Left</p>
                                    <p className="mb-0 text-muted">{p.stock / 4} Sold</p>
                              </td>
                              <td> {p.categoryName}</td>
                              <td> <span className="badge p-1 bg-light text-dark fs-12 me-1"><i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i> {p.rate}</span> {p.review} Review</td>
                              <td>
                                    <div className="d-flex gap-2">
                                          <a onClick={()=>{navigate('/product-detail?productId='+p.productId)}} className="btn btn-light btn-sm"><Icon icon="solar:eye-broken"  className="align-middle fs-18"/> </a>
                                          <a onClick={()=>{navigate('/product-edit-page?productId='+p.productId)}} className="btn btn-soft-primary btn-sm"><Icon icon="solar:pen-2-broken"  className="align-middle fs-18"/> </a>
                                          <a onClick={()=>{deleteProduct(p.productId)}} className="btn btn-soft-danger btn-sm"><Icon icon="solar:trash-bin-minimalistic-2-broken"  className="align-middle fs-18"/></a>
                                    </div>
                              </td>
                        </tr>
                  })
  }
  return (
    <table className="table align-middle mb-0 table-hover table-centered">
    <thead className="bg-light-subtle">
          <tr>
                <th style={{width: '20px'}}>
                      <div className="form-check ms-1">
                            <input type="checkbox" className="form-check-input" id="customCheck1" />
                            <label className="form-check-label" ></label>
                      </div>
                </th>
                <th>Product Name & Size</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Action</th>
          </tr>
    </thead>
    <tbody>
        {
            getRowList()
        }
    </tbody>
    </table>
  )
}

export default React.memo(AdminPanelProductTable)