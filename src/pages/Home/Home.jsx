import React from "react";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Return from "../../components/Return/Return";
import Freature from "../../components/Freature/Freature";

function Home() {
  return (
    <>
      <Header />
      <Freature />
      <Return />
      <Deal />
    </>
  );
}

export default Home;
