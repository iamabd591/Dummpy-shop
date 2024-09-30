import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProducts } from "../../redux/action";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.categoriesProducts);
  useEffect(() => {
    dispatch(getCategoriesProducts());
  }, []);

  console.log(data);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default CategoryPage;
