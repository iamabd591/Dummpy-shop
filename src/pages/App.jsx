import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Return from "../components/Return/Return";
import Header from "../components/Header/Header";
import Freature from "../components/Freature/Freature";
import Deal from "../components/Deal/Deal";

function App() {
  return (
    <>
      <Header />
      <Freature />
      <Return />
      <Deal />
      <Outlet />
    </>
  );
}
export default App;
