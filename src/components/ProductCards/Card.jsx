import "./Card.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Card() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // console.log("Use Effect");
    dispatch(getProducts());
  }, [dispatch]);
  // console.log(products);

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="cardMain">
      {/* {products?.products?.map((item, ind) => (
        <div className="card" key={ind}>
          <div className="price">
            <p>
              <span>$</span>
              {item.price}
            </p>
          </div>
          <div className="productImage">
            <Link to={`product_detail/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
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
                  <span>
                    {" "}
                    <Rating
                      emptySymbol={<AiOutlineStar size={30} color="#ffd700" />}
                      fullSymbol={<AiFillStar size={30} color="#ffd700" />}
                      initialRating={item.rating}
                      onChange={handleRating}
                      readonly={true}
                    />
                  </span>
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
      ))} */}
    </div>
  );
}

export default Card;
