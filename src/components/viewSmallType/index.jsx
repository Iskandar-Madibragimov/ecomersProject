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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/modules/getProducts/getProductsAction";
import { useEffect } from "react";
import {addToCart} from "../../utils/addToCart"
function Small({img, title, review, price, sold, stock, id}) {
  return (
    <Product>
      {/* <div>{title}</div> */}
      <ImgWrapper>
        <Link to={`/product/${id}`}>
          <img src={img} alt="" />
        </Link>

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
        <Link className="title" to={`/product/${id}`}>
          {title}
        </Link>
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
        <button onClick={() => {
          addToCart(id)
        }}>Add to cart</button>
      </ButtonWrapper>
    </Product>
  );
}

export default Small;
