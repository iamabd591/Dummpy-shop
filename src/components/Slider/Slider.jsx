import React, { useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="product-slider">
      {/* 
        <Fade>
        </Fade> */}
      <div className="slider-card">
        <div className="slider-image">
          <img src="./Image1.png" alt="title" />
          <div className="slider-text">
            <p>Compuuter</p>
          </div>
        </div>
      </div>
      <div className="slider-card">
        <div className="slider-image">
          <img src="./Image1.png" alt="title" />
          <div className="slider-text">
            <p>Compuuter</p>
          </div>
        </div>
      </div>
      <div className="slider-card">
        <div className="slider-image">
          <img src="./Image1.png" alt="title" />
          <div className="slider-text">
            <p>Compuuter</p>
          </div>
        </div>
      </div>
      <div className="slider-card">
        <div className="slider-image">
          <img src="./Image1.png" alt="title" />
          <div className="slider-text">
            <p>Compuuter</p>
          </div>
        </div>
      </div>
      <div className="slider-card">
        <div className="slider-image">
          <img src="./Image1.png" alt="title" />
          <div className="slider-text">
            <p>Compuuter</p>
          </div>
        </div>
      </div>
      <div className="slider-card">
        <div className="slider-image">
          <img src="./Image1.png" alt="title" />
          <div className="slider-text">
            <p>Compuuter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
