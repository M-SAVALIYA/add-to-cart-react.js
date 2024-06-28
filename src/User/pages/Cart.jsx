import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {

  const [data, setdata] = useState([]);


  //get data

  let getData = async () => {

    let res = await axios.get("http://localhost:3001/addtocart");
    console.log(res);

    setdata(res.data);

  }

  useEffect(() => {

    getData();

  }, [])


  //delete


  let removeData = async (id) => {

    let res = await axios.delete(`http://localhost:3001/addtocart/${id}`)
    console.log(res);

    setdata(data.filter((val) => val.id != id));

  }

  

  return (
    <div className="row">

      {
        data.map((val, index) => {
          return (
            <>


              <div class="col-md-3 col-sm-6">
                <div class="card p-3" style={{ width: "18rem" }}>
                  <img className='mx-auto' style={{ width: " 100px", height: "100px" }} src={val.img} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <p class="card-text">{val.desc}</p>
                    <h5 class="mb-3">Price:-  {val.price}</h5>

                    <button class="btn btn-primary" onClick={() => removeData(val.id)}>Delete</button>

                  </div>
                </div>
              </div>


            </>
          )
        })
      }

    </div>

  )
}

export default Cart