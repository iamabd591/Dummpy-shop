import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../pages/App";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const CustomeRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="product-info/:id" element={<ProductDetails />} />
          {/* <Route path="product-info/:id" element={<ProductDetails />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomeRoutes;
