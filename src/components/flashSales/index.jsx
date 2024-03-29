import React, { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import productImg from "../../assets/img/flash products.webp";
import fruit from "../../assets/img/fruit.webp";
import {
  ActionIcon,
  ActionWrapper,
  ButtonWrapper,
  FlashWrapper,
  ImgWrapper,
  Info,
  Line,
  Product,
  Top,
} from "./style";
import { carousel2 as products } from "../../mock.js";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";
import search from "../../assets/icons/searchh.svg";
import layers from "../../assets/icons/layers.svg";
import heart from "../../assets/icons/heart.svg";
// import { Line, Top } from "../blog/style";

function FlashSales() {
  const [time, setTime] = useState();

  useEffect(() => {
    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    var x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime(days + ": " + hours + ": " + minutes + ": " + seconds + " ");
      if (distance < 0) {
        clearInterval(x);
        setTime("EXPIRED")
      }
    }, 1000);
  }, []);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <FlashWrapper>
      <Top>
        <h1>Flash Sale Today!</h1>
        <div className="timer">
          <p>ends in:</p>
          <p id="demo">
            {
              time
            }
          </p>
        </div>
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
                activeSlideIndex + 2 >= products.length - 5
                  ? products.length - 5
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
            userSelect: "text",
          },
        }}
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
              <ImgWrapper>
                <img src={img} alt="" />
                <ActionWrapper>
                  <ActionIcon className="action-icon icon1">
                    <img src={search} alt="" />
                  </ActionIcon>
                  <ActionIcon className="action-icon icon2">
                    <img src={layers} alt="" />
                  </ActionIcon>
                  <ActionIcon className="action-icon icon3">
                    <img src={heart} alt="" />
                  </ActionIcon>
                </ActionWrapper>
              </ImgWrapper>
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
              <ButtonWrapper className="button-wrapper">
                <button>Add to cart</button>
              </ButtonWrapper>
            </Product>
          )
        )}
      </ReactSimplyCarousel>
    </FlashWrapper>
  );
}

export default FlashSales;
