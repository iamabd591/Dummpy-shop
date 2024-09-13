import React, { useEffect, useState } from "react";
import "./FreatureProducts.css";
import { FaArrowRight } from "react-icons/fa6";

const FreatureProducts = () => {
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
        const timeLeftObj = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        setTimeLeft(timeLeftObj);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);
  return (
    <>
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
              Shop Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
            <img src="./Image11.png" alt="title" />
          </div>
        </div>

        <div className="freature-products-right-nav">
          <div className="heading">
            <h2>Freature Products</h2>
          </div>
          <div className="nav-browser">
            <a href="">All Products</a>
            <a href="">Smart Phones</a>
            <a href="">Laptops</a>
            <a href="">HeadPhones</a>
            <a href="">TV</a>
            <a href="" className="icon-link">
              Browse All Products
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div className="freature-products-right"></div>
      </div>
    </>
  );
};

export default FreatureProducts;
