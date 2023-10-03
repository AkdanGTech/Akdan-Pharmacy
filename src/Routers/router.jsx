import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import Homepage from "../Pages/Home/Homepage"
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";

export default () => (
   <BrowserRouter>
      <Switch>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
      </Switch>
      </BrowserRouter>
   );



