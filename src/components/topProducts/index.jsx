import React from "react";
import { Info, Parent, ParentWrapper, Text } from "./style";
import fruit from "../../assets/img/fruit.webp";

function TopProducts() {
  const products = [
    {
      img: fruit,
      title: "Happy Baby Organics Teether, 3 Flavor Variety Pack",
      review: "*****",
      price: "$345.00",
    },
    {
      img: fruit,
      title: "Happy Baby Organics Teether, 3 Flavor Variety Pack",
      review: "*****",
      price: "$345.00",
    },
    {
      img: fruit,
      title: "Happy Baby Organics Teether, 3 Flavor Variety Pack",
      review: "*****",
      price: "$345.00",
    },
    {
      img: fruit,
      title: "Happy Baby Organics Teether, 3 Flavor Variety Pack",
      review: "*****",
      price: "$345.00",
    },
    {
      img: fruit,
      title: "Happy Baby Organics Teether, 3 Flavor Variety Pack",
      review: "*****",
      price: "$345.00",
    },
  ];

  return (
    <ParentWrapper>
      <Parent class="parent">
        <div class="div1">
          <img src={fruit} alt="" />
          <Info>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <p>
              $69.00 <del>$75.00</del>
            </p>
            <ul>
              <li>Chocolate Cream Covered Biscuit Sticks snack.</li>
              <li>
                The perfect harmony of creamy chocolate & crispy pretzel stick.
              </li>
              <li>
                A crunchy and delicious biscuit stick covered in a creamy
                frosting.
              </li>
              <li>
                Perfect for gifting, care packages, corporate gifts, birthdays.
              </li>
            </ul>
            <button>Add to cart</button>
          </Info>
        </div>
        <div class="div2 other">
          <img src={fruit} alt="" />
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
        </div>
        <div class="div3 other">
          <img src={fruit} alt="" />
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
        </div>
        <div class="div4 other">
          <img src={fruit} alt="" />
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
        </div>
        <div class="div5 other">
          <img src={fruit} alt="" />
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
        </div>
        <div class="div6 other">
          <img src={fruit} alt="" />
          <Text>
            <h4>Happy Baby Organics Teether, 3 Flavor Variety Pack</h4>
            <div className="flex">
              <h3>$365.00</h3>
              <h3>
                <del>$50.00</del>
              </h3>
            </div>
          </Text>
        </div>

        {/* {
          products.map(({img,title,review,price},index) => (
            <>
              {img}
              {title}

            </>
          ))
        } */}
      </Parent>
    </ParentWrapper>
  );
}

export default TopProducts;
