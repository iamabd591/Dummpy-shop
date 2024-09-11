import "./SideProduct.css";
import React from "react";
import Rating from "react-rating";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SideProduct = () => {
  return (
    <>
      <div className="left-container">
        <div className="product-image">
          <img src="./watch.png" alt="watch" />
        </div>
        <p className="offer">32% OFF</p>
        <p className="lable">HOT</p>
        <span>
          <Rating
            emptySymbol={<AiOutlineStar size={15} color="#ffd700" />}
            fullSymbol={<AiFillStar size={15} color="#ffd700" />}
            initialRating={4.5}
            readonly={true}
          />
        </span>
        <h5>
          Xbox Series S-512GB SSD Console With Wireless Controller - EU Version
        </h5>
        <p className="price">$850.99</p>
        <p className="dis-price">$442.12</p>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          quisquam iure delectus nihil adipisci corrupti similique nobis fugit
          voluptatem provident!
        </p>
        <div className="buttons">
          <div className="wish-list">
            <p>
              <CiHeart />
            </p>
          </div>
          <div className="add-to-cart">
            <button>
              Add To Cart{" "}
              <span>
                <FiShoppingCart />
              </span>
            </button>
          </div>
          <div className="eye-view">
            <p>
              <IoEyeOutline />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideProduct;
