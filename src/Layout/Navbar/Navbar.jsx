import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const searchHandler = () => {
    console.log({Home});
  };
  return (
    <>
      <div>
        <div className="Nav-link">
          <nav>
            <ul>
              <li>
                <a href="{Home}" className="Home">Home</a>
              </li>
              <li>
                <a href="{About}" className="About">
                  About
                </a>
              </li>
              <li>
                <a href="{Products}" className="Products">
                  Products
                </a>
              </li>
              <li>
                <a href="{Cart}" className="Cart">
                  Carts
                </a>
              </li>
              <li>
                <a href="{Login}" className="Login">
                  Login
                </a>
              </li>
              <li>
                <a href="{Signup}" className="Signup">
                  Signup
                </a>
              </li>
              <li>
                <a href="{Contactus}" className="Contactus">
                  Contact us
                </a>
              </li>
              <input type="search" placeholder="Search" className="search" />
              <button onClick={searchHandler}>O</button>
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  );
}
export default Navbar;
