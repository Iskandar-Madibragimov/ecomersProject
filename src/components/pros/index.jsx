import React from "react";
import { Line, Pro, ProsContainer, ProsWrapper } from "./style";
import { ReactComponent as Delivery } from "../../assets/icons/truck.svg";

function Pros() {
  const prosImg = [
    {
      img: <Delivery />,
      title: "FAST DELIVERY",
      desc: "For all orders over $120",
    },
    {
      img: <Delivery />,
      title: "SAFE PAYMENT",
      desc: "100% secure payment",
    },
    {
      img: <Delivery />,
      title: "60 DAYS RETURNS",
      desc: "Return within 60 days",
    },
    {
      img: <Delivery />,
      title: "HELP CENTER",
      desc: "Dedicated 24/7 support",
    },
    {
      img: <Delivery />,
      title: "FRIENDLY SERVICES",
      desc: "Up to 12 months installments",
    },
  ];

  return (
    <ProsWrapper>
      <ProsContainer>
        {prosImg.map(({ img, title, desc }, index) => (
          <>
            <Pro>
              {img}
              <h5>{title}</h5>
              <p>{desc}</p>
            </Pro>
            {index == prosImg.length - 1 ? "" : <Line />}
          </>
        ))}
      </ProsContainer>
    </ProsWrapper>
  );
}

export default Pros;
