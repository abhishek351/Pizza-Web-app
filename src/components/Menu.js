import React from "react";
import "../styles/Menu.css";
import { MenuList } from "./MenuList";
import MenuItem  from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((Item, key) => {
          return (
            <MenuItem
              key={key}
              image={Item.image}
              name={Item.name}
              price={Item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
