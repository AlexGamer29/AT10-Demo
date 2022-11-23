import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import NavItems from "../NavItems/NavItems";
import ProductItem from "../ProductItem/ProductItem";

import "./Header.css";

function Header() {
  return (
    <>
      <header id="header">
        <div className="hd__desktop">
          <div className="hd__center">
            <div className="hd__center-wrapper">
              <div className="hd__center-container">
                <div className="hd__center-grid">
                  <div id="header__logo">
                    <div id="header__logo-wrapper">
                      <h1 id="header__logo-content">
                        <a
                          href="https://at10.mediawz.com/"
                          id="header__logo-link"
                        >
                          <img
                            src="https://at10.mediawz.com/wp-content/uploads/2021/06/AT10-1.png"
                            id="logo"
                          />
                        </a>
                      </h1>
                    </div>
                  </div>
                  <div id="header__menu">
                    <div id="header__menu-main">
                      <ul id="header__menu-list">
                        <NavItems />
                      </ul>
                    </div>
                    <div id="header__search">
                      <a id="header__search_nav-link">
                        <svg
                          className="fa-search"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
