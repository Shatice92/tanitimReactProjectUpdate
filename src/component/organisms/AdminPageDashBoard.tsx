import React from 'react'
function AdminPageDashBoard() {
    return (
      <div>
          <section className="row text-center placeholders">
                              <div className="col-6 col-sm-3">
                                  <div className="card text-white bg-info mb-3">
                                      <div className="card-header">Products</div>
                                      <div className="card-body">
                                          <h4 className="card-title"> </h4>
                                          <p className="card-text">All Products</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6 col-sm-3">
                                  <div className="card text-white bg-success mb-3">
                                      <div className="card-header">Orders</div>
                                      <div className="card-body">
                                          <h4 className="card-title">All Orders</h4>
                                          <p className="card-text"></p>
                                      </div>
                                  </div>""
                              </div>
                              <div className="col-6 col-sm-3">
                                  <div className="card text-white bg-warning mb-3">
                                      <div className="card-header">Total Earning</div>
                                      <div className="card-body">
                                          <h4 className="card-title">200000$</h4>
                                          <p className="card-text"></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6 col-sm-3">
                                  <div className="card text-white bg-danger mb-3">
                                      <div className="card-header">Date</div>
                                      <div className="card-body">
                                          <h4 className="card-title">2025-02-03</h4>
                                          <p className="card-text"></p>
                                      </div>
                                  </div>
                              </div>
                          </section>
      </div>
    )
  }
  
  export default AdminPageDashBoard
  