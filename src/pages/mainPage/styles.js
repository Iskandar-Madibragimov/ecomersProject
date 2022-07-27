import styled from "styled-components";

export const MainPageWrapper = styled.div``;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: auto;
  padding: 15px;

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
