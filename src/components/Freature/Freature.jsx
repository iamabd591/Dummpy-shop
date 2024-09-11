import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Freature.css";

const Freature = () => {
  return (
    <div>
      <div className="freature-main">
        <div className="freature-left">
          <div className="left-text">
            <h4>The Best Place To Play</h4>
            <h2>Xbox Consoles</h2>
            <p>
              Save Up to 50% on select Xbox games.Get 3 months of PC game pass
              for $2 USD
            </p>
            <button>
              SHOP NOW
              <span>
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
          <div className="left-img">
            <img src="./watch.png" alt="watch" />
          </div>
          <div className="price">
            <span>$200</span>
          </div>
        </div>
        <div className="freature-right">
          <div className="freature-right-top">
            <div className="right-top-main">
              <div className="right-top-text">
                <h3>Summer Sales</h3>
                <h4>New Google Pixel 6 Pro</h4>
                <button>
                  SHOP NOW
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </button>
              </div>
              <div className="right-top-img">
                <img src="./watch.png" alt="watch" />

                <div className="disscount">
                  <span>25% OFF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="freatur-left-bottom">
            <div className="left-top-main">
              <div className="left-top-img">
                <img src="./watch.png" alt="watch" />
              </div>
              <div className="left-top-text">
                <h3>Xiaomi FlipBuds Pro</h3>
                <h4>$299 USD</h4>
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
