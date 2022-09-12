import styled from "styled-components";

export const Img = styled.div`
  width: 50vw;
  height: 100vh;
  /* background-color: red; */
  display: flex;

  img {
    border: 1px solid lightgray;
  }
`;

export const ProductInfo = styled.div`
  width: 50vw;
  height: 100vh;
  /* background-color: orange; */
  .left {
    /* margin-right:15px; */
  }
  .right {
    margin-left: 20px;
  }
`;

export const MiniImg = styled.div`
  display: block;
  width: 80px;

  margin-top: 50px;
  margin-left: 50px;

  img {
    width: 70px;
    height: 70px;
  }
`;

export const MainImg = styled.div`
  margin-top: 50px;
  /* margin-left: 50px; */
  align-items: center;
  position: relative;
  img {
    width: 620px;
    height: 620px;
  }

  .peppers {
  }

  .max {
    position: absolute;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 0px 5px lightgray;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
`;

export const InsideWrapper = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
`;
export const Title = styled.div`
  p {
    font-size: 30px;
    margin-top: 50px;
  }
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0;
`;

export const Bonus = styled.div`
  background-color: #ff7200;
  width: 700px;
  margin: 10px 0;

  p {
    color: white;
  }
`;

export const Info = styled.div`
  width: 700px;
  margin-bottom: 30px;

  p {
  }
`;

export const Stock = styled.div`
  margin: 20px 0;

  span {
    color: #95ae00;
  }
`;

export const Cart = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  margin: 30px 0;

  div {
    width: 150px;
    height: 50px;
    border: 1px solid lightgray;
    display: flex;

    p {
      padding: 18px;
      color: lightgray;
    }
  }

  button {
    width: 530px;
    height: 50px;
    background-color: #09432b;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      background-color: #95ae00;
    }
  }
`;

export const Buy = styled.div`
  div {
    display: flex;

    input {
      margin-right: 10px;
    }

    p {
      margin: 10px 0;
    }
  }

  button {
    width: 700px;
    height: 50px;
    background-color: #09432b;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    
    :disabled{
      background-color: lightgray;

      :hover{
        background-color: lightgray;
      }
    }

    :hover {
      background-color: #95ae00;
    }
  }
`;

export const Other = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  /* background-color: red; */
  p {
    align-items: left;
    width: 150px;
    padding:5px 0;
    /* background-color: #fff; */
    /* padding: 10px 15px; */
  }
  `;
export const OtherSM = styled.div`
  display: flex;

  .social{
    width:fit-content !important;
    /* background-color: #fff; */
    padding: 0;
  }
  .media{
    width: fit-content !important;
    /* background-color: #fff; */
    padding: 0;
    padding: 0 5px;
    p{
      width: 10px;
      height: 10px;
      /* padding: 10px; */
    }
  }

`;