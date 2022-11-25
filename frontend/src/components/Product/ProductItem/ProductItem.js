import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./ProductItem.css";

function ProductItem(props) {
  const displayProducts = (props) => {
    const { productList, category } = props;

    if (productList.length > 0) {
      if (category === 0) {
        return productList
          .map((product) => {
            return (
              <div className="product__item" key={product.id}>
                <div className="product__img">
                  <Link
                    className="product__item-link"
                    to={`/san-pham/${product.id}`}
                    state={{ product }}
                  >
                    <img
                      className="product__item-img"
                      src={
                        process.env.REACT_APP_API_URL +
                        "/storage/" +
                        `${product.img_url}`
                      }
                      alt=""
                    ></img>
                  </Link>
                </div>
                <div className="product__info">
                  <div className="product__info__title">
                    <a href="https://at10.mediawz.com/san-pham/cam-cao-phong/">
                      {product.name}
                    </a>
                  </div>
                  <div className="product__info__price">
                    <span className="promotion__price">
                      <span className="amount">{product.promotion_price}đ</span>
                    </span>
                    <span className="original__price">
                      <span className="amount">{product.original_price}đ</span>
                    </span>
                  </div>
                  <div className="product__info__details"></div>
                </div>
              </div>
            );
          });
      } else {
        return productList
          .filter((productList) => productList.category_id == category)
          .map((product) => {
            return (
              <div className="product__item" key={product.id}>
                <div className="product__img">
                  <Link
                    className="product__item-link"
                    to={`/san-pham/${product.id}`}
                    state={{ product }}
                  >
                    <img
                      className="product__item-img"
                      src={
                        process.env.REACT_APP_API_URL +
                        "/storage/" +
                        `${product.img_url}`
                      }
                      alt=""
                    ></img>
                  </Link>
                </div>
                <div className="product__info">
                  <div className="product__info__title">
                    <a href="https://at10.mediawz.com/san-pham/cam-cao-phong/">
                      {product.name}
                    </a>
                  </div>
                  <div className="product__info__price">
                    <span className="promotion__price">
                      <span className="amount">{product.promotion_price}đ</span>
                    </span>
                    <span className="original__price">
                      <span className="amount">{product.original_price}đ</span>
                    </span>
                  </div>
                  <div className="product__info__details"></div>
                </div>
              </div>
            );
          });
      }
    } else {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
  };
  return <>{displayProducts(props)}</>;
}

export default ProductItem;
