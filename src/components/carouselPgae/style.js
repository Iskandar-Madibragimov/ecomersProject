import styled from "styled-components";

export const CarouselWrapper = styled.div`
  height: 30vw;
  width: 100%;
  margin-bottom: 40px;

  /* background-color: red; */
`;

export const Card = styled.div`
  position: relative;
  align-items: center;
  text-align: center;

  h1,
  h2,
  p,
  button {
    position: absolute;
    left: 100px;
  }

  img{
    width:100%;
    height:100%;
  }

  h1 {
    top: 150px;
    font-size: 70px;
    color: white;
  }

  h2 {
    left: 200px;
    top: 80px;
    font-size: 40px;
    color: yellow;
  }

  p {
    top: 250px;
    left: 180px;
    color: #fff;
  }

  button {
    top: 310px;
    left: 220px;
    width: 195px;
    height: 50px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      background-color: #95ae00;
      color: white;
    }
  }
`;
