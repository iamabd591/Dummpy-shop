import React from "react";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Return from "../../components/Return/Return";
import Freature from "../../components/Freature/Freature";
import FreatureProducts from "../../components/FreatureProducts/FreatureProducts";
import DynamicFreatureBanner from "../../components/Dynamic/DynamicFreatureBanner/DynamicFreatureBanner";

function Home() {
  return (
    <>
      <Header />
      <Freature />
      <Return />
      <Deal />
      <Slider />
      <FreatureProducts />
      <DynamicFreatureBanner />
    </>
  );
}

export default Home;
