import {
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="text">
          <p>Welcome to Clicon online e commerece store</p>
        </div>

        <div className="header-right">
          <div className="header-iocns">
            <p>
              Follow us on
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
              <span>
                <FaXTwitter />
              </span>
              <span>
                <FaDiscord />
              </span>
              <span>
                <FaReddit />
              </span>{" "}
              <span>
                <FaYoutube />
              </span>
            </p>
          </div>
          {/* <div className="divider"></div> */}

          <div className="header-languages">
            <div>
              <p>
                Eng <IoIosArrowDown />
              </p>
            </div>

            <div>
              <p>
                PKR <IoIosArrowDown />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="logo">
          <img src="./Logo.png" alt="logo" />
        </div>
        <div className="serach-bar">
          <form action="">
            <input
              type="text"
              placeholder="Serach for anything....."
              name="serach"
              max={30}
              className="product-search"
            />
          </form>
          <button>
            <p>
              <CiSearch />
            </p>
          </button>
        </div>
        <div className="user-icons">
          <p>
            <CiShoppingCart />
          </p>
          <p>
            <CiHeart />
          </p>
          <p>
            <CiUser />
          </p>
        </div>
      </div>

      {/* <div className="navlinks">
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">Contact</a>
        <a href="">Support</a>
        <a href="">Sign In</a>
        <a href="">Sign Up</a>
      </div> */}
    </>
  );
};

export default Header;
