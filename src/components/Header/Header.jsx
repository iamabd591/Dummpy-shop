import "./Header.css";
import React, { useEffect } from "react";
import {} from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
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
import { useDispatch, useSelector } from "react-redux";
import { getSearchProduct } from "../../redux/action";
// import DropDown from "../DropDown/DropDown";

const Header = () => {
  const dispatch = useDispatch();
  const searchProduct = useSelector((state) => state?.SearchProducts);
  useEffect(() => {
    dispatch(getSearchProduct());
  }, [dispatch]);
  console.log(searchProduct);
  return (
    <>
      <div className="header">
        <div className="text">
          <p>Welcome to Clicon online e-commerce store</p>
        </div>

        <div className="header-right">
          <div className="header-icons">
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
          <div className="header-languages">
            <div>
              {/* <DropDown /> */}
              <p>
                <IoIosArrowDown />
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
          <a href="/">
            <img src="/Logo.png" alt="logo" />
          </a>
        </div>
        <div className="search-bar">
          <form>
            <input
              type="text"
              name="search"
              maxLength={30}
              className="product-search"
              placeholder="Search for anything....."
            />
            <button className="searchBtn" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>
        <div className="user-icons">
          <p>
            <CiShoppingCart />
          </p>
          <p>
            <CiHeart />
          </p>
          <p>
            <a href="/sign-in">
              <CiUser />
            </a>
          </p>
        </div>
      </div>
      <div className="header-nav">
        <div className="user-nav">
          <ul className="user-nav-list">
            <li>
              <p className="category">
                ALL Category
                <IoIosArrowDown />
              </p>
            </li>
            <li>
              <p>
                <span>
                  <CiLocationOn />
                </span>
                Track Order
              </p>
            </li>
            <li>
              <p>
                <span>
                  <IoIosGitCompare />
                </span>
                Compare
              </p>
            </li>
            <li>
              <p>
                <span>
                  <CiHeadphones />
                </span>
                Customer Support
              </p>
            </li>
            <li>
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
