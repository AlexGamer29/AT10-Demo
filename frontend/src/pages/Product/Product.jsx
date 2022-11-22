import React from "react";
import { Breadcrumb, Header } from "../../components";
import ProductItem from "../../components/Product/ProductItem/ProductItem";

import "./Product.css";

const Product = () => {
  return (
    <div id="page">
      <Header />
      <Breadcrumb />
      <div className="product__wrapper">
        <div className="wrapper">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default Product;
