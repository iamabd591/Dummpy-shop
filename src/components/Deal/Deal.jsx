import "./Deal.css";
import React from "react";
import SideProduct from "../SideProduct/SideProduct";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductContainer from "../ProductContainer/ProductContainer";

const Deal = () => {
  return (
    <>
      <div className="heading">
        <div>
          <h2>Best Deals</h2>
          <p>
            Deals ends in <span>00d:00h:00m:00s</span>
          </p>
        </div>
        <a href="#">
          Browse all product
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
