import React from "react";
import {
  BackGround,
  Brands,
  Category,
  CateList,
  Color,
  Colors,
  Filters,
  FilterWrapper,
  LeaveFilter,
  LeftSide,
} from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";
import { colors } from "../../mock";

function Filter({ setPopUp, filterInfo, setFilterInfo }) {
  const categories = [
    {
      text: "All Categories (61)",
      value: "all",
    },
    {
      text: "Accessories (19)",
      value: "accessories",
    },
    {
      text: "Decor (12)",
      value: "decor",
    },
    {
      text: "Decor & Lighting (8)",
      value: "decor&lighting",
    },
    {
      text: "Dining & Kitchen (11)",
      value: "dining&kitchen",
    },
    {
      text: "Office Furniture (2)",
      value: "office-furniture",
    },
    {
      text: "Outdoor & Gift (8)",
      value: "outdoor&gift",
    },
    {
      text: "Sectional Sofas (3)",
      value: "sectional-sofas",
    },
    {
      text: "Tables & Chair (5)",
      value: "tables&chair",
    },
  ];
  const size = [
    { size: 20 },
    { size: 30 },
    { size: 39 },
    { size: 40 },
    { size: 41 },
    { size: 42 },
    { size: 43 },
    { size: 50 },
  ];
  const brands = [
    { brand: "Nike" },
    { brand: "Puma" },
    { brand: "Adidas" },
    { brand: "Ever Green" },
  ];
  const prices = [
    {
      min: 25.0,
      max: 50.0,
    },
    {
      min: 50.0,
      max: 75.0,
    },
    {
      min: 75.0,
      max: 100.0,
    },
    {
      min: 100.0,
      max: 200.0,
    },
    {
      min: 200.0,
      max: 300.0,
    },
  ];

  return (
    <FilterWrapper>
      <BackGround />
      <LeftSide>
        <Filters>
          <p>FILTERS</p>
          <LeaveFilter
            onClick={() => {
              setPopUp(false);
            }}
          >
            <X />
          </LeaveFilter>
        </Filters>
        <Category>
          <h5>PRODUCT CATEGORIES</h5>
          <CateList>
            {categories.map(({ text, value }) => (
              <label>
                <input
                  name="category"
                  checked={filterInfo.category === value}
                  type="radio"
                  value={value}
                  onClick={(e) => {
                    console.log(e.target.value);
                    setFilterInfo({
                      ...filterInfo,
                      category:
                        e.target.value === filterInfo.category
                          ? ""
                          : e.target.value,
                    });
                  }}
                />{" "}
                {text}
              </label>
            ))}
          </CateList>
        </Category>
        <Brands>
          <h5>FILTER BY BRANDS</h5>
          {brands.map(({ brand }) => (
            <label>
              <input
                name="BRANDS"
                type="radio"
                checked={filterInfo.brand === brand}
                value={brand}
                onClick={(e) => {
                  console.log(e.target.value);
                  setFilterInfo({
                    ...filterInfo,
                    brand:
                      e.target.value === filterInfo.brand ? "" : e.target.value,
                  });
                }}
              />{" "}
              {brand}
            </label>
          ))}
        </Brands>
        <Brands>
          <h5>FILTER BYCOLOR</h5>
          {colors.map(({ color }) => (
            <Colors
              active={filterInfo.color === color ? filterInfo.color : ""}
              onClick={() => {
                setFilterInfo({
                  ...filterInfo,
                  color: color === filterInfo.color ? "" : color,
                });
              }}
            >
              <Color className={color}></Color>
              {color}
            </Colors>
          ))}{" "}
        </Brands>
        <Category className="price">
          <h5>FILTER BY PRICE</h5>
          <CateList>
            {prices.map(({ min, max }) => (
              <label>
                <input
                  name="PRICE"
                  type="radio"
                  checked={
                    filterInfo.price.min === min && filterInfo.price.max === max
                  }
                  onClick={() => {
                    setFilterInfo({
                      ...filterInfo,
                      price:
                        min === filterInfo.price.min &&
                        max === filterInfo.price.max
                          ? {}
                          : {
                              min,
                              max,
                            },
                    });
                  }}
                />{" "}
                ${min}-${max}
              </label>
            ))}
          </CateList>
        </Category>
        <Brands className="size">
          <h5>FILTER BY SIZE</h5>
          {size.map(({ size }) => (
            <label>
              <input
                name="SIZE"
                type="radio"
                checked={filterInfo.size === size}
                value={size}
                onClick={(e) => {
                  console.log(e.target.value);
                  setFilterInfo({
                    ...filterInfo,
                    size:
                      size === filterInfo.size ? null : size,
                  });
                }}
              />{" "}
              {size}
            </label>
          ))}
        </Brands>
      </LeftSide>
    </FilterWrapper>
  );
}

export default Filter;
