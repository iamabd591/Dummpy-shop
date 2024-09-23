import "./ProductContainer.css";
import Rating from "react-rating";
import { useEffect } from "react";
import { getProducts } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductContainer = () => {
  const data = useSelector((state) => state?.products?.products);
  const searchQuery = useSelector((state) => state?.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = searchQuery
    ? data?.filter((item) =>
        item?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      )
    : data;

  return (
    <div className="product-card-main">
      {filteredProducts?.length > 0 ? (
        filteredProducts.map((item, ind) => (
          <div className="product-card" key={ind}>
            {item?.availabilityStatus === "In Stock" ? (
              <p className="label-sold">{item?.availabilityStatus}</p>
            ) : (
              <p className="label-hot">{item?.availabilityStatus}</p>
            )}

            {item?.discountPercentage ? (
              <p className="label-discount">{item?.discountPercentage}% OFF</p>
            ) : (
              <p>No discount available</p>
            )}

            <center className="image">
              <a
                href={`/product-info/${item?.id}-${item?.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  height={"150px"}
                  width={"150px"}
                />
              </a>
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
            </div>

            <div className="title">
              <p>{item?.title}</p>
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
        ))
      ) : (
        <p>No Product is Available</p>
      )}
    </div>
  );
};

export default ProductContainer;
