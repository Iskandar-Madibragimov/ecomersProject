import React from "react";
import {
  Bottom,
  Middle,
  NavbarWrapper,
  Option,
  Options,
  Search,
  Top,
} from "./style";
import Logo from "../../assets/img/Ghostlogo.webp";
import user from "../../assets/icons/user.svg";
import search from "../../assets/icons/search.svg";
import { useState } from "react";
import Login from "../login";
import WishList from "../wishList";

function Navbar() {
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [wishListPopUp, setwishListPopUp] = useState(false);
  const [cartPopUp, setCartPopUp] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <Top>
          <p>Welcome to Gosto Online Shopping Store !</p>
          <ul>
            <li>Need help call us: (+88) - 1990 - 6886</li>
            <li>About Us</li>
            <li>Order Tracking</li>
            <li>Contact Us</li>
            <li>FAQ's</li>
          </ul>
        </Top>
        <Middle>
          <img src={Logo} alt="" />
          <Search>
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
            <input type="text" placeholder="Search for Products..." />
            <button>
              <img src={search} alt="" />
            </button>
          </Search>
          <Options>
            <Option
              onClick={() => {
                setLoginPopUp(true);
              }}
            >
              <div className="img">
                <img src={user} alt="" />
              </div>
              <div>
                <p>login</p>
                <p className="color">My Account</p>
              </div>
            </Option>
            <Option
              onClick={() => {
                setwishListPopUp(true);
              }}
            >
              <div className="img">
                <img src={user} alt="" />
              </div>
              <div>
                <p>Favorite</p>
                <p className="color">My Wishlist</p>
              </div>
            </Option>
            <Option>
              <div className="img">
                <img src={user} alt="" />
              </div>
              <div>
                <p>Your Cart</p>
                <p className="color">$0.00</p>
              </div>
            </Option>
          </Options>
        </Middle>
      </NavbarWrapper>
      {loginPopUp && <Login setPopUp={setLoginPopUp} />}
      {wishListPopUp && <WishList setPopUp={setwishListPopUp} />}
    </>
  );
}

export default Navbar;
