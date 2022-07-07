import React from "react";
import { DealsCard, DealsWrapper, Info } from "./style";
import DealImg from "../../assets/img/Deals.webp";
import DealImg2 from "../../assets/img/Deals2.webp";

function Deals() {
  return (
    <DealsWrapper>
      <DealsCard>
        <img src={DealImg} alt="" />
        <Info>
          <p className="when">DISCOUNT 30%</p>
          <h2 className="what">Fried Chicken Restore Your Health</h2>
          <p className="buy">Top Quality Products</p>
        </Info>
      </DealsCard>
      <DealsCard>
        <img src={DealImg2} alt="" />
        <Info>
          <p className="when">BEST OFFER</p>
          <h2 className="what">Fastfood Up To 20% Off</h2>
          <p className="buy">Free Shipping 05km</p>
        </Info>
      </DealsCard>
    </DealsWrapper>
  );
}

export default Deals;
