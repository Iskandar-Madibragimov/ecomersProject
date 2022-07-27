import styled, { keyframes } from "styled-components";

export const FlashWrapper = styled.div`
  width: 90vw;
  margin: auto;
`;
export const Top = styled.div`
  display: flex;
  width: 90vw;
  margin: auto;
  justify-content: space-evenly;
  margin-bottom: 20px;
  align-items: center;

  .timer {
    display: flex;
    align-items: center;
    height: fit-content;
    padding: 10px 20px;
    color: white;
    background-color: red;
    border-radius: 50px;

    p {
    }

    #demo {
    }
  }

  h1 {
    color: #09432b;
  }

  .buttons {
    width: 100px;
    justify-content: space-between;
  }

  button {
    margin: 0 2px;
    border-radius: 50%;
    border: 1px solid #dde3e9;
    padding: 4px;
    cursor: pointer;
  }
`;
export const Line = styled.div`
  width: 800px;
  height: 1px;
  background-color: #dde3e9;
`;

export const Product = styled.div`
  position: relative;
  width: 280px;
  padding: 10px;
  border: 10px solid transparent;
  overflow: visible;

  :hover {
    .action-icon {
      transform: translateY(0px);
      opacity: 1;
    }
    .button-wrapper {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .icon1 {
    transition-delay: 0s;
  }
  .icon2 {
    transition-delay: 0.1s;
  }
  .icon3 {
    transition-delay: 0.2s;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  img {
    padding: 1px;
    width: 100%;
    object-fit: cover;
    margin: auto;
    left: 0;
  }
`;

export const ActionWrapper = styled.div`
  position: absolute;
  display: flex;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
`;

export const ActionIcon = styled.div`
  cursor: pointer;
  transition: 0.5s;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin: 0 5px;
  transform: translateY(40px);
  opacity: 0;
  img {
    /* width: 70%; */
    padding: 10px;
    margin: auto;
    border-radius: 50%;
    transition: 0.5s;

    :hover {
      background-color: #95ae00;
      /* stroke: white; */
    }
  }
`;

export const ButtonWrapper = styled.div`
  transition: 0.5s;
  width: 100%;
  background-color: #fff;
  opacity: 0;
  /* position: absolute; */
  /* bottom: 0; */
  transform: translateY(-75px);
  padding: 20px;
  button {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: #95ae00;
    color: white;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  p {
    line-height: 28px;
  }
  .title {
    color: #0062bd;
    font-size: 18px;
    line-height: 20px;
    /* width: 100%; */
    /* display: flex; */
    font-weight: 500;
  }

  .price {
    color: #95ae00;
    font-weight: 600;
    text-decoration: unset;
    font-size: 20px;
    margin-right:10px
  }

  .amount {
    display: flex;
    /* justify-content: space-between; */

    p {
      font-weight: 400;
      text-decoration: unset;
      font-size: 23px;
      line-height: 30px;
    }
  }
`;
