import React from "react";
import Deals from "../../components/deals";
import Newsletter from "../../components/newsletter";
import Offers from "../../components/offers";
import TopProducts from "../../components/topProducts";
import { HomePageWrapper } from "./style";

function Home() {
  return (
    <HomePageWrapper>
      <Offers />
      <TopProducts />
      <Deals />
      <Newsletter />
    </HomePageWrapper>
  );
}

export default Home;
