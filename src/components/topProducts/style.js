import styled from "styled-components";

export const ParentWrapper = styled.div`
  background-color: lightgray;
  padding: 70px 0;
`;

export const Text = styled.div`
  padding-top: 20px;
`


export const Parent = styled.div`
  display: grid;
  grid-gap: 20px;
  /* grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px; */

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

    button {
      width: 512px;
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
    height: 163px;

    .flex{
      display: flex;

      h3{
        color: #95ae00;
      }
      del{
        margin-left: 10px;
        color: #888;
      }
    }
  }
  .div2 {
    grid-area: item2;
    display: flex;
    /* background-color: red; */
    h4 {
      color: #0062bd;
    }

    img {
      width: 40%;
      object-fit: cover;
    }
  }
  .div3 {
    grid-area: item3;
    display: flex;
    /* background-color: red; */
    h4 {
      color: #0062bd;
    }

    img {
      width: 40%;
      object-fit: cover;
    }
  }
  .div4 {
    grid-area: item4;
    display: flex;
    /* background-color: red; */
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
