import styled, { keyframes } from "styled-components";

export const WrapWrapper = styled.div`

background-color: #f3f6f1;
`


export const Flex = styled.div`
  margin-top:40px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  width: 90vw;
  background-color: #fff;
  padding: 10px;
  border: 10px solid transparent;
  margin: 10px; 
  /* overflow: visible; */
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
export const Icons = styled.div`
  display: flex;
  /* background-color: red; */
  height: 40px;
  margin: auto;
  margin-top:70px;
  
`;

export const ActionWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 120px;
  
  
`;

export const ActionIcon = styled.div`
  background-color: white;
  width:40px;
  height:40px;
  padding:7px;
  border: 1px solid lightgray;
  transition:.5s;
  margin-left:15px;
  cursor: pointer;

  :hover{
    background-color: #95ae00;
  }
`;

export const ButtonWrapper = styled.div`
  /* transition: 0.5s; */
  /* width: 100%; */
  height: fit-content;
  /* margin-top: 50px; */
  background-color: green !important;
  /* opacity: 0; */
  /* position: absolute; */
  /* bottom: 0; */
  /* transform: translateY(75px); */
  /* padding: 20px;  */
  button {
    width: 200px;
    height: 40px;
    padding: 10px;
    /* border-radius: 20px; */
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
