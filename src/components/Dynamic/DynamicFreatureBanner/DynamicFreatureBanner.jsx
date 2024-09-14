import "./DynamicFreatureBanner.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const DynamicFreatureBanner = ({ products, fakeApiProducts }) => {
  // console.log(products);
  // console.log(fakeApiProducts);
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr?.length);
  };

  const randomProduct =
    products?.length > 0 ? products[getRandomIndex(products)] : null;
  const randomFakeApiProduct =
    fakeApiProducts?.length > 0
      ? fakeApiProducts[getRandomIndex(fakeApiProducts)]
      : null;

  // console.log(randomProduct);
  // console.log(randomFakeApiProduct);
  return (
    <>
      <div className="freature-banner-main">
        <div className="freature-banner-left">
          <div className="left-info">
            <div className="left-banner-lable">
              <p>INTRODUCING</p>
            </div>
            <div className="left-banner-title">
              <h4>{randomProduct ? randomProduct?.title : "Loading..."}</h4>
            </div>
            <div className="left-banner-description">
              <p>
                {randomProduct ? randomProduct?.description : "Loading..."}.
              </p>
            </div>
            <div className="left-banner-button">
              <button>
                <p>
                  Shop Now
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </p>
              </button>
            </div>
          </div>
          <div className="left-banner-image">
            <img
              src={randomProduct ? randomProduct?.thumbnail : "Loading..."}
              alt={randomProduct ? randomProduct?.title : "Loading..."}
            />
          </div>
        </div>

        <div className="freature-banner-right">
          <div className="right-info">
            <div className="right-banner-lable">
              <p>INTRODUCING</p>
            </div>
            <div className="right-banner-title">
              <h4>
                {randomFakeApiProduct
                  ? randomFakeApiProduct?.title?.length > 20
                    ? randomFakeApiProduct?.title?.slice(0, 20) + " "
                    : randomFakeApiProduct?.title
                  : "Loading..."}
              </h4>
            </div>
            <div className="right-banner-description">
              <p>
                {randomFakeApiProduct
                  ? randomFakeApiProduct?.description?.length > 90
                    ? randomFakeApiProduct?.description?.slice(0, 90) + " "
                    : randomFakeApiProduct?.description
                  : "Loading..."}
              </p>
            </div>
            <div className="right-banner-button">
              <button>
                <p>
                  Shop Now
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </p>
              </button>
            </div>
          </div>
          <div className="right-banner-image">
            <img
              src={
                randomFakeApiProduct
                  ? randomFakeApiProduct?.image
                  : "Loading..."
              }
              alt="title"
            />
          </div>
          <div className="right-banner-image-price">
            <p>
              ${randomFakeApiProduct ? randomFakeApiProduct?.price : "Loding.."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicFreatureBanner;
