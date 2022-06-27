import React from 'react'
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import { Routes, Route, Link } from 'react-router-dom'
import Home from "../home"
import Blog from "../blog"
import Shop from "../shop"
import Contact from "../contactUs"

function MainPage() {
  return (
    <div>

      <ul>
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

    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact-us' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default MainPage