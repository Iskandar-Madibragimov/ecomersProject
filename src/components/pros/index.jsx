import React from "react";
import { Line, Pro, ProsContainer, ProsWrapper } from "./style";
import delivery from "../../assets/icons/truck.svg";

function Pros() {
  return (
    <ProsWrapper>
      <ProsContainer>
        <Pro>
          <img src={delivery} alt="" />
          <h5>FAST DELIVERY</h5>
          <p>For all orders over $120</p>
        </Pro>
        <Line></Line>
        <Pro>
          <img src={delivery} alt="" />
          <h5>SAFE PAYMENT</h5>
          <p>100% secure payment</p>
        </Pro>
        <Line></Line>
        <Pro>
          <img src={delivery} alt="" />
          <h5>60 DAYS RETURN</h5>
          <p>Return within 60 days</p>
        </Pro>
        <Line></Line>
        <Pro>
          <img src={delivery} alt="" />
          <h5>HELP CENTER</h5>
          <p>Dedicated 24/7 support</p>
        </Pro>
        <Line></Line>
        <Pro>
          <img src={delivery} alt="" />
          <h5>FRIENDLY SERVICES</h5>
          <p>Up to 12 months installments</p>
        </Pro>
      </ProsContainer>
    </ProsWrapper>
  );
}

export default Pros;
