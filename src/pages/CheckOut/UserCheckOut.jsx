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
        <div className="payment">
          <h3>Billing Information</h3>
          <div className="billing-Section">
            <form autoComplete="off">
              <div className="lable-div">
                <label>User Name</label>
                <label>Address</label>
              </div>

              <div className="input">
                <div>
                  <input
                    required
                    type="text"
                    id="fname"
                    className="uname"
                    placeholder="First Name"
                  />
                  <input
                    required
                    type="text"
                    id="lname"
                    className="uname"
                    placeholder="Last Name"
                  />
                </div>

                <div>
                  <input
                    required
                    type="text"
                    id="address"
                    className="address"
                    placeholder="Billing Address"
                  />
                </div>
              </div>

              <label>Country</label>
              <input
                required
                type="text"
                id="country"
                className="country"
                placeholder="Country"
              />
              <label>Region/State</label>
              <input
                required
                type="text"
                id="region"
                className="region"
                placeholder="Region"
              />
              <label>City</label>
              <input
                required
                type="text"
                id="region"
                className="region"
                placeholder="Region"
              />
              <label>Zip Code</label>
              <input
                required
                type="text"
                id="zipCode"
                className="zipcode"
                placeholder="Zip Code"
              />
              <label>Email</label>
              <input
                required
                type="email"
                id="email"
                className="email"
                placeholder="Email"
              />
              <label>Phone</label>
              <input
                required
                type="text"
                id="phone"
                className="phone"
                placeholder="Phone"
              />
            </form>
          </div>
          <div className="payment-option-section">
            <h3>Payment Option</h3>
            <div className="payment-multi-option">
              <form>
                <div className="payment-option">
                  <span>
                    <BsCurrencyDollar />
                  </span>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      autoComplete="off"
                    />
                    Cash on Delivery
                  </label>
                </div>

                <div className="payment-option">
                  <span>
                    <BiLogoVenmo />
                  </span>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="venmo"
                      autoComplete="off"
                    />
                    Venmo
                  </label>
                </div>

                <div className="payment-option">
                  <span>
                    <FaPaypal />
                  </span>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      autoComplete="off"
                    />
                    PayPal
                  </label>
                </div>

                <div className="payment-option">
                  <span>
                    <FaCcAmazonPay />
                  </span>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="amazon"
                      autoComplete="off"
                    />
                    Amazon Pay
                  </label>
                </div>

                <div className="payment-option">
                  <span>
                    <BsFillCreditCard2FrontFill />
                  </span>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      autoComplete="off"
                    />
                    Debit/Credit Card
                  </label>
                </div>
                <label>Name on Card</label>
                <input
                  required
                  type="text"
                  id="nameCard"
                  className="nameOfCard"
                  placeholder="Name on Card"
                />
                <label>Card Number</label>
                <input
                  required
                  type="text"
                  id="cardNumber"
                  className="cardNumber"
                  placeholder="Card Number"
                />
                <label>Expire Date</label>
                <input
                  required
                  type="date"
                  id="cardNumber"
                  className="cardNumber"
                  placeholder="Card Number"
                />
              </form>
            </div>
          </div>
          <div className="additionalInfo">
            <h3>Additional Information</h3>
            <p>Order Notes</p>
            <input
              type="text"
              name="notes"
              className="notes"
              id="notes"
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          </div>
        </div>
        <div className="payment-total">
          <h3>Order Summery</h3>
          <div className="user_order">
            <div className="order_info">
              <div className="order-image">
                {" "}
                <img src="" alt="" />
              </div>
              <div className="order-text">
                <div className="order-text"></div>
                <div className="order-price"></div>
              </div>
            </div>
          </div>
          <div className="order-bill">
            <div className="payment-price">
              <p>
                Sub-total
                <span>$</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Sub-total
                <span>$</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Sub-total
                <span>$</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Sub-total
                <span>$</span>
              </p>
            </div>
          </div>
          <div className="payment-price">
            <p>
              Sub-total
              <span>$</span>
            </p>
            <a href="/thank-you">
              <button>Place Ordder </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCheckOut;
