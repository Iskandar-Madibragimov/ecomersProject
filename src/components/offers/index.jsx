import React from "react";
import { DealsCard, DealsWrapper, OffersCard, OffersWrapper } from "./style";
import offer from "../../assets/img/offer.webp";
import offer2 from "../../assets/img/offer2.webp";
import offer3 from "../../assets/img/offer3.webp";

function Offers() {
  return (
    <OffersWrapper>
      <OffersCard>
        <img src={offer} alt="" />
        <p className="when">NEW ARRIVALS</p>
        <h2 className="what">Big Sale Fresh Vegetables</h2>
        <p className="buy">Limited Time: Online Only!</p>
      </OffersCard>
      <OffersCard>
        <img src={offer2} alt="" />
        <p className="when">DISCOUNT 30%</p>
        <h2 className="what">Fried Chicken Restore Your Health</h2>
        <p className="buy">Top Quality Products</p>
      </OffersCard>
      <OffersCard>
        <img src={offer3} alt="" />
        <p className="when">BEST OFFER</p>
        <h2 className="what">Fastfood Up To 20% Off</h2>
        <p className="buy">Free Shipping 05km</p>
      </OffersCard>
    </OffersWrapper>
  );
}

export default Offers;
