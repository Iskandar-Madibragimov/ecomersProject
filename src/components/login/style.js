import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const TabsWrapper = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
`;
export const Tab = styled.div`
  width: 50%;
  text-align: center;
  border-bottom: 3px solid ${({ active }) => (active ? "#09432b" : "#ebebeb")};
  color: ${({ active }) => (active ? "#09432b" : "#6b6b6b")};
  padding: 20px 0;
`;

export const LeaveLogin = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const LoginOpt = styled.div`
  background-color: #fff !important;
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 500px;
  height: fit-content;
  border: 1px solid #ddd;
  margin: auto;
  padding: 20px 30px;

  .or {
    text-align: center;
  }
  p {
    padding: 10px;
  }
  form {
    padding: 20px 0;
    p {
      color: #6b6b6b;
    }

    input {
      width: 420px;
      height: 50px;
      padding: 20px;
      border: 1px solid #ddd;
    }

    button {
      background-color: #09432b;
      border: none;
      color: white;
      transition: 0.5s;
      margin-top: 10px;

      :hover {
        background-color: #95ae00;
      }
    }
  }

  button {
    cursor: pointer;
    width: 420px;
    height: 50px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  /* input{
    height: 20px;
    width: 20px;
  } */


  #check{

    height: 20px;
    width: 20px;
  }
`;
export const New = styled.div`
  p {
    text-align: center;
  }
  button {
    border: 1px solid #09432b;
    color: #09432b;
    background-color: #fff;
    transition: 0.5s;

    :hover {
      background-color: #95ae00;
      border: 1px solid #95ae00;
      color: white;
    }
  }
`;
