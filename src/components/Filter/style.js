import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  overflow: scroll;

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
  /* background-color: yellow; */
  overflow: scroll;

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
