import "./Deal.css";
import { useDispatch } from "react-redux";
import { searchQuery } from "../../redux/action";
import React, { useEffect, useState } from "react";
import SideProduct from "../SideProduct/SideProduct";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductContainer from "../ProductContainer/ProductContainer";

const Deal = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  dispatch(searchQuery(search));

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const storedDate = localStorage.getItem("targetDate");
    let targetDate;

    if (storedDate) {
      targetDate = new Date(storedDate);
    } else {
      targetDate = new Date();
      targetDate?.setDate(targetDate?.getDate() + 15);
      localStorage?.setItem("targetDate", targetDate);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const timeLeftObj = {
          days: Math?.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math?.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math?.floor((difference / 1000 / 60) % 60),
          seconds: Math?.floor((difference / 1000) % 60),
        };
        setTimeLeft(timeLeftObj);
      } else {
        localStorage?.clear();
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Call immediately to set initial state
    const timerInterval = setInterval(calculateTimeLeft, 1000);
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
        <input
          type="text"
          name="search"
          maxLength={30}
          className="product-search"
          placeholder="Search for anything....."
          onChange={(e) => setSearch(e.target.value)}
        />
        <a href="#">
          Browse all products
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
