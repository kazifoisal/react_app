import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="menues">
        <li>
          <NavLink className={({isActive,isPending})=> isActive? "isActiveGreen" : "isPendingBlack" }  to="/" >HomePage</NavLink> 
        </li>
        <li> <NavLink className={({isActive,isPending})=> isActive? "isActiveGreen" : "isPendingBlack" }  to="/product" >product Page</NavLink> </li>
        <li><NavLink className={({isActive,isPending})=> isActive? "isActiveGreen" : "isPendingBlack" }  to="/profile" >profile Page</NavLink> </li>
      </ul>
    </div>
  );
};

export default Menu;
