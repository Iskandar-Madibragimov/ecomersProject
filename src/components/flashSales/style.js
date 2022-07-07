import styled from "styled-components";

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

  p {
    color: white;
    background-color: red;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: -28px;
    padding: 10px 0;
    padding-left: 8px;
    border-radius: 10px 0 0 10px;
  }

  #demo {
    background-color: red;
    border-radius: 0 10px 10px 0;
    padding-right: 8px;
    padding: 10px 0;
    color: white;
    /* bottom: 20px; */
  }

  h1 {
    color: #09432b;
    margin-top: 15px;
  }

  .buttons {
    width: 100px;
    margin-top: 15px;
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
  margin-top: 31px;
`;

export const Product = styled.div`
  width: 280px;
  padding: 10px;
  border: 10px solid transparent;

  img {
    padding: 1px;
    width: 100%;
    object-fit: cover;
    margin: auto;
    left: 0;
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
