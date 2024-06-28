import { Switch } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Manage = () => {




  const [data, setdata] = useState([]);
  const [product, setproduct] = useState({})
  const [view, setview] = useState({})


  // update

  let handleView = (event) => {
    setview({ ...view, [event.target.name]: event.target.value })

  }

  let viewdata = (user) => {
    console.log(user);
    setview(user)
  }

  let updateuser = async () => {
    let result = await axios.put(`http://localhost:3001/product/${view.id}`, view)
    console.log(result);

    setdata(
      data.map((val, index) => (val.id == result.data.id ? { ...view } : val))
    )

  }


  //post data



  let addData = async () => {

    let result = await axios.post("http://localhost:3001/product", product)
    console.log(result);

    setdata([...data, result.data])



  }

  let handle = (event) => {
    setproduct({ ...product, [event.target.name]: event.target.value })
  }








  //get data

  let getData = async () => {

    let res = await axios.get("http://localhost:3001/product");
    console.log(res);

    setdata(res.data);

  }

  useEffect(() => {

    getData();

  }, [])



  //delete


  let removeData = async (id) => {

    let res = await axios.delete(`http://localhost:3001/product/${id}`)
    console.log(res);

    setdata(data.filter((val) => val.id != id));

  }








  return (

    <section class="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">

                <div class="row">

                  <div class="col-lg-7">

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p class="mb-1">Shopping cart</p>
                      </div>
                      <div>
                        <p class="mb-0"><span class="text-muted">Sort by:</span> price <i class="fas fa-angle-down mt-1"></i></p>
                      </div>
                    </div>

                    <div class="card mb-3">
                      {
                        data.map((val, index) => {
                          return (
                            <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center">
                                  <img
                                    src={val.img}
                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: " 65px", marginRight: "10px" }} />
                                  <div class="ms-3">
                                    <h5>{val.name}</h5>
                                    <p class="small mb-0">{val.desc}</p>
                                  </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">

                                  <div style={{ width: "80px" }}>
                                    <h5 class="mb-0">${val.price}</h5>
                                  </div>


                                  {/* Switch */}

                                  <div>
                                    <Switch defaultChecked />
                                  </div>

                                  <button class="btn btn-outline-dark pe-4" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" onClick={() => viewdata(val)} style={{ marginRight: "10px" }}>Update</button>



                                  <button onClick={() => removeData(val.id)} class="btn btn-outline-dark pe-4"><i class="fas fa-trash-alt"></i></button>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                      {/* modal */}
                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <input type="text" name='img' class="form-control form-control-lg" siez="17"
                                placeholder="images" value={view.img} onChange={handleView} />
                            </div>
                            <div class="modal-header">
                              <input type="text" name='name' class="form-control form-control-lg" siez="17"
                                placeholder="ProductName" value={view.name} onChange={handleView} />
                            </div>
                            <div class="modal-body">
                              <form>
                                <div class="form-group">
                                  <input type="number" class="form-control form-control-lg" siez="17"
                                    placeholder="Price" name='price' minlength="19" maxlength="19" value={view.price} onChange={handleView} />
                                </div>
                                <div class="form-group">
                                  <input type="text" class="form-control form-control-lg" siez="17"
                                    placeholder="Description" name='desc' value={view.desc} onChange={handleView} />
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={updateuser}>Save</button>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>


                  <div class="col-lg-5">
                    <div class="card bg-primary text-white rounded-3">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <h5 class="mb-0">Admin  Card details</h5>
                        </div>

                        <div>
                          <p class="small mb-2">Card type</p>
                          <a href="#!" type="submit" class="text-white"><i
                            class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                            class="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                            class="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
                        </div>

                        <form class="mt-4">

                          <div data-mdb-input-init class="form-outline form-white mb-4">
                            <label class="form-label" for="typeName">Add Images:</label>
                            <input type="img" name='img' id="img" class="form-control form-control-lg"
                              placeholder="add images" onChange={handle} />
                          </div>

                          <div data-mdb-input-init class="form-outline form-white mb-4">
                            <label class="form-label" for="typeName">Product Name:</label>
                            <input type="text" name='name' id="typeName" class="form-control form-control-lg"
                              placeholder="Product Name" onChange={handle} />
                          </div>

                          <div data-mdb-input-init class="form-outline form-white mb-4">
                            <label class="form-label" for="typeText">Price:</label>
                            <input type="text" name='price' id="number" class="form-control form-control-lg"
                              placeholder="Price" onChange={handle} />
                          </div>

                          <div data-mdb-input-init class="form-outline form-white mb-4">
                            <label class="form-label" for="typeName">Description:</label>
                            <input type="text" name='desc' id="typeName" class="form-control form-control-lg"
                              placeholder="Description" onChange={handle} />
                          </div><br /><br />

                          <button onClick={addData} class="btn btn-info btn-block btn-lg">Add</button>
                        </form>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Manage;