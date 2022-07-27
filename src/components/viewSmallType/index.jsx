import React from "react";
import {
  ActionWrapper,
  FlashWrapper,
  ActionIcon,
  ButtonWrapper,
  ImgWrapper,
  Info,
  Product,
  Top,
  FilterIcon,
  Buttons,
} from "./style.js";
import productImg from "../../assets/img/flash products.webp";
import search from "../../assets/icons/searchh.svg";
import layers from "../../assets/icons/layers.svg";
import heart from "../../assets/icons/heart.svg";

function Small({ img, title, review, price, discount, sold, stock }) {
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

export default Small;
