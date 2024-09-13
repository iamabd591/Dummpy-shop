import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "react-rating";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getFakeAPIProducts } from "../../redux/action";
import "./FreatureProducts.css";

const FreatureProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fakeApiProduct);

  const [sliceData, setSliceData] = useState([]);

  useEffect(() => {
    dispatch(getFakeAPIProducts());
  }, [dispatch]);

  useEffect(() => {
    if (sliceData.length === 0 && data.length > 0) {
      setSliceData(data.slice(0, 18));
    }
  }, [data, sliceData]);

  // console.log(sliceData);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="freature-products-main">
      <div className="freature-products-left">
        <div className="freature-products-left-ad">
          <h3>Computer & Accessories</h3>
          <h2>32% discount</h2>
          <h6>For all electronics products</h6>
          <p>
            Offer ends in{" "}
            <span>
              {timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:
              {timeLeft.seconds}s
            </span>
          </p>
          <button>
            Shop Now <FaArrowRight />
          </button>
          <img src="./Image11.png" alt="title" />
        </div>
      </div>

      <div className="freature-products-right">
        <div className="freature-products-right-nav">
          <div className="freture-heading">
            <h2>Freature Products</h2>
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
          {sliceData.map((item, index) => (
            <div className="product-card" key={index}>
              <p className="lable-hot">HOT</p>
              <center className="image">
                <img
                  src={item?.image}
                  alt={item?.title}
                  height="150"
                  width="150"
                />
              </center>
              <div className="freature-products-star">
                <h6>Rating</h6>
                <Rating
                  emptySymbol={<AiOutlineStar size={18} color="#ffd700" />}
                  fullSymbol={<AiFillStar size={18} color="#ffd700" />}
                  initialRating={item?.rating?.rate}
                  readonly
                />
              </div>
              <div className="freature-products-title">
                <p>
                  {item?.title?.length > 40
                    ? item?.title.slice(0, 40) + "..."
                    : item?.title}
                </p>
              </div>
              <div className="freature-products-price">
                <h6>Price</h6>
                <p>${item?.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreatureProducts;
