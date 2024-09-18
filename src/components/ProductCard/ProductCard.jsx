import React from "react";
import useFetchData from "../FetchData";
import DynamicProductsCard from "../Dynamic/DynamicProductsCard/DynamicProductsCard";

const ProductCard = () => {
  const { products, fakeApiProducts } = useFetchData();
  return (
    <>
      <DynamicProductsCard
        products={products}
        fakeApiProducts={fakeApiProducts}
      />
    </>
  );
};

export default ProductCard;
