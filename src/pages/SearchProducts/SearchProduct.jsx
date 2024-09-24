import "./SearchProducts.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import UserSearchedProduct from "./UserSearchedProduct";

const SearchProduct = () => {
  return (
    <>
      <Header />
      <UserSearchedProduct />
      <Footer />
    </>
  );
};

export default SearchProduct;
