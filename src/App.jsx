import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Home/Homepage"
import Form from "./Pages/Form/Form";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Header from "./Layout/Header/Header";
import Products from "./Pages/Products/Products";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import About from "./Pages/About/About"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
  <Navbar />
  <Header />
  <Homepage />
  <Login />
  <Products />
  <Signup />
  <Form />
  <About />
  <Footer />
 </div>
    </>
  );
}
export default App;
