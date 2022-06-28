import React from "react";
import { DealsCard, DealsWrapper } from "./style";
import DealImg from "../../assets/img/Deals.webp";
import DealImg2 from "../../assets/img/Deals2.webp";

function Deals() {
  return (
    <DealsWrapper>
      <DealsCard>
        <img src={DealImg} alt="" />
        <p className="when">Weekend Discount</p>
        <h2 className="what">Freshest Orange Juices</h2>
        <p className="buy">Pre - Order Now</p>
        <div className="line"></div>
      </DealsCard>
      <DealsCard>
        <img src={DealImg2} alt="" />
        <p className="when">Super Food</p>
        <h2 className="what">Big Sale Vegan Protein</h2>
        <p className="buy">Pre - Order Now</p>
        <div className="line"></div>
      </DealsCard>
    </DealsWrapper>
  );
}

export default Deals;
