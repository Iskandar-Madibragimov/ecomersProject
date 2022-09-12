import styled from "styled-components";

export const LeftSide = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 9999999;
  overflow: auto;
  /* background-color: #fff; */
`;

export const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const FilterWrapper = styled.div`
  z-index: 9999999;
  background-color: lightgray;
  position: fixed;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  .price {
    margin-top: 60px;
    height: 200px;

    p {
      transition: 0.5s;
      padding: 10px 15px;
      cursor: pointer;
    }

    p:hover {
      color: red !important;
    }
  }

  .size {
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;

export const LeaveFilter = styled.div`
  cursor: pointer;
`;

export const Filters = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: #09432b;
  color: white;
  padding: 20px;
`;

export const Category = styled.div`
  h5 {
    padding: 20px 10px;
    font-size: 12px;
    color: #09432b;
  }
`;

export const CateList = styled.div`
  height: 315px;
  width: 100%;
  overflow: auto;

  label {
    color: black;
    :hover {
      color: red !important;
    }
  }
  ::-webkit-scrollbar {
    /* display: none; */
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: lightgray;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
  }

  label {
    padding: 12px 20px;
    transition: 0.5s;
    display: block;
  }

  label:hover {
    color: #95ae00;
  }
`;

export const Brands = styled.div`
  padding: 0 10px;
  margin-top: 50px;
  h5 {
    font-size: 12px;
    color: #09432b;
    text-transform: uppercase;
  }
  p {
    padding: 20px 0;
    color: #3e445a;
  }

  label {
    display: flex;
    padding: 10px 20px;
    margin-top: 10px;
  }
  input {
    margin-right: 10px;
  }
`;

export const Colors = styled.div`
  display: flex;
  padding: 10px;
  ${({ active }) => (active ? `border-bottom: 1px solid ${active}` : "")};

  .red {
    background-color: red;
  }
  .orange {
    background-color: orange;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
  .indigo {
    background-color: indigo;
  }
  .violet {
    background-color: violet;
  }
  .black {
    background-color: black;
  }
`;

export const Color = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  margin: 0 10px;
`;
