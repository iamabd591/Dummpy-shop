import "./Card.css";
import React from "react";
import { useSelector } from "react-redux";
function Card() {
  // const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  return (
    <>
      <div className="cardMain">
        {product.length > 0 (

        {product.map((item, ind) => (
          <div className="card" key={ind}>
            <div className="price">
              <p>
                <span>$</span>
                {item.price}
              </p>
            </div>
            <div className="productImage">
              <img src="./watch.png" alt="producImg" />
            </div>
            <div className="productInfo">
              <div className="basic">
                <div className="productName">
                  <h3>Product 1</h3>
                </div>
                <div className="productdes">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="ranking">
                  <h6>Ranking</h6>
                </div>
              </div>
              <div className="divider">
                <span></span>
              </div>
              <div className="other">
                <div className="other1 styleSame">
                  <h4>Category</h4>
                  <p>Beauty</p>
                </div>
                <div className="other2 styleSame">
                  <h4>Brand</h4>
                  <p>Essence</p>
                </div>
                <div className="other3 styleSame">
                  <h4>SKU</h4>
                  <p>RCH45Q1A</p>
                </div>
              </div>
            </div>
            <div className="btn">
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
        )}
      </div>
    </>
  );
}

export default Card;
