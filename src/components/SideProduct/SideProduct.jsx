import "./SideProduct.css";
import Rating from "react-rating";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useEffect, useState, useCallback } from "react";
import { addToCart, getProducts, initilizeCart } from "../../redux/action";

const SideProduct = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const data = useSelector((state) => state?.products);
  const cartCounter = useSelector((state) => state?.cartCount);
  const cartProducts = useSelector((state) => state?.cartItems);

  useEffect(() => {
    const savedCartCount = localStorage?.getItem("cartCounter");
    if (savedCartCount) {
      dispatch(initilizeCart(savedCartCount));
    }
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (cartCounter !== undefined) {
      localStorage.setItem("cartCounter", cartCounter);
    }
  }, [cartCounter]);

  useEffect(() => {
    if (data?.products?.length > 0) {
      const index = Math?.floor(Math?.random() * data?.products?.length);
      const selectedProduct = data?.products[index];
      setProducts(selectedProduct);
    }
  }, [data]);

  const handleCartCount = useCallback(() => {
    if (products) {
      console.log("Dispatching product to cart:", products);
      dispatch(addToCart(products));
    }
  }, [dispatch, products]);
  console.log("Component Rendered", { cartCounter, cartProducts });
  // localStorage?.clear(cartCounter);

  // const clearCart = () => {
  //   localStorage.removeItem("cartCounter");
  //   dispatch(initilizeCart(0));
  // };

  return (
    <>
      <div className="left-container">
        <div className="product-image">
          <img src={products?.thumbnail} alt={products?.title} />
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
            <span>No discount available</span>
          )}
        </p>
        <p className="description">{products?.description}</p>
        <div className="left-Side-buttons">
          <div className="wish-list">
            <p>
              <CiHeart />
            </p>
          </div>
          <div className="add-to-cart">
            <button onClick={handleCartCount}>
              Add To Cart{" "}
              <span>
                <FiShoppingCart />
              </span>
            </button>

            {/* <div className="clear-cart">
              <button onClick={clearCart}>Clear Cart</button>
            </div> */}
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

export default React.memo(SideProduct);
