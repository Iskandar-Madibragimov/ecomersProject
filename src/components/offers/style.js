import styled from "styled-components";

export const OffersWrapper = styled.div`
  width: 90vw;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 50px 0;
`;

export const OffersCard = styled.div`
  position: relative;
  color: white;
  width: 28vw;

  p {
    position: absolute;
    font-size: 20px;
    left: 30px;
  }

  h2 {
    position: absolute;
    left: 30px;
    bottom: 100px;
    width: 180px;
  }

  .when {
    bottom: 190px;
    text-transform: uppercase;
    letter-spacing: 0px;
    font-size: 14px;
    color: #ffd800;
    font-weight: 500;
  }
  .buy {
    bottom: 40px;
    cursor: pointer;
  }

  img {
    :hover{
    }
}

  div {
    transition: 0.5s;
    position: absolute;
    width: 150px;
    height: 1px;
    background-color: white;
    left: 30px;
    bottom: 35px;
  }
`;
