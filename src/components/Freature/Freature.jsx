import "./Freature.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/action";
import { IoIosArrowRoundForward } from "react-icons/io";

const Freature = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [products2, setProducts2] = useState(null);
  const [products3, setProducts3] = useState(null);
  const data = useSelector((state) => state?.products);

  useEffect(() => {
    if (data?.products?.length > 0) {
      const index1 = Math.floor(Math.random() * data?.products?.length);
      const index2 = Math.floor(Math.random() * data?.products?.length);
      const index3 = Math.floor(Math.random() * data?.products?.length);

      if (index2 > data?.products?.length) {
        index2++;
      }
      // console.log(index2);
      if (index3 > data?.products?.length) {
        index3 += 2;
      }
      const selectedProduct1 = data?.products[index1];
      setProducts(selectedProduct1);
      const selectedProduct2 = data?.products[index2];
      setProducts2(selectedProduct2);
      const selectedProduct3 = data?.products[index3];
      setProducts3(selectedProduct3);
    }
  }, [data]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="freature-main">
        <div className="freature-left">
          <div className="left-text">
            <h4>The Best Place To Sale</h4>
            <h2>{products?.title}</h2>
            <p>{products?.description}</p>
            <button>
              SHOP NOW
              <span>
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
          <div className="left-img">
            <img src={products?.thumbnail} alt="watch" />
          </div>
          <div className="price">
            <span>${products?.price}</span>
          </div>
        </div>
        <div className="freature-right">
          <div className="freature-right-top">
            <div className="right-top-main">
              <div className="right-top-text">
                <h3>Summer Sales</h3>
                <h4>{products2?.title.slice(0, 16)}</h4>
                <button>
                  SHOP NOW
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </button>
              </div>
              <div className="right-top-img">
                <img src={products2?.thumbnail} alt={products2?.title} />

                <div className="disscount">
                  <p>{products?.discountPercentage}% OFF</p>
                </div>
              </div>
            </div>
          </div>
          <div className="freatur-left-bottom">
            <div className="left-top-main">
              <div className="left-top-img">
                <img src={products3?.thumbnail} alt={products3?.title} />
              </div>
              <div className="left-top-text">
                <h3>{products3?.title.slice(0.16)}</h3>
                <h4>${products3?.price}</h4>
                <button>
                  SHOP NOW
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freature;
