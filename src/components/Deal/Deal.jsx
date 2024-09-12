import "./Deal.css";
import React, { useEffect, useState } from "react";
import SideProduct from "../SideProduct/SideProduct";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductContainer from "../ProductContainer/ProductContainer";

const Deal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

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
      <div className="heading">
        <div>
          <h2>Best Deals</h2>
          <p>
            Deals end in{" "}
            <span>
              {timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:
              {timeLeft.seconds}s
            </span>
          </p>
        </div>
        <a href="#">
          Browse all product
          <span>
            <IoIosArrowRoundForward />
          </span>
        </a>
      </div>

      <div className="deal-product-container">
        <SideProduct />
        <ProductContainer />
      </div>
    </>
  );
};

export default Deal;
