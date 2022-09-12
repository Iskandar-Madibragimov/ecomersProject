import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: block;
  width: 90vw;
  margin: auto;
  /* border: 1px solid lightgray; */
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  border-bottom: 1px solid lightgray;
  /* border: 1px solid black; */

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding: 0 15px;
    }
  }
`;

export const Middle = styled.div`
  display: flex;
  width: 90vw;
  margin: auto;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  img {
    width: 90px;
    height: 21px;
    margin: auto 0;
  }
`;
export const Search = styled.div`
  display: flex;
  border: 1px solid lightgray;

  select,
  input {
    height: 45px;
    border: none !important;
  }


  input {
    width: 350px;
    padding: 0 10px;
    outline: none;
  }

  select {
    border-right: 1px solid lightgray;
    padding: 0 10px;
    color: #09432b;
    outline: none;
    border: none !important;
  }

  button {
    border: none;
    width: 50px !important;
    background-color: #95ae00;
    cursor: pointer;

    img {
      transform: translateX(-18px);
    }
  }
`;

export const Options = styled.div`
  display: flex;
  width: fit-content;
`;

export const Option = styled.div`
  color: #09432b;
  display: flex;
  /* margin: 0 10px; */
  width: fit-content;
  transform: translateX(-40px);
  cursor: pointer;


  .img {
    transform: translateX(20px);
  }

  img {
    transform: translateY(10px);
  }
`;

export const Bottom = styled.div`
  ul {
    list-style-type: none;
    display: flex;

    li {
    }
  }
`;
