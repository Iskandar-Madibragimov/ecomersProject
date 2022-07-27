import styled, { keyframes } from "styled-components";


export const FilterIcon = styled.div`
  padding: 5px;

  svg{
    color: ${({active}) =>active? "black" : "lightgray"};
    cursor: pointer;
}
`



export const Product = styled.div`
  position: relative;
  width: 18vw;
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
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  margin: 0 5px;
  transform: translateY(40px);
  opacity: 0;
  img{
    /* width: 70%; */
    padding:10px;
    stroke: white;
    margin: auto;
  }

  :hover{
      background-color: #95ae00;
      /* stroke: white; */
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
    color: #09432b;
    font-weight: 600;
    text-decoration: unset;
    font-size: 20px;
  }

  .amount {
    display: flex;
    justify-content: space-between;
  }
`;
