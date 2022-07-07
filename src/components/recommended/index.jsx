import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import productImg from "../../assets/img/flash products.webp";
import fruit from "../../assets/img/fruit.webp";
import { Info, Product } from "./style";
import { carousel2 as products } from "../../mock.js";

function Recommended() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setActiveSlideIndex(
            activeSlideIndex - 2 <= 0 ? 0 : activeSlideIndex - 2
          );
        }}
      >
        Backward
      </button>
      <button
        onClick={() => {
          setActiveSlideIndex(
            activeSlideIndex + 2 >= products.length - 5
              ? products.length - 5
              : activeSlideIndex + 2
          );
        }}
      >
        Forward
      </button>

      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        speed={400}
        easing="linear"
        itemsToShow={5}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {products.map(
          ({ img, title, review, price, discount, sold, stock }, index) => (
            <Product>
              <img src={productImg} alt="" />
              <Info>
                <p className="title">{title}</p>
                <p>
                  {review.stars} {review.amount} Reviews
                </p>
                <p className="price">${price}</p>
                <div className="amount">
                  <p>sold:{sold}</p>
                  <p>available:{stock}</p>
                </div>
              </Info>
            </Product>
          )
        )}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Recommended;
