import React from "react";
import {
  BackGround,
  Buttons,
  CartWrapper,
  Deal,
  DeleteWish,
  Img,
  Info,
  InsideCart,
  LeaveCart,
  Price,
  RightSide,
  Title,
  Total,
  Wish,
} from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";
import { ReactComponent as Frown } from "../../assets/icons/frown.svg";
import { carousel2 as carousel2 } from "../../mock.js";

function Cart({ setPopUp }) {
  let amount = 1;

  return (
    <CartWrapper>
      <BackGround />
      <RightSide>
        <Title>
          <p>Shopping Cart</p>
          <LeaveCart
            onClick={() => {
              setPopUp(false);
            }}
          >
            <X />
          </LeaveCart>
        </Title>
        <InsideCart>
          {carousel2.length === 0 && (
            <>
              <Frown />
              <p>Your Cart is empty</p>
              <button>Return to shop</button>
            </>
          )}

          {carousel2.map(({ img, title, price }) => (
            <Wish>
              <Img>
                <img src={img} alt="" />
              </Img>

              <Info>
                <div>
                  <p>{title}</p>
                  <DeleteWish>
                    <X />
                  </DeleteWish>
                </div>
                <div>
                  <p>1x</p>
                  <p className="price">${price}</p>
                  <div>
                    <p
                      onClick={() => {
                        return amount--;
                      }}
                    >
                      -
                    </p>
                    <p>{amount}</p>
                    <p>+</p>
                  </div>
                </div>
              </Info>
            </Wish>
          ))}
        </InsideCart>
        <Total>
          <Price>
            <p>total</p>
            <p>$0.00</p>
          </Price>
          <Buttons>
            <button className="view-cart">View Cart</button>
            <button className="check-out">Check Out</button>
          </Buttons>
        </Total>
        <Deal>
          <p>Spend $200.00 to Free Shipping</p>
        </Deal>
      </RightSide>
    </CartWrapper>
  );
}

export default Cart;
