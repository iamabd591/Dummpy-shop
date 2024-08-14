import "./ProductDetails.css";
import Rating from "react-rating";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { getProductsById } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const ProdcutById = useSelector((state) => state.productById);

  const handleRating = (rating) => {
    setRating(rating);
  };

  useEffect(() => {
    if (!id) {
      console.log("Product id is not found");
    }
    dispatch(getProductsById(id));
  }, [dispatch, id]);
  console.log(ProdcutById);
  return (
    <>
      <div className="main">
        <div className="image">
          <img src="../watch.png" alt="alt" />
        </div>
        <div className="details">
          <div>
            <h2>{ProdcutById.title}</h2>
          </div>
          <div className="description">
            <h3>{ProdcutById.description}</h3>
            <p></p>
          </div>

          <div className="price">
            <div>
              <h2>Price:</h2>
            </div>
            <div>
              <span>{ProdcutById.price}</span>
            </div>
            {/* <div> <span>{ProdcutById.discountPercentage}</span></div> */}
          </div>

          <div className="rating">
            <div>
              {" "}
              <h2>Rating:</h2>
            </div>
            <div>
              {" "}
              <Rating
                emptySymbol={<AiOutlineStar size={30} color="#ffd700" />}
                fullSymbol={<AiFillStar size={30} color="#ffd700" />}
                initialRating={ProdcutById.rating}
                onChange={handleRating}
              />
              <span></span>
            </div>
          </div>

          <div className="proDetails">
            <div>
              <div>
                <h4>Catgory</h4>
              </div>
              <div>
                <span>{ProdcutById.category}</span>
              </div>
            </div>

            <div>
              <div>
                <h4>Brand</h4>
              </div>
              <div>
                {" "}
                <span>{ProdcutById.brand}</span>
              </div>
            </div>

            <div>
              <div>
                <h4>Stock</h4>
                <span>{ProdcutById.stock}</span>
              </div>
            </div>
          </div>
          <div className="btn">
            <button>Add To Cart</button>
            <button>Add To Wish List</button>
          </div>
          <div className="moreInfo">
            <h4>Warrenty</h4>
            <span>{ProdcutById.warrantyInformation}</span>
          </div>

          <div className="moreInfo">
            <h4>Shippment Time</h4>
            <span>{ProdcutById.shippingInformation}</span>
          </div>
          <div className="moreInfo">
            <h4>Product SKU</h4>
            <span>{ProdcutById.sku}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
