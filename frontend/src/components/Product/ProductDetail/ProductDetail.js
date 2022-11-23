import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const { state  } = useLocation();
  const { product } = state || {};

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.promotion_price}đ</p>
      <p>{product.original_price}đ</p>
    </div>
  );
}

export default ProductDetail;
