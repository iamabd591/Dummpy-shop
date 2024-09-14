import React from "react";
import useFetchData from "../FetchData";
import DynamicFreatureBanner from "../Dynamic/DynamicFreatureBanner/DynamicFreatureBanner";
const Banner = () => {
  const { products, fakeApiProducts } = useFetchData();
  //   console.log(products);
  //   console.log(fakeApiProducts);
  return (
    <>
      <DynamicFreatureBanner
        products={products}
        fakeApiProducts={fakeApiProducts}
      />
    </>
  );
};

export default Banner;
