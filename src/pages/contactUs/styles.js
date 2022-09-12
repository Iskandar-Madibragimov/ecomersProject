import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100vw;
  /* height: 105vh; */
  display: flex;
`;

export const Map = styled.div`
  width: 50vw;
  background-color: green;
  /* height: 105vh; */
`;

export const Info = styled.div`
  padding-top: 70px;
  width: 50vw;
  /* height: 105vh; */

  form {
    padding-top: 30px;
    text-align: center;
    margin: auto;
    width: fit-content;

    p {
      text-align: left;
      margin-left: 70px;
      color: #09432b;
      font-size: 14px;
      font-weight: 600;
    }

    div {
      display: flex;
      width: 660px;
      margin: auto;
      justify-content: space-between;
      padding: 20px 0;

      input {
        width: 320px;
        height: 50px;
        padding: 20px;
        border: 1px solid #ddd;
        outline: none;
        border-radius: 2px;
      }
    }

    textarea {
      padding: 20px;
      width: 660px;
      height: 120px;
      border: 1px solid #ddd;
      outline: none;
      border-radius: 2px;
    }

    button {
      margin-top: 20px;
      width: 660px;
      height: 50px;
      background-color: #09432b;
      color: white;
      transition: 0.5s;
      border: none;
      cursor: pointer;

      :hover {
        background-color: #95ae00;
      }
    }
  }
`;

export const Location = styled.div`
  width: 660px;
  margin: auto;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;

  .right-div{
    margin-left: 60px;
  }

  div {
    width: 40%;

    .place {
      font-size: 14px;
      text-transform: uppercase;
      color: #09432b;
      font-weight: 600;
    }

    .address {
        line-height: 25px;
      font-size: 16px;
      color: #222;
    }

    .time {
      color: #57575c;
    }

    p {
      padding: 15px 0;
    }
  }
`;
