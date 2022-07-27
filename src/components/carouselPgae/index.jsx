import Carousel from "re-carousel";
import React from "react";
import { Card, CarouselWrapper } from "./style";

function CarouselPage() {
  return (
    <CarouselWrapper>
      <Carousel auto>
        <Card>
          <h2>Special Offer</h2>
          <h1>Fried Chicken</h1>
          <p>Now With special price -20%. Don't Miss!</p>
          <button>Disocver Now</button>
          <img
            src="https://cdn.shopify.com/s/files/1/0593/9488/3760/files/9_1_1728x.jpg?v=1639711063"
            alt=""
          />
        </Card>
        <Card>
          <h2>Nature Organic</h2>
          <h1>Weekend Deals</h1>
          <p>Now With special price -20%. Don't Miss!</p>
          <button>Disocver Now</button>
          <img
            src="https://cdn.shopify.com/s/files/1/0593/9488/3760/files/9_1_1728x.jpg?v=1639711063"
            alt=""
          />
        </Card>
      </Carousel>
    </CarouselWrapper>
  );
}

export default CarouselPage;
