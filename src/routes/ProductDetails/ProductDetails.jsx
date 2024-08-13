import React from "react";
import "./ProductDetails.css";
function ProductDetails() {
  return (
    <>
      <div className="main">
        <div className="image">
          <img src="../watch.png" alt="alt" />
        </div>
        <div className="details">
          <div>
            <h2>Title</h2>
          </div>
          <div>
            <h3>Description</h3>
            <p></p>
          </div>

          <div>
            <h2>Price</h2>
            <span></span>
            <span></span>
          </div>

          <div>
            <h2>Rating</h2>
            <span></span>
          </div>

          <div>
            <div>
              <h4>Catgory</h4>
              <span></span>
            </div>

            <div>
              <h4>Brand</h4>
              <span></span>
            </div>

            <div>
              <h4>Stock</h4>
              <span></span>
            </div>
          </div>
          <button>Add To Cart</button>
          <button>Add To Wish List</button>
          <div>
            <h4>Warrenty</h4>
            <span></span>
          </div>

          <div>
            <h4>Shippment Time</h4>
            <span></span>
          </div>
          <div>
            <h4>Product SKU</h4>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
