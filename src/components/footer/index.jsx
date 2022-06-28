import React from 'react'
import { About, App, Bottom, Category, Company, FooterWrapper, Help, HelpInfo, ImgWrapper, Support, Top } from './style'
import Headphones from "../../assets/icons/headphones.webp"
import PaymentCard from "../../assets/icons/payment.webp"
import download from "../../assets/img/download.webp"

function Footer() {
  return (
    <FooterWrapper>
      <Top>
        <About>
          <h4>About The Store</h4>
          <Help>
            <img src={Headphones} alt="" />
            <HelpInfo>
              <p>Got Question? Call us 24/7</p>
              <h2>+001 123 456 789</h2>
            </HelpInfo>
          </Help>
          <p>Walls Street 68, Mahattan, New York, USA</p>
          <p>Gosto@google.com</p>
          <p>Center Help For You</p>
        </About>
        <Company>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Affiliates</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </Company>
        <Category>
          <h4>Shop Categories</h4>
          <p>Decor</p>
          <p>Accessories</p>
          <p>Decor & Lighting</p>
          <p>Dining & Kitchen</p>
          <p>Outdoor & Gift</p>
        </Category>
        <Support>
          <h4>Support</h4>
          <p>Returns</p>
          <p>F.A.Q.</p>
          <p>Privacy</p>
          <p>Shipping</p>
          <p>Payment Options</p>
        </Support>
        <App>
          <h4>Download App</h4>
          <p>Gosto App is now available on App Store &</p>
          <p>Google Play. Get it now.</p>
          <div>
            <img src={download} alt="" />
            <img src={download} alt="" />
          </div>
          <p>Get the app to <span>get a $20 coupon</span> for your first</p>
          <p>purchase</p>
        </App>
      </Top>
      <Bottom>
        <ul>
          <li>About Us</li>
          <div className='border'></div>
          <li>Customer</li>
          <div className='border'></div>
          <li>Service</li>
          <div className='border'></div>
          <li>Privacy Policy</li>
          <div className='border'></div>
          <li>Site map</li>
          <div className='border'></div>
          <li>Advanced</li>
          <div className='border'></div>
          <li>Search</li>
          <div className='border'></div>
          <li>Contact Us</li>
        </ul>
        <ImgWrapper>
          <img src={PaymentCard} alt="" />
        </ImgWrapper>
        <p>Copyright © <span>GOSTO</span> all rights  reserved. Powered by <span>laberthemes.</span></p>
      </Bottom>
    </FooterWrapper>
  )
}

export default Footer