import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <>
      <div className="newsletter-main">
        <div className="newsletter-heading">
          <h2>Subscribe to our newsletter</h2>
        </div>
        <div className="newsletter-para">
          <p>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
        </div>
        <div className="newsletter-email">
          <form>
            <input
              type="email"
              placeholder="Email Address"
              required
              autoComplete="off"
            />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="newsletter-brand">
          <img src="./brand.png" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
