import React from 'react'
import Swal from 'sweetalert2';

const Dashboard = () => {

  let name = "milan"

  function Alert() {
    if (name == "milan") {
      Swal.fire({
        title: "Good job!",
        text: "name is succse",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Good job!",
        text: "name is not succse",
        icon: "success"
      });
    }
  }
  


  return (
    <>
      <button onClick={Alert}>milan</button>
    </>
  )
}

export default Dashboard;