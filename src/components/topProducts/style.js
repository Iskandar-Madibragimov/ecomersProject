import styled from "styled-components";

export const ParentWrapper = styled.div`
  background-color: lightgray;
  padding: 70px 0;
`;

export const Text = styled.div`
  padding-top: 20px;
  width: calc( 100% - 163px);
`;

export const ButtonWrapper = styled.div`
  transition: 0.5s;
  width: 100%;
  background-color: #fff;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  padding: 20px;
  z-index: 2;
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

export const Icon = styled.div`
  position: relative;
  width: 163px;
  height: 163px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ActionWrapper = styled.div`
  position: absolute;
  background-color: transparent !important;
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
  width: 40px;
  height: 40px;
  /* background-color: white; */
  border-radius: 50%;
  margin: 0 5px;
  transform: translateY(40px);
  opacity: 0;
  svg{
    width: 100%;
    height: 100%;
    /* background-color: red; */
    padding: 10px;
    margin: auto;
    border-radius: 50%;
    transition: 0.5s;
    /* stroke: yellow; */


  }
  :hover {
    svg{

      background-color: #95ae00;
      stroke: white;
      /* fill: white; */
      /* padding:10px; */
    }
  }
  
`;

export const Parent = styled.div`
  display: grid;
  grid-gap: 20px;

  grid-template-areas:
    "item1 item1 item2"
    "item1 item1 item3"
    "item4 item5 item6";
  width: 90vw;
  margin: auto;
  height: fit-content;
  background-color: lightgray;

  div {
    /* border: 1px solid black; */
    background-color: #fff;
  }

  .div1 {
    grid-area: item1;
    display: flex;

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

    button {
      width: 70%;
      background-color: #95ae00;
      color: #fff;
      height: 40px;
      line-height: 40px;
      display: flex;
      border-radius: 40px;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      margin-top: 20px;
    }

    img {
      width: 300px;
      /* height: 100%; */
      /* background-color: red; */
      object-fit: cover;
    }
  }
  .other {
    position: relative;
    height: 163px;
    :hover {
      .action-icon {
        /* transform: translateY(0px); */
        opacity: 1;
      }
      .button-wrapper {
        /* transform: translateY(0);  */
        opacity: 1;
        bottom: -55px;
      }
    }

    .flex {
      display: flex;

      h3 {
        color: #95ae00;
      }
      del {
        margin-left: 10px;
        color: #888;
      }
    }
  }
  .div2 {
    grid-area: item2;
    display: flex;
    /* background-color: red; */
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

    h4 {
      color: #0062bd;
    }

    img {
      /* width: 40%; */
      object-fit: cover;
    }
  }
  .div3 {
    grid-area: item3;
    display: flex;
    /* background-color: red; */

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

    h4 {
      color: #0062bd;
    }

    img {
      position: relative;
      width: 40%;
      object-fit: cover;
    }
  }
  .div4 {
    grid-area: item4;
    display: flex;
    /* background-color: red; */
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

    h4 {
      color: #0062bd;
    }

    img {
      width: 40%;
      object-fit: cover;
    }
  }
  .div5 {
    grid-area: item5;
    display: flex;
    /* background-color: red; */
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
    h4 {
      color: #0062bd;
    }

    img {
      width: 40%;
      object-fit: cover;
    }
  }
  .div6 {
    grid-area: item6;
    display: flex;
    /* background-color: red; */
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
    h4 {
      color: #0062bd;
    }

    img {
      width: 40%;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 20px;

  h4 {
    color: #0062bd;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    display: flex;
    font-weight: 500;
  }

  p,
  del {
    font-weight: 500;
    text-decoration: unset;
    font-size: 18px;
    line-height: 30px;
  }
  p {
    color: #95ae00;
  }
  del {
    color: darkgray;
  }

  ul {
    /* list-style-type: none; */
    margin-left: 20px;

    li {
      line-height: 35px;
      color: #3e445a;
    }
  }
`;
