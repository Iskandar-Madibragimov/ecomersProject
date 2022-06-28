import React from 'react'
import { Bottom, Middle, NavbarWrapper, Option, Options, Search, Top } from './style'
import Logo from "../../assets/img/Ghostlogo.webp"
import { Routes, Route, Link } from 'react-router-dom'
import Home from "../../pages/home"
import Blog from "../../pages/blog"
import Shop from "../../pages/shop"
import Contact from "../../pages/contactUs"

function Navbar() {
  return (
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
          <input type="text" placeholder='Search for Products...' />
          <button>🔍</button>

        </Search>
          <Options>
            <Option>
              <p>login</p>
              <h3>My Account</h3>
            </Option>
            <Option>
              <p>login</p>
              <h3>My Account</h3>
            </Option>
            <Option>
              <p>login</p>
              <h3>My Account</h3>
            </Option>
          </Options>
      </Middle>
      <Bottom>
      {/* <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contactUs"}>Contact Us</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact-us' element={<Contact/>} />
      </Routes> */}
      </Bottom>
    </NavbarWrapper>
  )
}

export default Navbar