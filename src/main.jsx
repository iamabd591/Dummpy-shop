import "./index.scss";
import React from "react";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import CustomeRoutes from "./routes/CustomeRoutes.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <CustomeRoutes />
    </Provider>
  </React.Fragment>
);
