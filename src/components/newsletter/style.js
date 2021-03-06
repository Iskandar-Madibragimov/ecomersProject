import styled from "styled-components";
import BackgroundImg from "../../assets/img/newsletter.webp";


export const NewsletterWrapper = styled.div`
  /* position: relative; */
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  .color,
  .font {
    color: #95ae00;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
  }

  
`;

export const NewsletterInfo = styled.div`
  /* position: absolute; */
  text-align: center;
  margin: auto;
  padding: 55px 0;
  /* bottom: 110px;
  left: 485px; */
  width: fit-content;

  p,
  h2,
  input,
  button {
    margin: 20px 0;
  }
`;

export const NewsActions = styled.div`
  input,
  button {
    height: 50px;
    border-radius: 20px;
    border: none;
    outline: none;
  }
  input {
    width: 625px;
    padding: 0 15px;
  }
  button {
    width: 140px;
    background-color: #95ae00;
    /* position: absolute; */
    /* right: 0px; */
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
  }
`;
