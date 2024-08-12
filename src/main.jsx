import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
