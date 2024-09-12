import React from "react";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Return from "../../components/Return/Return";
import Freature from "../../components/Freature/Freature";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <>
      <Header />
      <Freature />
      <Return />
      <Deal />
      <Slider />
    </>
  );
}

export default Home;
