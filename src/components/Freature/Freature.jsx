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
              Shop Now
              <span>
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
          <div className="left-img">
            <img src="./watch.png" alt="watch" />
          </div>
        </div>
        <div className="freature-right">
          <div className="freatur-right-top"></div>
          <div className="freatur-right-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Freature;
