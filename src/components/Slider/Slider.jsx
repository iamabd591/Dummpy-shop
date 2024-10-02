import "./Slider.css";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  return (
    <Fade>
      <div className="product-slider">
        {/* <div className="slider-card">
          <div className="slider-image">
            <img src="/Image1.png" alt="Computer" />
            <div className="slider-text">
              <p>Computer</p>
            </div>
          </div>
        </div> */}
        {/* <div className="slider-card">
          <div className="slider-image">
            <img src="/Image2.png" alt="Mobile" />
            <div className="slider-text">
              <p>Mobile</p>
            </div>
          </div>
        </div>
        <div className="slider-card">
          <div className="slider-image">
            <img src="/Image3.png" alt="Headphones" />
            <div className="slider-text">
              <p>Headphones</p>
            </div>
          </div>
        </div>
        <div className="slider-card">
          <div className="slider-image">
            <img src="/Image4.png" alt="Accessories" />
            <div className="slider-text">
              <p>Accessories</p>
            </div>
          </div>
        </div>
        <div className="slider-card">
          <div className="slider-image">
            <img src="/Image5.png" alt="Camera & Photos" />
            <div className="slider-text">
              <p>Camera & Photos</p>
            </div>
          </div>
        </div>
        <div className="slider-card">
          <div className="slider-image">
            <img src="/Image6.png" alt="Tv & Home" />
            <div className="slider-text">
              <p>Tv & Home</p>
            </div>
          </div>
        </div> */}
      </div>
    </Fade>
  );
};

export default Slider;
