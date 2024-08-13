import React from "react";
import { useEffect } from "react";
import { getProducts } from "../redux/action";
import Card from "../components/ProductCards/Card";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  useEffect(() => {
    console.log(product);
    dispatch(getProducts());
  }, []);
  return (
    <>
      <Card />
    </>
  );
}

export default Products;
