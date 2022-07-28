import styled from "styled-components";

export const LeftSide = styled.div`
`

export const BackGround = styled.div`
background-color: rgba(0, 0, 0, 0.5);
  width: calc(100vw - 316px);
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
`


export const FilterWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  overflow: auto;

  .price {
    margin-top: 60px;
    height: 200px;

    p{
        transition: .5s;
    }

    p:hover {
      color: red;
    }
  }

  .size{
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;

export const LeaveFilter = styled.div``;

export const Filters = styled.div`
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
  ::-webkit-scrollbar{
    /* display: none; */
    width: 5px;
  }
  ::-webkit-scrollbar-track{
    background-color: lightgray;
  }
  ::-webkit-scrollbar-thumb{
    background-color: black;
  }

  p {
    padding: 12px 20px;
    transition: 0.5s;
  }

  p:hover {
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
`;
