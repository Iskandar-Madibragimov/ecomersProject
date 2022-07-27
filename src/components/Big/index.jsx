import React from "react";
// import React from "react";
// import ReactSimplyCarousel from "react-simply-carousel";
import productImg from "../../assets/img/flash products.webp";
// import fruit from "../../assets/img/fruit.webp";
import {
  ActionIcon,
  ActionWrapper,
  ButtonWrapper,
  //   FlashWrapper,
  ImgWrapper,
  Info,
  //   Line,
  Product,
  Wrapper,
  //   Top,
} from "./style";
import { carousel2 as products } from "../../mock.js";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";
import search from "../../assets/icons/searchh.svg";
import layers from "../../assets/icons/layers.svg";
import heart from "../../assets/icons/heart.svg";
function Big({ img, title, review, price, discount, sold, stock }) {
  return (
    
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
    
  );
}

export default Big;
