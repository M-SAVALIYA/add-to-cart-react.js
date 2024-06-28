import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "./User/header/Navbar";
import Home from "./User/pages/Home";
import About from "./User/pages/About";
import Cart from "./User/pages/Cart";
import Product from "./User/pages/Product";
import AdminNavbar from "./Admin/header/Navbar";
import Dashboard from "./Admin/pages/Dashboard";
import Manage from "./Admin/pages/Manage";


const App = () => {


  let role = "admin"

  if (role == "user") {
    return (
      <>
        <UserNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    );
  } else if (role == "admin") {
    return (
      <>
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </>
    )
  } else {
    return <h1 >404 not found</h1>
  }

}

export default App