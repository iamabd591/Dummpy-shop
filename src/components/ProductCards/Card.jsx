import "./Card.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

function Card() {
  const gradients = [
    "repeating-radial-gradient(ellipse farthest-corner at top left,#1b0087 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#870000 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#00876c 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#5c0087 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#004f87 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left, #108700 54%, #bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#e1e409 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#fb540c 54%,#bdbdbd 97%)",
    "background: repeating-radial-gradient(ellipse farthest-corner at top left,#ff0b85 54%,#bdbdbd 97%)",
  ];
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // console.log("Use Effect");
    dispatch(getProducts());
  }, [dispatch]);
  // console.log(products);

  return (
    <div className="cardMain">
      {products?.products?.map((item, ind) => (
        <div
          className="card"
          key={ind}
          style={{ background: gradients[ind % gradients.length] }}
        >
          <div className="price">
            <p>
              <span>$</span>
              {item.price}
            </p>
          </div>
          <div className="productImage">
            <Link to={`product_detail/${item.id}`}>
              <img src="./watch.png" alt={item.title} />
            </Link>
          </div>
          <div className="productInfo">
            <div className="basic">
              <div className="productName">
                <h3>{item.title}</h3>
              </div>
              <div className="productdes">
                <p>{item.description}</p>
              </div>
              <div className="ranking">
                <h4>
                  Rating:<span>{item.rating}</span>
                </h4>
              </div>
            </div>
            <div className="divider">
              <span></span>
            </div>
            <div className="other">
              <div className="other1 styleSame">
                <h4>Category</h4>
                <p>{item.category}</p>
              </div>
              <div className="other2 styleSame">
                <h4>Brand</h4>
                <p>{item.brand}</p>
              </div>
              <div className="other3 styleSame">
                <h4>SKU</h4>
                <p>{item.sku}</p>
              </div>
            </div>
          </div>
          <div className="btn">
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
