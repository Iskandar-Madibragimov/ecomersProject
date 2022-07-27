import React from "react";
import {
  Brands,
  Category,
  CateList,
  Filters,
  FilterWrapper,
  LeaveFilter,
} from "./style";
import { ReactComponent as X } from "../../assets/icons/x.svg";

function Filter() {
  return (
    <FilterWrapper>
      <Filters>
        <p>FILTERS</p>
        <LeaveFilter>
          <X />
        </LeaveFilter>
      </Filters>
      <Category>
        <h5>PRODUCT CATEGORIES</h5>
        <CateList>
          <p>All Categories (61)</p>
          <p>Accessories (19)</p>
          <p>Decor (12)</p>
          <p>Decor & Lighting (8)</p>
          <p>Dining & Kitchen (11)</p>
          <p>Office Furniture (2)</p>
          <p>Outdoor & Gift (8)</p>
          <p>Sectional Sofas (3)</p>
          <p>Tables & Chair (5)</p>
        </CateList>
      </Category>
      <Brands>
        <h5>FILTER BY BRANDS</h5>
        <p>There are no tags</p>
      </Brands>
      <Brands>
        <h5>FILTER BYCOLOR</h5>
        <p>There are no colors</p>
      </Brands>
      <Category className="price">
        <h5>FILTER BY PRICE</h5>
        <CateList>
          <p>$25.00 - $50.00</p>
          <p>$50.00 - $75.00</p>
          <p>$75.00 - $100.00</p>
          <p>$200.00 - $300.00</p>
        </CateList>
      </Category>
      <Brands className="size">
        <h5>FILTER BY SIZE</h5>
        <p>There are no tags</p>
      </Brands>
    </FilterWrapper>
  );
}

export default Filter;
