import "./Return.css";
import React from "react";
import { FiBox } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";
import { MdHeadsetMic, MdOutlinePayment } from "react-icons/md";
const Return = () => {
  return (
    <>
      <div className="return">
        <div className="return-child">
          <div className="return-icon">
            <span>
              <FiBox />
            </span>
          </div>
          <div className="return-info">
            <h5>Fasted Delivery</h5>
            <p>Delivery in 24 Hr</p>
          </div>
        </div>
        <div className="return-child">
          <div className="return-icon">
            <span>
              <TfiCup />
            </span>
          </div>
          <div className="return-info">
            <h5>24 Hours Return</h5>
            <p>100% money-back guarantee</p>
          </div>
        </div>
        <div className="return-child">
          <div className="return-icon">
            <span>
              <MdOutlinePayment />
            </span>
          </div>
          <div className="return-info">
            <h5>Secure Payment</h5>
            <p>Your money is safe</p>
          </div>
        </div>
        <div className="return-child">
          <div className="return-icon">
            <span>
              <MdHeadsetMic />
            </span>
          </div>
          <div className="return-info">
            <h5>Support 24/7</h5>
            <p>Live Contact</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Return;
