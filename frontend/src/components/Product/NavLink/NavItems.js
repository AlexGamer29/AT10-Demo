import React from "react";
import { MenuItem } from "../../../data/MenuItem/MenuItem";

import "./NavItems.css";

function NavItems() {
  return (
    <>
      {MenuItem.map((item, index) => {
        return (
          <li className="header__menu__nav-item" key={index}>
            <a className={item.cName} href={item.path}>
              {item.title}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default NavItems;
