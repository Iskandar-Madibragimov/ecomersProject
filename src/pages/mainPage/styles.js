import styled from "styled-components";

export const MainPageWrapper = styled.div``;

export const Options = styled.div`
  
  position: ${({active}) => {
    return active ? "sticky" : "relative"
  }};
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin: 0 100px;
  margin: auto;
  padding: 15px;
  background-color: #fff !important;
  z-index: 1;

  ul {
    display: flex;
    transition: 0.5s;
    list-style-type: none;
    li {
      padding: 0 25px;
      text-transform: uppercase;
      font-weight: bold;

      a {
        color: #09432b;
        text-decoration: none;
        transition: 0.5s;

        :hover {
          color: #95ae00;
        }
      }
    }
  }

  .shipping {
    color: red;
  }
`;
