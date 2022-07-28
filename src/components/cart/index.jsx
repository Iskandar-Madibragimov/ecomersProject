import React from "react";
import {
  BackGround,
  Buttons,
  CartWrapper,
  Deal,
  InsideCart,
  Price,
  RightSide,
  Title,
  Total,
} from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";
import { ReactComponent as Frown } from "../../assets/icons/frown.svg";

function Cart() {
  return (
    <CartWrapper>
        <BackGround />
      <RightSide>
        <Title>
          <p>Shopping Cart</p>
          <X />
        </Title>
        <InsideCart>
          <Frown />
          <p>Your Cart is empty</p>
          <button>Return to shop</button>
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
