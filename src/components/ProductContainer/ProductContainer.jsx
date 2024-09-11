import "./ProductContainer.css";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductContainer = () => {
  return (
    <>
      <div className="right-container">
        <div className="product-card-main">
          <div className="product-card">
            <p className="lable-sold">SOLD OUT</p>
            {/* <p className="lable-hot">HOT</p>
            <p className="lable-discount">32% OFF</p>
            <p></p> */}
            <div className="image">
              <img src="./watch.png" alt="watch" />
            </div>
            <div className="star">
              <span>
                <Rating
                  emptySymbol={<AiOutlineStar size={15} color="#ffd700" />}
                  fullSymbol={<AiFillStar size={15} color="#ffd700" />}
                  initialRating={4.5}
                  readonly={true}
                />
              </span>
            </div>
            <div className="title">
              <p>Simple Mobile 4G LTE Prepaid Smartphone</p>
            </div>
            <div className="price">
              <p>$220</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
