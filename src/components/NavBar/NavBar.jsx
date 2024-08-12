import "./NavBar.css";
import React from "react";
import { BsTypeH3 } from "react-icons/bs";
import { FcShop } from "react-icons/fc";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <nav className="">
          <div className="logo">
            <a href="#">
              <h3>
                <span>
                  <FcShop />
                </span>{" "}
                Dummy Shop
              </h3>
            </a>
          </div>

          <div className="navlinks">
            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Contact</a>
            <a href="">Support</a>
            <a href="">Sign In</a>
            <a href="">Sign Up</a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
