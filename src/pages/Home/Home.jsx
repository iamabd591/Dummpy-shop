import React from "react";
import News from "../../components/News/News";
import Deal from "../../components/Deal/Deal";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Return from "../../components/Return/Return";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Catagory from "../../components/Catagory/Catagory";
import Freature from "../../components/Freature/Freature";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import LongBanner from "../../components/LongBanner/LongBanner";
import ProductCard from "../../components/ProductCard/ProductCard";
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
      <ProductCard />
      <LongBanner />
      <Catagory />
      <News />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
