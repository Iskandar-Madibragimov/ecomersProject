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
  padding: 50px 30px;
  z-index: 1;
  display: flex;
  overflow: hidden;
  border-radius: 20px;

  :hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    transition: 0.5s;
  }
`;

export const Info = styled.div`
  z-index: 2;
  p {
    font-size: 20px;
  }

  h2 {
    /* position: relative;
    z-index: 2; */
    /* left: 30px; */
    /* bottom: 100px; */
    width: 180px;
  }

  .when {
    /* bottom: 190px; */
    text-transform: uppercase;
    letter-spacing: 0px;
    font-size: 14px;
    color: #ffd800;
    font-weight: 500;
  }
  .buy {
    /* bottom: 40px; */
    cursor: pointer;
  }
`;
