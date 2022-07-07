import React from "react";
import { DealsCard, DealsWrapper, Info, OffersCard, OffersWrapper } from "./style";
import offer from "../../assets/img/offer.webp";
import offer2 from "../../assets/img/offer2.webp";
import offer3 from "../../assets/img/offer3.webp";

import { ReactComponent as Delivery } from "../../assets/icons/truck.svg";


function Offers() {
  return (
    <OffersWrapper>
      <OffersCard>
        <img src={offer} alt="" />
        <Info>
          <p className="when">NEW ARRIVALS</p>
          <h2 className="what">Big Sale Fresh Vegetables</h2>
          <p className="buy">Limited Time: Online Only!</p>
        </Info>
      </OffersCard>
      <OffersCard>
        <img src={offer2} alt="" />
        <Info>
          <p className="when">DISCOUNT 30%</p>
          <h2 className="what">Fried Chicken Restore Your Health</h2>
          <p className="buy">Top Quality Products</p>
        </Info>
      </OffersCard>
      <OffersCard>
        <img src={offer3} alt="" />
        <Info>
          <p className="when">BEST OFFER</p>
          <h2 className="what">Fastfood Up To 20% Off</h2>
          <p className="buy">Free Shipping 05km</p>
        </Info>
      </OffersCard>
    </OffersWrapper>
  );
}

export default Offers;
