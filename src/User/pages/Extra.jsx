// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Home = () => {

//   const [data, setdata] = useState([]);
//   const [product, setproduct] = useState({})


//   //get data

//   let getData = async () => {

//     let res = await axios.get("http://localhost:3001/product");
//     console.log(res);

//     setdata(res.data);

//   }

//   useEffect(() => {

//     getData();

//   }, [])


//   //Add to Cart

//   let addcart = async () => {

//     let result = await axios.post("http://localhost:3001/addtocart", product)
//     console.log(result);

//     setdata([...data, result.data])

//   }

//   let handle = (event) => {
//     setproduct({ ...product, [event.target.name]: event.target.value })
//   }






//   return (
//     <div className="row">

//       {
//         data.map((val, index) => {
//           return (
//             <>


//               <div class="col-md-3 col-sm-6">
//                 <div class="card p-3" style={{ width: "18rem" }}>
//                   <img className='mx-auto' type="img" name='img' onChange={handle} style={{ width: " 100px", height: "100px" }} src={val.img} alt="Card image cap" />
//                   <div class="card-body">
//                     <h5 class="card-title" type="text" name='name' onChange={handle} >{val.name}</h5>
//                     <p class="card-text" type="text" name='desc' onChange={handle}>{val.desc}</p>
//                     <h5 class="mb-3" type="number" name='price' onChange={handle}>Price:-  {val.price}</h5>

//                     <button class="btn btn-primary" onClick={addcart}>Add to Cart</button>

//                   </div>
//                 </div>
//               </div>


//             </>
//           )
//         })
//       }

//     </div>
//   )
// }

// export default Home




import React, { useEffect, useState } from 'react'
import { get_api, post_api } from '../../api/api'
import { add_product_cart, get_product } from '../../Constant'
import { Button } from '../../atoms/Atom';
import Swal from 'sweetalert2';

const Home = () => {

  let [product, setProduct] = useState([]);

  async function GET_Product() {
    try {
      let res = await get_api(get_product);
      console.log(res);
      setProduct(res.data)
    } catch (error) {
      console.log("sorry");
    }
  }

  useEffect(() => {
    GET_Product()
  }, [])

  async function addcart(product) {
    
    try {
      let res = await post_api(add_product_cart, product)
      console.log(res);
      if (res.status == 201) {
        Swal.fire({
          title: "Good job!",
          text: "Product Added Successfully",
          icon: "success"
        })
      }
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <div className="product mt-5">
        <div className="container">
          <div className="row">
            {
              product.map((val, index) => {
                return (
                  <>
                    <div className="col-3">
                      <div class="card">
                        <img src={val.image} class="p-2 card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{val.name}</h5>
                          <p class="card-text">{val.disc}</p>
                          <p class="card-text">{val.price}</p>
                          <Button content="Add To Cart" onfunction={() => addcart(val)} property="btn btn-outline-dark w-100" />
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home