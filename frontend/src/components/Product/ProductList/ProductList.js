import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductItem } from "../../index";
import "./ProductList.css";

function ProductList() {
  const [productList, setProductList] = useState([]);
  var url = process.env.REACT_APP_API_URL + "/api/get-products";

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    axios
      .get(url)
      .then((response) => {
        // handle success
        const allProducts = response.data;
        setProductList(allProducts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <>
      <div className="product__wrapper">
        <div className="wrapper">
          <ProductItem productList={productList} />;
        </div>
      </div>
    </>
  );
}

export default ProductList;
