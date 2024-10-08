import React from "react";
import App from "../pages/App";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import SignIn from "../pages/UserAuthenticate/SignIn/SignIn";
import SignUp from "../pages/UserAuthenticate/SignUp/SignUp";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SearchedProduct from "../pages/SearchProducts/SearchProduct";
import SendOTP from "../pages/UserAuthenticate/ForgotPassword/SendOTP/SendOTP";
import VerifyOTP from "../pages/UserAuthenticate/ForgotPassword/VerifyOTP/VerifyOTP";
import NewPassword from "../pages/UserAuthenticate/ForgotPassword/NewPassword/NewPassword";
import CheckOut from "../pages/CheckOut/CheckOut";

const CustomeRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/send-otp" element={<SendOTP />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<NewPassword />} />
          <Route path="search-results" element={<SearchedProduct />} />
          <Route
            path="/products/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route path="product-info/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomeRoutes;
