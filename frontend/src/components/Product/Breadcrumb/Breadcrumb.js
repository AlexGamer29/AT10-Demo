import React from "react";
import "./Breadcrumb.css";

function Breadcrumb() {
  return (
    <section id="breadcrumb">
      <div className="breadcrumb__overlay" />
      <div className="breadcrumb__content">
        <div className="breadcrumb__content-wrapper">
          <div className="breadcrumb__content-text">
            <div className="breadcrumb__primary">
              <h2>BÍ NGÔ</h2>
            </div>
            <div className="breadcrumb__alternate">
              <p id="breadcrumbs">
                <span id="breadcrumbs__wrapper">
                  <span id="breadcrumbs__container">
                    <a
                      id="breadcrumbs__first-link"
                      href="http://at10.chonweb.vn/"
                    >
                      Trang chủ&nbsp;
                    </a>
                    {">>"}
                    <span class="breadcrumb_last" aria-current="page">
                      &nbsp;Sản phẩm
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
