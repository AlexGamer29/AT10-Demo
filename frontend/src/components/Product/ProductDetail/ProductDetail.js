import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const { state } = useLocation();
  const { product } = state || {};

  return (
    <div className="product__detail">
      <div className="product__detail-wrapper">
        <div className="product__detail-container">
          <div className="product__detail__content">
            <div className="product__detail__content-wrapper">
              <div className="product__detail__content-container">
                <div className="product__detail__img">
                  <div className="product__detail__img-wrapper">
                    <img
                      className="product__detail__img-content"
                      src={
                        process.env.REACT_APP_API_URL +
                        "/storage/" +
                        `${product.img_url}`
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="product__detail__info">
                  <div className="product__detail__info-wrapper">
                    <div className="product__detail__title">
                      <h1>{product.name}</h1>
                    </div>
                    <div className="product__detail__title">
                      <span>
                        <span
                          id="product__promotion__price"
                          className="product__price__title"
                        >
                          {product.promotion_price}đ
                        </span>
                        <span
                          id="product__original__price"
                          className="product__price__title"
                        >
                          {product.original_price}đ
                        </span>
                      </span>
                    </div>
                    <div className="product__detail__title">
                      <p
                        id="product__description"
                        className="product__description__title"
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
