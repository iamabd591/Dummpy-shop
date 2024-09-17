import React from "react";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Return from "../../components/Return/Return";
import Banner from "../../components/Banner/Banner";
import Catagory from "../../components/Catagory/Catagory";
import Freature from "../../components/Freature/Freature";
import LongBanner from "../../components/LongBanner/LongBanner";
import ProductCard from "../../components/ProductCard/ProductCard";
import FreatureProducts from "../../components/FreatureProducts/FreatureProducts";
import News from "../../components/News/News";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

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
      <Catagory />
      <News />
      <NewsLetter />
    </>
  );
}

export default Home;
