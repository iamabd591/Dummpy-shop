import "./ProductContainer.css";
import Rating from "react-rating";
import { useEffect } from "react";
import { getProducts } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <div className="product-card-main">
        {data?.products?.map((item, ind) => (
          <div className="product-card" key={ind}>
            {item.availabilityStatus === "In Stock" ? (
              <p className="lable-sold">{item.availabilityStatus}</p>
            ) : (
              <p className="lable-hot">{item.availabilityStatus}</p>
            )}
            {/* <p className="lable-hot">HOT</p>*/}
            {item?.discountPercentage ? (
              <p className="lable-discount">{item.discountPercentage}% OFF</p>
            ) : (
              <p>Not discount available</p>
            )}
            <p></p>
            <center className="image">
              <img
                src={item.thumbnail}
                alt={item.title}
                height={"150px"}
                width={"150px"}
              />
            </center>
            <div className="star">
              <h6>Rating</h6>
              <span>
                <Rating
                  emptySymbol={<AiOutlineStar size={18} color="#ffd700" />}
                  fullSymbol={<AiFillStar size={18} color="#ffd700" />}
                  initialRating={item?.rating}
                  readonly={true}
                />
              </span>
              {/* <span>{countReviewsForProduct(item.reviews, item.id)}</span> */}
            </div>
            <div className="title">
              <p>{item?.title}</p>
            </div>
            <div className="price">
              <h6>Price</h6>
              <p>${item.price}</p>
              <span>
                {item && item.price && item.discountPercentage ? (
                  `$${(
                    item.price -
                    item.price * (item.discountPercentage / 100)
                  ).toFixed(2)}`
                ) : (
                  <p>No discount available</p>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
