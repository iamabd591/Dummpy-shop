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
import "./Header.css";
import AlertBox from "./AlertBox";
import { useNavigate } from "react-router";
import { BiPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { getCategories } from "../../redux/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [search, setSearchQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const category = useSelector((state) => state?.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // console.log(category);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      setShowAlert(true);
    } else {
      navigation(`/search-results?query=${encodeURIComponent(search)}`);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };
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
          {/* <div className="header-languages">
            <p>
              Eng
              <IoIosArrowDown />
            </p>
          </div>

          <div className="header-currency">
            <p>
              PKR <IoIosArrowDown />
            </p>
          </div> */}
        </div>
      </div>

      <div className="header-lower">
        <div className="logo">
          <a href="/">
            <img src="/Logo.png" alt="logo" />
          </a>
        </div>
        <div className="search-bar">
          {showAlert && (
            <AlertBox
              message="Please enter a product name to search."
              onClose={closeAlert}
            />
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              maxLength={30}
              value={search}
              className="product-search"
              placeholder="Search for anything....."
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
            <button className="searchBtn" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>
        <div className="user-icons">
          <p>
            <a href="/shopping-cart">
              <CiShoppingCart />
            </a>
            <span>0</span>
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
              <span
                className="category"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                ALL Category
                <IoIosArrowDown />
                {showDropdown && (
                  <ul className="category-dropdown">
                    {category?.map((cat, index) => (
                      <li key={index}>
                        <a href={`/products/category/${cat}`}>{cat}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </span>
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
