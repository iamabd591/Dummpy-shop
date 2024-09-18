import "./Product.css";
import React from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getProductsById } from "../../../redux/action";
import { IoStarSharp } from "react-icons/io5";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const Product = () => {
  const { id } = useParams();
  const productId = id.split("-")[0];
  console.log(productId);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const ProdcutById = useSelector((state) => state.productById);
  const loader = useSelector((state) => state.loader);

  const handleRating = (rating) => {
    setRating(rating);
  };

  useEffect(() => {
    if (!id) {
      console.log("Product is not found");
    }
    dispatch(getProductsById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    console.log(loader);
  }, [loader]);
  console.log(ProdcutById);
  return (
    <>
      <div className="product-details-main">
        <div className="prodcut-details-container">
          <div className="product-deatil-image-container">
            <div className="image-main">
              <img src={ProdcutById?.thumbnail} alt={ProdcutById?.title} />
            </div>
            <div className="image-secondary">
              <center>
                <span>
                  <FaCircleArrowLeft />
                </span>
                <img src={ProdcutById?.images} />
                <img src={ProdcutById?.images} />
                <img src={ProdcutById?.images} />
                <img src={ProdcutById?.images} />
                <img src={ProdcutById?.images} />
                <span>
                  <FaCircleArrowRight />
                </span>
              </center>
            </div>
          </div>
          <div className="product-info">
            <div className="product-rating">
              <span>
                <Rating
                  emptySymbol={<AiOutlineStar size={20} color="#FA8232" />}
                  fullSymbol={<AiFillStar size={20} color="#FA8232" />}
                  initialRating={ProdcutById?.rating}
                  onChange={handleRating}
                  readonly={true}
                  className="rating"
                />
              </span>
              <p>{ProdcutById?.rating} Star Rating</p>
            </div>
            <div className="product-title">
              <p>{ProdcutById?.title}</p>
            </div>
            <div className="product-other-details">
              <div className="brand">
                <p>
                  SKU:
                  <span>{ProdcutById?.sku}</span>
                </p>
                <p>
                  Brand: <span>{ProdcutById?.brand}</span>
                </p>
              </div>
              <div className="brand">
                <p>
                  Category: <span>{ProdcutById?.category}</span>
                </p>
                <p>
                  Availability Status:{" "}
                  <span>{ProdcutById?.availabilityStatus}</span>
                </p>
              </div>
            </div>
            <div className="product-price">
              <div className="discounted-price">
                <p>
                  {ProdcutById &&
                  ProdcutById?.price &&
                  ProdcutById?.discountPercentage ? (
                    `$${(
                      ProdcutById?.price -
                      ProdcutById?.price *
                        (ProdcutById?.discountPercentage / 100)
                    ).toFixed(2)}`
                  ) : (
                    <p>No discount available</p>
                  )}
                </p>
              </div>
              <div className="original-price">
                <p>${ProdcutById?.price}</p>
              </div>
              <div className="discount-percentage">
                <p>{ProdcutById?.discountPercentage} % OFF</p>
              </div>
            </div>
            <div className="product-details-shiping-info">
              <div className="stock">
                <p>
                  Available Stock: <span>{ProdcutById?.stock}</span>
                </p>
                <p>
                  Width: <span>{ProdcutById?.dimensions?.width}</span>
                </p>
                <p>
                  Height: <span>{ProdcutById?.dimensions?.height}</span>
                </p>
              </div>

              <div className="warranty-info">
                <p>
                  <span className="icon">
                    <IoStarSharp />
                  </span>{" "}
                  Warranty: <span>{ProdcutById?.warrantyInformation}</span>
                </p>
              </div>

              <div className="shippment">
                <p>
                  <span className="icon">
                    <IoStarSharp />
                  </span>
                  Shipping: <span>{ProdcutById?.shippingInformation}</span>
                </p>
                <p>
                  <span className="icon">
                    <IoStarSharp />
                  </span>
                  Return Policy: <span>{ProdcutById?.returnPolicy}</span>
                </p>
                <p>
                  <span className="icon">
                    <IoStarSharp />
                  </span>
                  Minimum Order Quantity:{" "}
                  <span>{ProdcutById?.minimumOrderQuantity}</span>
                </p>
              </div>
            </div>
            <div className="buttons">
              <div className="counterBtn">
                <button>
                  {" "}
                  <FiMinus />
                </button>
                <span>00</span>
                <button>
                  <GoPlus />
                </button>
              </div>
              <div className="cartBtn">
                <button>
                  Add To Cart{" "}
                  <span>
                    <MdShoppingCart />
                  </span>
                </button>
              </div>
              <div className="buyBtn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-description">
          <div className="product-detials-description-text">
            <h6>
              Description:
              <span>{ProdcutById?.description}</span>
            </h6>
          </div>
          <hr></hr>
          <div className="product-details-reviews">
            <div className="reviews">
              <h4>Customer Reviews</h4>
              {ProdcutById?.reviews?.map((review, index) => (
                <div key={index} className="review">
                  <h3>{review?.reviewerName}</h3>
                  <p>
                    <strong>Rating:</strong>
                    <Rating
                      className="reviewRating"
                      emptySymbol={<AiOutlineStar size={15} color="#FA8232" />}
                      fullSymbol={<AiFillStar size={15} color="#FA8232" />}
                      initialRating={review?.rating}
                      onChange={handleRating}
                      readonly={true}
                    />
                  </p>
                  <p>
                    <strong>Comment:</strong> {review.comment}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(review?.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
