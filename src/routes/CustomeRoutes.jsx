import React from "react";
import App from "../pages/App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/UserAuthenticate/SignUp/SignUp";
import SignIn from "../pages/UserAuthenticate/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SendOTP from "../pages/UserAuthenticate/ForgotPassword/SendOTP/SendOTP";
import VerifyOTP from "../pages/UserAuthenticate/ForgotPassword/VerifyOTP/VerifyOTP";
import NewPassword from "../pages/UserAuthenticate/ForgotPassword/NewPassword/NewPassword";

const CustomeRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="product-info/:id" element={<ProductDetails />} />
          <Route path="/forgot-password/send-otp" element={<SendOTP />} />
          <Route path="/forgot-password/verify-otp" element={<VerifyOTP />} />
          <Route
            path="/forgot-password/reset-password"
            element={<NewPassword />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomeRoutes;
