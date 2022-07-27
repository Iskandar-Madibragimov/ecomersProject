import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import productImg from "../../assets/img/flash products.webp";
import fruit from "../../assets/img/fruit.webp";
import { FlashWrapper, Info, Line, Product, Top } from "./style";
import { blog as products } from "../../mock.js";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

function Blog() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <FlashWrapper>
      <Top>
        <h1>From The Blog</h1>
        <Line></Line>
        <div className="buttons">
          <button
            onClick={() => {
              setActiveSlideIndex(
                activeSlideIndex - 2 <= 0 ? 0 : activeSlideIndex - 2
              );
            }}
          >
            <img src={left} alt="" />
          </button>
          <button
            onClick={() => {
              setActiveSlideIndex(
                activeSlideIndex + 2 >= products.length - 4
                  ? products.length - 4
                  : activeSlideIndex + 2
              );
            }}
          >
            <img src={right} alt="" />
          </button>
        </div>
      </Top>

      <ReactSimplyCarousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "text"
        }
      }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        speed={400}
        easing="linear"
        itemsToShow={4}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {products.map(({ img, title, about, desc, date }, index) => (
          <Product>
            <img src={img} alt="" />
            <Info>
              <h3 className="about">{about}</h3>
              <p className="title">{title}</p>
              <p className="desc">{desc}</p>
              <p className="date">Post Date {date}</p>
            </Info>
          </Product>
        ))}
      </ReactSimplyCarousel>
    </FlashWrapper>
  );
}

export default Blog;
