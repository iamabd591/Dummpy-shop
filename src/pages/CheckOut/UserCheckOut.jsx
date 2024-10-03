import "./CheckOut.css";
import React from "react";
import { FaPaypal } from "react-icons/fa6";
import { BiLogoVenmo } from "react-icons/bi";
import { FaCcAmazonPay } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
const UserCheckOut = () => {
  return (
    <>
      <div className="checkout-main">
        <h3>Billing Information</h3>
        <form autoComplete="off">
          <div className="billing-Section">
            <div className="lables">
              <label htmlFor="">Name</label>
              <label htmlFor="">Email</label>
              <label htmlFor="">Phone</label>
            </div>
            <div className="inputs">
              <input required type="text" id="name" placeholder="Your Name" />
              <input
                required
                type="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                required
                type="text"
                id="number"
                placeholder="Your Number"
              />
            </div>
            <div className="addresslables">
              <label htmlFor="">Address</label>
            </div>
            <div className="inputs addressInput">
              <input
                required
                type="text"
                id="address"
                placeholder="Your Address"
              />
            </div>
            <div className="lables section-third">
              <label htmlFor="">Country</label>
              <label htmlFor="">Region/State</label>
              <label htmlFor="">City</label>
            </div>
            <div className="inputs">
              <input
                required
                type="text"
                id="name"
                placeholder="Your Country"
              />
              <input
                required
                type="email"
                id="email"
                placeholder="Your Region/State "
              />
              <input required type="text" id="number" placeholder="Your City" />
            </div>
            <div className="payment-option-section">
              <h3>Payment Option</h3>
            </div>
          </div>
          <div className="payment-total ">
            <h3>Order Summery</h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserCheckOut;
