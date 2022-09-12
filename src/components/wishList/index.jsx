import React from "react";
import {
  BackGround,
  Card,
  DeleteWish,
  Img,
  Info,
  LeaveWishList,
  List,
  Title,
  Wish,
  WishListWrapper,
} from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";
import Picture from "../../assets/img/peppers.webp";
import { carousel2 as carousel2 } from "../../mock.js";


function WishList({ setPopUp }) {
  return (
    <WishListWrapper>
      <BackGround />
      <Card>
        <Title>
          <h3>WISHLIST</h3>
          <LeaveWishList
            onClick={() => {
              setPopUp(false);
            }}
          >
            <X />
          </LeaveWishList>
        </Title>
        <List>
          {carousel2.map(({img,title,price}) => (
            <Wish>
              <Img>
                <img src={img} alt="" />
              </Img>
              <Info>
                <p>{title}</p>
                <p className="price">${price}</p>
              </Info>
              <DeleteWish>
                <X />
              </DeleteWish>
            </Wish>
          ))}
          {carousel2.length === 0 && 
            <p>Wishlist is empty.</p>}
        </List>
        {carousel2.length > 0 && 
          <button>
          View Wishlist
        </button>}
      </Card>
    </WishListWrapper>
  );
}

export default WishList;
