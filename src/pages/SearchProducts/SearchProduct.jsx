import React from "react";
import "./SearchProducts.css";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchProduct = () => {
  const { query } = useQuery();
  return (
    <>
      {query ? (
        <>
          <Header />
          <Footer />
        </>
      ) : (
        <>
          <Header />

          <div className="no-searchProduct-main">
            <img src="/no-product-found.png" />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default SearchProduct;
