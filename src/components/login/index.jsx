import React, { useState } from "react";
import {
  Wrapper,
  LoginOpt,
  New,
  Flex,
  BackGround,
  LeaveLogin,
  TabsWrapper,
  Tab,
} from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";
function Login({ setPopUp }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Wrapper>
      <BackGround />
      <LoginOpt>
        <LeaveLogin
          onClick={() => {
            setPopUp(false);
          }}
        >
          <X />
        </LeaveLogin>
        <TabsWrapper>
          <Tab onClick={() => setIsLogin(true)} active={isLogin}>
            Login
          </Tab>
          <Tab onClick={() => setIsLogin(false)} active={!isLogin}>
            Register
          </Tab>
        </TabsWrapper>

        {isLogin ? (
          <form>
            <p>Email</p>
            <input type="text" name="" id="" placeholder="Email" />
            <p>Password</p>
            <input type="text" name="" id="" placeholder="Password" />
            <Flex>
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">Remember me</label>
              <p>Forgot Your Password?</p>
            </Flex>
            <button>Login</button>
            <p className="or">or</p>
            <New>
              <button>Create New Account</button>
              <p>
                By providing your email address, you agree to our Privacy Policy
                and Terms of Service.
              </p>
            </New>
          </form>
        ) : (
          <form>
            <p>First Name</p>
            <input type="text" name="" id="" placeholder="First Name" />
            <p>Last Name</p>
            <input type="text" name="" id="" placeholder="Last Name" />
            <p>Email</p>
            <input type="text" name="" id="" placeholder="Email" />
            <p>Password</p>
            <input type="text" name="" id="" placeholder="Password" />
            <p>Confirm Password</p>
            <input type="text" name="" id="" placeholder="Confirm Password" />
            <button>Create New Account</button>
            <p className="or">or</p>
            <New>
              <button>Login</button>
              <p>
                By providing your email address, you agree to our Privacy Policy
                and Terms of Service.
              </p>
            </New>
          </form>
        )}
      </LoginOpt>
    </Wrapper>
  );
}

export default Login;
