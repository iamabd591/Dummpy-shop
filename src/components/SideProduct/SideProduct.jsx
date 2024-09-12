import "./SideProduct.css";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";

const SideProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.products);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (data?.products?.length > 0) {
      const index = Math.floor(Math.random() * data?.products?.length);
      const selectedProduct = data?.products[index];
      setProducts(selectedProduct);
    }
  }, [data]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <div className="left-container">
        <div className="product-image">
          <img src={products?.thumbnail} alt="watch" />
        </div>
        <p className="offer">{products?.discountPercentage}%OFF</p>
        <p className="lable">HOT</p>
        <span>
          <Rating
            emptySymbol={<AiOutlineStar size={15} color="#ffd700" />}
            fullSymbol={<AiFillStar size={15} color="#ffd700" />}
            initialRating={products?.rating}
            readonly={true}
          />
        </span>
        <h5>{products?.title}</h5>
        <p className="price">${products?.price}</p>
        <p className="dis-price">
          {products && products?.price && products?.discountPercentage ? (
            `$${(
              products?.price -
              products?.price * (products?.discountPercentage / 100)
            ).toFixed(1)}`
          ) : (
            <p>No discount available</p>
          )}
        </p>
        <p className="description">{products?.description}</p>
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
