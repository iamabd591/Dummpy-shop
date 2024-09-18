import Rating from "react-rating";
import "./DynamicProductsCard.css";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DynamicProductsCard = ({ products, fakeApiProducts }) => {
  const [sliceData, setSliceData] = useState([]);

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr?.length);
  };

  const randomProduct =
    products?.length > 0 ? products[getRandomIndex(products)] : null;

  useEffect(() => {
    if (sliceData?.length === 0 && fakeApiProducts?.length > 0) {
      setSliceData(fakeApiProducts?.slice(0, 18));
    }
  }, [fakeApiProducts, sliceData]);

  return (
    <div className="freature-products-main">
      <div className="freature-products-right">
        <div className="freature-products-right-nav">
          <div className="freture-heading">
            <h2>Feature Products</h2>
          </div>
          <div className="nav-browser">
            <a href="#">All Products</a>
            <a href="#">Smart Phones</a>
            <a href="#">Bags</a>
            <a href="#">Jacket</a>
            <a href="#">TV</a>
            <a href="#" className="icon-link">
              Browse All Products <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="right-products">
          {sliceData && sliceData?.length > 0 ? (
            sliceData?.map((product, index) => (
              <div className="product-card" key={index}>
                <p className="lable-hot">HOT</p>
                <center className="image">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    height="150"
                    width="150"
                  />
                </center>
                <div className="freature-products-star">
                  <h6>Rating</h6>
                  <Rating
                    emptySymbol={<AiOutlineStar size={18} color="#ffd700" />}
                    fullSymbol={<AiFillStar size={18} color="#ffd700" />}
                    initialRating={product?.rating?.rate || 0}
                    readonly
                  />
                </div>
                <div className="freature-products-title">
                  <p>
                    {product?.title?.length > 20
                      ? product?.title.slice(0, 20) + "..."
                      : product?.title}
                  </p>
                </div>
                <div className="freature-products-price">
                  <h6>Price</h6>
                  <p>${product?.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="freature-products-left-ads">
        <div className="freature-products-left-ad-top">
          <div className="ads-image">
            <img
              src={randomProduct ? randomProduct?.thumbnail : "Loading..."}
              alt={randomProduct ? randomProduct?.title : "Loading..."}
            />
          </div>
          <div className="top-ads-heading">
            <h3>{randomProduct ? randomProduct?.title : "Loading..."}</h3>
          </div>
          <div className="ads-description">
            <p>
              {randomProduct
                ? randomProduct?.description?.length > 90
                  ? randomProduct?.description?.slice(0, 90) + " "
                  : randomProduct?.description
                : "Loading..."}
            </p>
          </div>
          <div className="ads-price">
            <p>
              Only For:{" "}
              <span>
                ${randomProduct ? randomProduct?.price : "Loading..."} USD
              </span>{" "}
            </p>
          </div>
          <div className="ads-button">
            <button>
              Shop Now{" "}
              <span>
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
        </div>
        <div className="freature-products-left-ad-bottom">
          <div className="bottom-ads-lable">
            <p>Summer Sales</p>
          </div>
          <div className="ads-discount-lable">
            <p>32% DISCOUNT</p>
          </div>
          <div className="ads-description">
            <p>
              only for <span>smart phones</span> products
            </p>
          </div>
          <div className="bottom-ad-button">
            <button>
              Shop Now
              <span>
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProductsCard;
