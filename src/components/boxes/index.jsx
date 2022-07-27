import React from "react";
import { Box, BoxesWrapper } from "./style";
import boxes from "../../assets/img/boxes.webp";
import { boxes as products } from "../../mock.js";

function Boxes() {
  return (
    <BoxesWrapper>
      {products.map(({ img, text }) => (
        <Box>
          <img src={img} alt="" />
          <p>{text}</p>
        </Box>
      ))}
      {/* <Box>
            <img src="https://cdn.shopify.com/s/files/1/0593/9488/3760/files/6_5_180x.png?v=1637570482" alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box>
        <Box>
            <img src={boxes} alt="" />
            <p>Fresh Drinks</p>
        </Box> */}
    </BoxesWrapper>
  );
}

export default Boxes;
