import "./LongBanner.css";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/action";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
const LongBanner = () => {
  const data = useSelector((state) => state?.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr?.length);
  };

  const randomProduct =
    data?.products?.length > 0
      ? data?.products[getRandomIndex(data?.products)]
      : null;

  return (
    <>
      <div className="long-banner-main">
        <div className="long-banner-container">
          <div className="long-banner-text">
            <h3>
              SAVE UP TO{" "}
              {randomProduct ? randomProduct?.discountPercentage : "Loading..."}{" "}
              %
            </h3>
            <h2>
              {randomProduct
                ? randomProduct?.title?.length > 15
                  ? randomProduct?.title?.slice(0, 15) + " "
                  : randomProduct?.title
                : "Loading..."}
            </h2>
            <p>
              {randomProduct
                ? randomProduct?.description?.length > 50
                  ? randomProduct?.description?.slice(0, 50) + " "
                  : randomProduct?.description
                : "Loading..."}
            </p>
            <div className="long-banner-btn">
              <button>
                Shop Now{" "}
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
          <div className="long-banner-image">
            <img
              src={randomProduct ? randomProduct?.thumbnail : "Loading..."}
              alt={randomProduct?.title}
            />
            <div className="long-banner-price">
              <p>${randomProduct ? randomProduct?.price : "Loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongBanner;
