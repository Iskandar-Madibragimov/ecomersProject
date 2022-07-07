import styled from "styled-components";

export const Product = styled.div`
  width: 15vw;
  padding: 10px;
  /* border: black 1px solid; */

  img {
    padding: 1px;
    width: 15vw;
    margin: auto;
    left: 0;
  }
`;

export const Info = styled.div`
p{
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

  .price{
    color: #09432b;
    font-weight: 600;
    text-decoration: unset;
    font-size: 20px;
  }

  .amount{
    display: flex;
    justify-content: space-between;
  }
`;
