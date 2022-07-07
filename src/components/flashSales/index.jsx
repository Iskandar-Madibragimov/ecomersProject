import React, { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import productImg from "../../assets/img/flash products.webp";
import fruit from "../../assets/img/fruit.webp";
import { FlashWrapper, Info, Line, Product, Top } from "./style";
import { carousel2 as products } from "../../mock.js";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";
// import { Line, Top } from "../blog/style";

function FlashSales() {
  useEffect(() => {

    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
    
    var x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = days + ": " + hours + ": "
      + minutes + ": " + seconds + " ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  },[])
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <FlashWrapper>
      <Top>
        <h1>Flash Sale Today!</h1>
        <p>ends in:</p>
        <p id="demo"></p>
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
          userSelect: "text"
        }
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
    </FlashWrapper>
  );
}

export default FlashSales;
