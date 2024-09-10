import {
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  CiHeart,
  CiUser,
  CiLocationOn,
  CiHeadphones,
  CiShoppingCart,
  CiSearch,
} from "react-icons/ci";
import {
  IoIosGitCompare,
  IoMdHelpCircleOutline,
  IoIosArrowDown,
} from "react-icons/io";
import {} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
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
      <div className="header-nav">
        <div className="user-nav">
          <ul className="user-nav-list">
            <li href="">
              <p className="category">
                ALL Category
                <IoIosArrowDown />
              </p>
            </li>
            <li href="">
              <p>
                <span>
                  <CiLocationOn />
                </span>
                Track Order
              </p>
            </li>
            <li href="">
              <p>
                <span>
                  <IoIosGitCompare />
                </span>
                Compare
              </p>
            </li>
            <li href="">
              <p>
                <span>
                  <CiHeadphones />
                </span>
                Customer Support
              </p>
            </li>
            <li href="">
              <p>
                <span>
                  <IoMdHelpCircleOutline />
                </span>
                Need Help
              </p>
            </li>
          </ul>
        </div>
        <div className="help">
          <p>
            <span>
              <BiPhoneCall />
            </span>
            +92 123 45 6789
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
