import React from "react";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Return from "../../components/Return/Return";
import Banner from "../../components/Banner/Banner";
import Freature from "../../components/Freature/Freature";
import FreatureProducts from "../../components/FreatureProducts/FreatureProducts";

function Home() {
  return (
    <>
      <Header />
      <Freature />
      <Return />
      <Deal />
      <Slider />
      <FreatureProducts />
      <Banner />
    </>
  );
}

export default Home;
