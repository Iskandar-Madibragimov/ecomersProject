import React from "react";
import {
  Img,
  InsideWrapper,
  MainImg,
  MiniImg,
  ProductInfo,
  Title,
  Price,
  Bonus,
  Info,
  Stock,
  Cart,
  Buy,
  Add,
  Vendor,
  Availability,
  Sku,
  Tags,
  Share,
  Other,
  OtherSM,
} from "./style";
import peppers from "../../assets/img/peppers.webp";
import max from "../../assets/icons/max.svg";
import { ReactComponent as FaceBook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function InsideProduct() {
  const {productid} = useParams();
  const [product,setProduct] = useState({})
  console.log(productid);

  useEffect(() => {
    axios
    .get(`http://78.46.253.40:3434/api/v1/product/${productid}`)
    .then((res) => {
      console.log(res.data);
      setProduct(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const[checked,setChecked] = useState(false)
  
  const getFullscreenElement = () => {
    return document.fullscreenElement
    
  }

  const toggleFullscreen = () => {
    if(getFullscreenElement()) {
      document.exitFullscreen();
    }else{
      document.getElementById("mainImg").requestFullscreen().catch(console.log)
    }
  }

  return (
    <InsideWrapper>
      <Img>
        <MiniImg>
          <img src={peppers} alt="" />
          <img src={peppers} alt="" />
          <img src={peppers} alt="" />
          <img src={peppers} alt="" />
        </MiniImg>
        <MainImg>
          <img id="mainImg" src={product.img}  className="peppers" alt="" />
          <img src={max} onDoubleClick={toggleFullscreen} className="max" alt="" />
        </MainImg>
      </Img>

      <ProductInfo>
        <Title>
          <p>{product.title}</p>
        </Title>
        <Price>
          <p>${product.price}.00</p>
        </Price>
        <Bonus>
          <p>Spend $200.00 to Free Shipping</p>
        </Bonus>
        <Info>
          Products Description Designed by Puik in 1949 as one of the first
          models created especially for Carl Hansen & Son, and produced since
          1950. The last of a series of chairs wegner designed based on
          inspiration from antique chinese armchairs. Product details Material:
          Plastic, Wood Legs: Lacquered oak and black painted oak Dimensions and
          Weight: Height: 80 cm, Weight: 5.3 kg Length: 48cm Depth:...View more
        </Info>
        <Stock>
          <p>
            Hurry Up! Only <span>{product.stock}</span> Left in Stock!
          </p>
        </Stock>
        <Cart>
          <div>
            <p>-</p>
            <p>01</p>
            <p>+</p>
          </div>
          <button>Add to cart</button>
        </Cart>
        <Buy>
          <div>
            <input onChange={(e) => {
              console.log(e.target.checked);
              setChecked(e.target.checked)
            }} type="checkbox" />
            <p>
              I agree with the <a href="#">terms and conditions</a>
            </p>
          </div>
          <button disabled = {!checked}>Buy it now</button>
        </Buy>
        <Other>
          <p className="left">Add to Compare</p>
          <p className="right">Add to Wishlist</p>
        </Other>
        <Other>
          <p className="left">Vendor:</p>
          <p className="right">Gosto</p>
        </Other>
        <Other>
          <p className="left">Availability:</p>
          <p className="right">Many in Stock</p>
        </Other>
        <Other>
          <p className="left">SKU:</p>
          <p className="right">N/A</p>
        </Other>
        <Other>
          <p className="left">Tags:</p>
          <p className="right"></p>
        </Other>
        <OtherSM>
          <p className="social">Share:</p>
          <p className="media">
            <FaceBook />
          </p>
          <p className="media">
            <Linkedin />
          </p>
          <p className="media">
            <Twitter />
          </p>
        </OtherSM>
      </ProductInfo>
    </InsideWrapper>
  );
}

export default InsideProduct;
