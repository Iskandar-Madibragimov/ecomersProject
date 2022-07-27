import React, { useState } from "react";
import { carousel2 as products } from "../../mock.js";
import {
  ActionWrapper,
  FlashWrapper,
  ActionIcon,
  ButtonWrapper,
  ImgWrapper,
  Info,
  Product,
  Top,
  FilterIcon,
  Buttons,
} from "./styles.js";
import { ReactComponent as Grid1 } from "../../assets/icons/grid.svg";
import { ReactComponent as Grid2 } from "../../assets/icons/align-center.svg";
import { ReactComponent as Grid3 } from "../../assets/icons/align-justify.svg";
import Small from "../../components/viewSmallType/index.jsx";
import Lists from "../../components/lists/index.jsx";
import Big from "../../components/Big/index.jsx";
import { FilterWrapper } from "../../components/Filter/style.js";
import Filter from "../../components/Filter/index.jsx";
import WishList from "../../components/wishList/index.jsx";
import Cart from "../../components/cart/index.jsx";
function Shop() {
  const [viewType, setViewType] = useState("small");
  const [filter, setFilter] = useState("price:low to high");
  const [sideFilter, setSideFilter] = useState(false);

  return (
    <>
      <Top>
        <div>
          <button onClick={
            () => {
              setSideFilter(true)
            }
          }>Filter</button>
          <FilterIcon
            active={viewType === "big"}
            onClick={() => {
              setViewType("big");
            }}
          >
            <Grid1 />
          </FilterIcon>
          <FilterIcon
            active={viewType === "small"}
            onClick={() => {
              setViewType("small");
            }}
          >
            <Grid2 />
          </FilterIcon>
          <FilterIcon
            active={viewType === "list"}
            onClick={() => {
              setViewType("list");
            }}
          >
            <Grid3 />
          </FilterIcon>
        </div>
        <div>
          <label>
            Sort by:
            <select
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              <option value="">Featured</option>
              <option value="sold">Best Selling</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="price:low to high">low to high</option>
              <option value="price:high to low">high to low</option>
              <option value="">old to new</option>
              <option value="">new to old</option>
            </select>
          </label>
        </div>
      </Top>

      <FlashWrapper>
        {products
          .sort((a, b) => {
            if (filter === "price:low to high") {
              return a.price - b.price;
            } else if (filter === "price:high to low") {
              return b.price - a.price;
            } else if (filter === "A-Z") {
              return a.title.charAt(0) > b.title.charAt(0)
                ? 1
                : a.title.charAt(0) < b.title.charAt(0)
                ? -1
                : 0;
            } else if (filter === "Z-A") {
              return a.title.charAt(0) < b.title.charAt(0)
                ? 1
                : a.title.charAt(0) > b.title.charAt(0)
                ? -1
                : 0;
            } else if (filter === "sold") {
              return b.sold - a.sold;
            }
          })
          .map((value, index) =>
            viewType === "small" ? (
              <Small key={index} {...value} />
            ) : viewType === "big" ? (
              <Big key={index} {...value} />
            ) : viewType === "list" ? (
              <Lists key={index} {...value} />
            ) : (
              ""
            )
          )}
      </FlashWrapper>
      {sideFilter ? <Filter /> : ""}
      {<Cart />}
    </>
  );
}

export default Shop;
