import React, { useEffect } from "react";
import Rating from "react-rating";

import { useLocation } from "react-router-dom";
import { getSearchProduct } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const UserSearchedProduct = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const searchTerm = query?.get("query");
  const searchProduct = useSelector((state) => state?.SearchProducts?.products);
  console.log(searchTerm);

  useEffect(() => {
    dispatch(getSearchProduct(searchTerm));
  }, [dispatch]);

  console.log(searchProduct);
  return (
    <>
      <h1 className="query-product-heading">
        Search Results for: {searchTerm}
      </h1>
      <div className="query-product-main">
        {searchProduct?.length > 0 ? (
          searchProduct?.map((item, ind) => (
            <div className="query-results-card" key={ind}>
              <div className="image">
                <img src={item?.thumbnail} alt={item?.title} />
              </div>

              <div className="query-product-result">
                <div className="title">
                  <h2>{item?.title}</h2>
                </div>
                <div className="description">
                  <p>{item?.description}</p>
                </div>

                <div className="query-product-other-details">
                  <div className="star">
                    <h6>Rating</h6>
                    <span>
                      <Rating
                        emptySymbol={
                          <AiOutlineStar size={18} color="#ff9d00" />
                        }
                        fullSymbol={<AiFillStar size={18} color="#ff9100" />}
                        initialRating={item?.rating}
                        readonly={true}
                      />
                    </span>
                  </div>
                  <div className="price">
                    <h6>Price</h6>
                    <p>${item?.price}</p>
                    <span>
                      {item?.discountPercentage ? (
                        `$${(
                          item?.price -
                          item?.price * (item?.discountPercentage / 100)
                        ).toFixed(2)}`
                      ) : (
                        <p>No discount available</p>
                      )}
                    </span>
                  </div>
                </div>
                <div className="query-product-button">
                  <button>See Details </button>
                  <button>Add to Cart </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-searchProduct-main">
            <img src="/no-product-found.png" alt="No products found" />
          </div>
        )}
      </div>
    </>
  );
};

export default UserSearchedProduct;
