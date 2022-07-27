import React from "react";
import { BackGround, Card, LeaveWishList, List, Title, WishListWrapper } from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";

function WishList() {
  return (
    <WishListWrapper>
      <BackGround />
      <Card>
        <Title>
          <h3>WISHLIST</h3>
          <LeaveWishList>
            <X />
          </LeaveWishList>
        </Title>
        <List>
          <p>Wishlist is empty.</p>
        </List>
      </Card>
    </WishListWrapper>
  );
}

export default WishList;
