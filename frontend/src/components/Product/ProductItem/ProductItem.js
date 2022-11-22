import React from "react";
import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product__item">
      <div className="product__img">
        <a
          className="product__item-link"
          href="https://at10.mediawz.com/san-pham/bi-ngo/"
        >
          <img
            className="product__item-img"
            src="https://at10.mediawz.com/wp-content/uploads/2019/06/bidodai_large.jpg"
          ></img>
        </a>
      </div>
      <div className="product__info">
        <div className="product__info__title">
          <a href="https://at10.mediawz.com/san-pham/cam-cao-phong/">
            Cam Cao Phong
          </a>
        </div>
        <div className="product__info__price">
          <span className="promotion__price">
            <span className="amount">12000đ</span>
          </span>
          <span className="original__price">
            <span className="amount">15000đ</span>
          </span>
        </div>
        <div className="product__info__details"></div>
      </div>
    </div>
  );
}

export default ProductItem;
