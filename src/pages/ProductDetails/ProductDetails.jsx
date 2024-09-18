// import "./ProductDetails.css";
import Rating from "react-rating";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { getProductsById } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "../../components/Header/Header";
import Product from "./Product/Product";
import Catagory from "../../components/Catagory/Catagory";
import Footer from "../../components/Footer/Footer";

function ProductDetails() {
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
    dispatch(getProductsById(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(loader);
  }, [loader]);
  console.log(ProdcutById);
  return (
    <>
      <Header />
      <Product />
      <Catagory />
      <Footer />
      {/* <div className="main">
        <div className="image">
          <img src={ProdcutById?.thumbnail} alt="alt" />
        </div>
        <div className="details">
          <div>
            <h2>{ProdcutById?.title}</h2>
          </div>
          <div className="description">
            <h3>{ProdcutById?.description}</h3>
            <p></p>
          </div>

         <div className="price">
            <div>
              <h2>Price:</h2>
            </div>
            <div>
              <span>{ProdcutById?.price}</span>
            </div>
          </div> 

          // <div className="rating">
          //   <div>
          //     {" "}
          //     <h2>Rating:</h2>
          //   </div>
          //   <div>
          //     {" "}
          //     <span>
          //       <Rating
          //         emptySymbol={<AiOutlineStar size={30} color="#ffd700" />}
          //         fullSymbol={<AiFillStar size={30} color="#ffd700" />}
          //         initialRating={ProdcutById?.rating}
          //         onChange={handleRating}
          //         readonly={true}
          //       />
          //     </span>
          //   </div>
          // </div>

        //   <div className="proDetails">
        //     <div>
        //       <div>
        //         <h4>Catgory</h4>
        //       </div>
        //       <div>
        //         <span>{ProdcutById?.category}</span>
        //       </div>
        //     </div>

        //     <div>
        //       <div>
        //         <h4>Brand</h4>
        //       </div>
        //       <div>
        //         {" "}
        //         <span>{ProdcutById?.brand}</span>
        //       </div>
        //     </div>

        //     <div>
        //       <div>
        //         <h4>Stock</h4>
        //         <span>{ProdcutById?.stock}</span>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="btn">
        //     <button>Add To Cart</button>
        //     <button>Add To Wish List</button>
        //   </div>
        //   <div className="moreInfo">
        //     <h4>Warrenty</h4>
        //     <span>{ProdcutById?.warrantyInformation}</span>
        //   </div>

        //   <div className="moreInfo">
        //     <h4>Shippment Time</h4>
        //     <span>{ProdcutById?.shippingInformation}</span>
        //   </div>
        //   <div className="moreInfo">
        //     <h4>Product SKU</h4>
        //     <span>{ProdcutById?.sku}</span>
        //   </div>
        //   <div className="moreInfo">
        //     <h4>Return Policy</h4>
        //     <span>{ProdcutById?.returnPolicy}</span>
        //   </div>
        // </div>
      // </div>
      // <div className="reviews">
      //   <hr></hr>
      //   <h4>Reviews</h4>
      //   {ProdcutById?.reviews?.map((review, index) => (
      //     <div key={index} className="review">
      //       <h3>{review?.reviewerName}</h3>
      //       <p>
      //         <strong>Rating:</strong>
      //         <Rating
      //           className="reviewRating"
      //           emptySymbol={<AiOutlineStar size={30} color="#ffd700" />}
      //           fullSymbol={<AiFillStar size={30} color="#ffd700" />}
      //           initialRating={review?.rating}
      //           onChange={handleRating}
      //           readonly={true}
      //         />
      //       </p>
      //       <p>
      //         <strong>Comment:</strong> {review.comment}
      //       </p>
      //       <p>
      //         <strong>Date:</strong>{" "}
      //         {new Date(review?.date).toLocaleDateString()}
      //       </p>
      //     </div>
      //   ))}
      //</div>
          */}
    </>
  );
}

export default ProductDetails;
