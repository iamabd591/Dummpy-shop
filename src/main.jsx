import "./index.scss";
import React from "react";
import App from "./pages/App.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Products from "./routes/Products/Products.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ProductDetails/ProductDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index element={<Products />} />
            <Route path="/product_detail/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
