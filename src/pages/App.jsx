import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Freature from "../components/Freature/Freature";

function App() {
  return (
    <>
      <Header />
      <Freature />
      <Outlet />
    </>
  );
}
export default App;
