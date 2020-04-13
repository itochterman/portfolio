import React from "react";
import { arr } from "../images/index";
import Rose from "../images/assets/rose.png";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <div>
      <header>
        <NavBar buttonBold={props.buttonBold} />
        {/* <img className="logo" src={arr[0]} /> */}
        <p>{props.title}</p>
        <img className="Rose" src={Rose} />
      </header>
    </div>
  );
}

export default Header;
