import React from "react";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Return from "../../components/Return/Return";
import Banner from "../../components/Banner/Banner";
import Freature from "../../components/Freature/Freature";
import ProductCard from "../../components/ProductCard/ProductCard";
import FreatureProducts from "../../components/FreatureProducts/FreatureProducts";
import LongBanner from "../../components/LongBanner/LongBanner";

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
      <ProductCard />
      <LongBanner />
    </>
  );
}

export default Home;
