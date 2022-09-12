import React from "react";
import Blog from "../../components/blog";
import Boxes from "../../components/boxes";
import CarouselPage from "../../components/carouselPgae";
import Deals from "../../components/deals";
import FlashSales from "../../components/flashSales";
import Login from "../../components/login";
import Newsletter from "../../components/newsletter";
import Offers from "../../components/offers";
import Recommended from "../../components/recommended";
import TopProducts from "../../components/topProducts";
import { HomePageWrapper } from "./style";

function Home() {
  return (
    <HomePageWrapper>
      <CarouselPage />
      <Boxes />
      <FlashSales />
      <Offers />
      <TopProducts />
      <Deals />
      <Recommended />
      <Newsletter />
      <Blog /> 
      
    </HomePageWrapper>
  );
}

export default Home;
