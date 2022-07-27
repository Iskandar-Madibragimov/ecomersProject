import React from "react";
import { CartWrapper, Deal, InsideCart, Title, Total } from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";

function Cart() {
  return (
    <CartWrapper>
      <Title>
        <p>Shopping Cart</p>
        <X />
      </Title>
      <InsideCart></InsideCart>
      <Total></Total>
      <Deal></Deal>
    </CartWrapper>
  );
}

export default Cart;
