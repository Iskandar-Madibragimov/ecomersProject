import React from 'react'
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import { Routes, Route, Link } from 'react-router-dom'
import Home from "../home"
import Blog from "../blog"
import Shop from "../shop"
import Contact from "../contactUs"
import { MainPageWrapper } from './styles'
import { DealsWrapper } from '../../components/deals/style'
import Deals from '../../components/deals'
import Newsletter from '../../components/newsletter'
import Offers from '../../components/offers'
import Pros from '../../components/pros'
import TopProducts from '../../components/topProducts'

function MainPage() {
  return (
    <MainPageWrapper>
    <Navbar />

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


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact-us' element={<Contact/>} />
      </Routes>
      <Pros />
      <Footer />
    </MainPageWrapper>
  )
}

export default MainPage