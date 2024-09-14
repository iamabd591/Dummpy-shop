import React from "react";
import "./DynamicFreatureBanner.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const DynamicFreatureBanner = () => {
  return (
    <>
      <div className="freature-banner-main">
        <div className="freature-banner-left">
          <div className="left-info">
            <div className="left-banner-lable">
              <p>INTRODUCING</p>
            </div>
            <div className="left-banner-title">
              <h4>New Apple Homepod Mini</h4>
            </div>
            <div className="left-banner-description">
              <p>
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>
            </div>
            <div className="left-banner-button">
              <button>
                <p>
                  Show Now
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </p>
              </button>
            </div>
          </div>
          <div className="left-banner-image">
            <img src="./watch.png" alt="title" />
          </div>
        </div>

        <div className="freature-banner-right">
          <div className="right-info">
            <div className="right-banner-lable">
              <p>INTRODUCING</p>
            </div>
            <div className="right-banner-title">
              <h4>New Apple Homepod Mini</h4>
            </div>
            <div className="right-banner-description">
              <p>
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>
            </div>
            <div className="right-banner-button">
              <button>
                <p>
                  Show Now
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </p>
              </button>
            </div>
          </div>
          <div className="right-banner-image">
            <img src="./watch.png" alt="title" />
          </div>
          <div className="right-banner-image-price">
            <p>$200</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicFreatureBanner;
