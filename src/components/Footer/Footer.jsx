import "./Footer.css";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-sections">
          <div className="footer-top-section">
            <div className="branding-section">
              <div className="footer-logo">
                <img src="/Logo.png" />
              </div>
              <div className="footer-info">
                <h4>Customer Support</h4>
                <p>(629) 555-0129</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p>info@clicon.com</p>
              </div>
            </div>
            <div className="top-category-section">
              <h2>Top Category</h2>
              <div className="category-list">
                <ul>
                  <li>Computer & Laptop</li>
                  <li>SmartPhone</li>
                  <li>Headphone</li>
                  <li>Accessories</li>
                  <li>Camera & Photo</li>
                  <li>TV & Homes</li>
                  <li>
                    Browse All Product <HiOutlineArrowLongRight />
                  </li>
                </ul>
              </div>
            </div>
            <div className="quick-links-section">
              <h2>Quick Links</h2>
              <div className="category-list">
                <ul>
                  <li>Shop Product</li>
                  <li>Shoping Cart</li>
                  <li>Wishlist</li>
                  <li>Compare</li>
                  <li>Track Order</li>
                  <li>Customer Help</li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
            <div className="download-section">
              <h2>Download App</h2>
              <div className="play-store-icon">
                <p>
                  <FaGooglePlay />
                </p>
                <div className="play-store-text">
                  <p>Get it now</p>
                  <p> Google Play</p>
                </div>
              </div>

              <div className="app-store-icon">
                <p>
                  <IoLogoApple />
                </p>
                <div className="app-store-text">
                  <p>Get it now</p>
                  <p> App Store</p>
                </div>
              </div>
            </div>
            <div className="tag-section">
              <h2>Popular tag</h2>
              <div className="tags">
                <p>Games</p>
                <p>Iphone</p>
                <p>Jacket</p>
                <p>MacBook</p>
                <p>SSD</p>
                <p>Tablet</p>
                <p>Smart Tv</p>
                <p>Microwaves</p>
                <p>Speakers</p>
                <p>Samsung</p>
                <p>Asus Laptops</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom-section">
            <p>
              <span>Clicon</span> - E-Commerce Store © 2024. Design by Dummy
              Shop
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
