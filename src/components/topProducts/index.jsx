import React from "react";
import {
  ActionIcon,
  ActionWrapper,
  ButtonWrapper,
  Icon,
  Info,
  Parent,
  ParentWrapper,
  Text,
} from "./style";
import fruit from "../../assets/img/fruit.webp";
import blueberry from "../../assets/img/blueberry.webp";
import borccoli from "../../assets/img/borccoli.webp";
import candy from "../../assets/img/candy.webp";
import chicken from "../../assets/img/chicken.webp";
import peppers from "../../assets/img/peppers.webp";
import { ReactComponent as Search} from "../../assets/icons/searchh.svg";
import {ReactComponent as Layers} from "../../assets/icons/layers.svg";
import {ReactComponent as Heart} from "../../assets/icons/heart.svg";
// import {ReactComponent as Search} from ""

function TopProducts() {
  return (
    <ParentWrapper>
      <Parent class="parent">
        <div class="div1">
          <img src={fruit} alt="" />
          <ActionWrapper>
            <ActionIcon className="action-icon icon1">
              <Search />
            </ActionIcon>
            <ActionIcon className="action-icon icon2">
              <Layers />
            </ActionIcon>
            <ActionIcon className="action-icon icon3">
              <Heart />
            </ActionIcon>
          </ActionWrapper>
          <Info>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <p>
              $69.00 <del>$75.00</del>
            </p>
            <ul>
              <li>Chocolate Cream Covered Biscuit Sticks snack.</li>
              <li>
                The perfect harmony of creamy chocolate & crispy pretzel stick.
              </li>
              <li>
                A crunchy and delicious biscuit stick covered in a creamy
                frosting.
              </li>
              <li>
                Perfect for gifting, care packages, corporate gifts, birthdays.
              </li>
            </ul>
            <button>Add to cart</button>
          </Info>
        </div>
        <div class="div2 other">
          <Icon>
            <img src={chicken} alt="" />
            <ActionWrapper>
              <ActionIcon className="action-icon icon1">
              <Search />
              </ActionIcon>
              <ActionIcon className="action-icon icon2">
                <Layers/>
              </ActionIcon>
              <ActionIcon className="action-icon icon3">
                <Heart />
              </ActionIcon>
            </ActionWrapper>
          </Icon>
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
          <ButtonWrapper className="button-wrapper">
            <button>Add to cart</button>
          </ButtonWrapper>
        </div>
        <div class="div3 other">
          <Icon>
            <img src={blueberry} alt="" />
            <ActionWrapper>
              <ActionIcon className="action-icon icon1">
                <Search />
              </ActionIcon>
              <ActionIcon className="action-icon icon2">
                <Layers />
              </ActionIcon>
              <ActionIcon className="action-icon icon3">
                <Heart />
              </ActionIcon>
            </ActionWrapper>
          </Icon>
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
          <ButtonWrapper className="button-wrapper">
            <button>Add to cart</button>
          </ButtonWrapper>
        </div>
        <div class="div4 other">
          <Icon>
            <img src={borccoli} alt="" />
            <ActionWrapper>
              <ActionIcon className="action-icon icon1">
                <Search />
              </ActionIcon>
              <ActionIcon className="action-icon icon2">
                <Layers />
              </ActionIcon>
              <ActionIcon className="action-icon icon3">
                <Heart />
              </ActionIcon>
            </ActionWrapper>
          </Icon>
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
          <ButtonWrapper className="button-wrapper">
            <button>Add to cart</button>
          </ButtonWrapper>
        </div>
        <div class="div5 other">
          <Icon>
            <img src={candy} alt="" />
            <ActionWrapper>
              <ActionIcon className="action-icon icon1">
                <Search />
              </ActionIcon>
              <ActionIcon className="action-icon icon2">
                <Layers />
              </ActionIcon>
              <ActionIcon className="action-icon icon3">
                <Heart />
              </ActionIcon>
            </ActionWrapper>
          </Icon>
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
          <ButtonWrapper className="button-wrapper">
            <button>Add to cart</button>
          </ButtonWrapper>
        </div>
        <div class="div6 other">
          <Icon>
            <img src={peppers} alt="" />
            <ActionWrapper>
              <ActionIcon className="action-icon icon1">
                <Search />
              </ActionIcon>
              <ActionIcon className="action-icon icon2">
                <Layers />
              </ActionIcon>
              <ActionIcon className="action-icon icon3">
                <Heart />
              </ActionIcon>
            </ActionWrapper>
          </Icon>
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
          <ButtonWrapper className="button-wrapper">
            <button>Add to cart</button>
          </ButtonWrapper>
        </div>

        {/* {
          products.map(({img,title,review,price},index) => (
            <>
              {img}
          <Text>
            <h4>{title}</h4>
            <div className="flex">
              <h3>{price}</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
          <ButtonWrapper className="button-wrapper">
            <button>Add to cart</button>
          </ButtonWrapper>


            </>
          ))
        } */}
      </Parent>
    </ParentWrapper>
  );
}

export default TopProducts;
