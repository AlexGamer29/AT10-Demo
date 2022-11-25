import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductItem } from "../../index";
import "./ProductList.css";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  var url = process.env.REACT_APP_API_URL + "/api/get-products/";

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

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
      <div className="tab">
        <button value={1} onClick={handleCategoryChange} className="btn__tab">
          HOA QUẢ
        </button>
        <button value={2} onClick={handleCategoryChange} className="btn__tab">
          THỰC PHẨM KHÔ
        </button>
        <button value={3} onClick={handleCategoryChange} className="btn__tab">
          RAU HỮU CƠ
        </button>
      </div>
      <div className="product__wrapper">
        <div className="wrapper">
          <ProductItem productList={productList} category={selectedCategory} />
        </div>
      </div>
    </>
  );
}

export default ProductList;
