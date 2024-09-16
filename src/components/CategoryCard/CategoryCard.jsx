import "./CategoryCard.css";
const CategoryCard = ({ product }) => {
  if (!product) return null;

  return (
    <>
      {/* <div className="catagory-heading">
        <h2>Trending</h2>
      </div> */}
      <div className="catagory-card">
        <div className="catagory-card-image">
          <img
            src={product?.image || "Loading..."}
            alt={product?.title || "Loading"}
          />
        </div>
        <div className="catagory-card-text">
          <p className="title">
            {product?.title ? product?.title?.slice(0, 22) + "..." : "Loading"}
          </p>
          <p className="description">
            {product?.description
              ? product?.description?.slice(0, 22) + "..."
              : "Loading"}
          </p>
          <p className="price">
            ${product?.price ? product?.price : "Loading"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
