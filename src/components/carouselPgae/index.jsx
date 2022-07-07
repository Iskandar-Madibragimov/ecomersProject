import Carousel from "re-carousel";
import React from "react";
import { CarouselWrapper } from "./style";

function CarouselPage() {
  return (
    <CarouselWrapper>
      <Carousel auto>
        <div style={{ backgroundColor: "tomato", height: "100%" }}>
          
        </div>
        <div style={{ backgroundColor: "orange", height: "100%" }}>Frame 2</div>
      </Carousel>
    </CarouselWrapper>
  );
}

export default CarouselPage;
