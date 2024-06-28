import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setdata] = useState([]); 


  //get data

  let getData = async () => {

    let res = await axios.get("http://localhost:3001/product");
    console.log(res);

    setdata(res.data);

  }

  useEffect(() => {

    getData();

  }, [])


  //Add to Cart

  let addcart = async () => {

    let result = await axios.post("http://localhost:3001/addtocart")
    console.log(result);

  }








  return (
    <div className="row">

      {
        data.map((val, index) => {
          return (
            <>


              <div class="col-md-3 col-sm-6">
                <div class="card p-3" style={{ width: "18rem" }}>
                  <img className='mx-auto' type="img" name='img' style={{ width: " 100px", height: "100px" }} src={val.img} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title" type="text" name='name'  >{val.name}</h5>
                    <p class="card-text" type="text" name='desc' >{val.desc}</p>
                    <h5 class="mb-3" type="number" name='price' >Price:-  {val.price}</h5>

                    <button class="btn btn-primary" onClick={() => addcart(val)}>Add to Cart</button>

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

export default Home