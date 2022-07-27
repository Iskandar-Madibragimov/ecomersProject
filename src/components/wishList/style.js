import styled from "styled-components";

export const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: calc(100vw - 439px);
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
`;
export const Card = styled.div`
  z-index: 1001 !important;
  background-color: #fff !important;

`
export const LeaveWishList = styled.div`

`

export const WishListWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 422px;
  background-color: white !important;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;

`;

export const Title = styled.div`
  z-index: 1001;
  background-color: #09432b !important;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  h3,
  svg {
    color: white;
    cursor: pointer;
  }
  h3{
    font-weight: 400;
    font-size: 18px;
  }
`;

export const List = styled.div`
  z-index: 1001;

  /* background-color: #fff; */
  width: fit-content;
  margin: auto;
  margin-top: 70px;
  p {
    color: #6b6b6b;
  }
`;
