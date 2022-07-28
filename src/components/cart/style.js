import styled from "styled-components";

export const BackGround = styled.div`
background-color: rgba(0, 0, 0, 0.5);
  width: calc(100vw - 467px);
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
`

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 450px;
  background-color: white !important;
  z-index: 100;
  button{
    cursor: pointer;

  }
`;

export const RightSide = styled.div`
  z-index: 1005 !important;

`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  color: white;
  background-color: #09432b;
  cursor: pointer;
  z-index: 1004 !important;
`;

export const InsideCart = styled.div`
  background-color: #fff;
  height: 430px;
  text-align: center;
  /* padding: 0 100px; */

  svg {
    width: 140px;
    height: 142px;
    margin-top: 20px;
    margin-bottom: 5px;
    color: lightgray;
  }

  p {
    margin: 5px;
  }

  button {
    margin-top: 20px;
    width: 250px;
    height: 50px;
    background-color: #09432b;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transition: 0.5s;
    border: none;

    :hover {
      background-color: #95ae00;
    }
  }
`;

export const Total = styled.div`
  height: 210px;
  background-color: #fff;
  text-align: center;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
`;

export const Buttons = styled.div`
  button {
    height: 50px;
    width: 370px;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 600;
    transition: .5s;
    border: none;
    
    :hover{
        background-color: #95ae00;
        color: white;
    }
  }

  .view-cart {
    color: #09432b; 

  }
  .check-out{
    background-color: #09432b;
    color: white;
  }
`;

export const Deal = styled.div`
  height: 50px;
  position: fixed;
  background-color: #ff7200;
  width: 450px;
  bottom: 0;
  color: white;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;
