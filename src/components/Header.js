import React from "react";
import { arr } from "../images/index";
import Rose from "../images/assets/rose.png";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <div>
      <header>
        <p className="papi">
          {props.title} <img className="Rose" src={Rose} />
        </p>
        {/* <img className="Rose" src={Rose} /> */}
        <NavBar buttonBold={props.buttonBold} />
        {/* <img className="logo" src={arr[0]} /> */}
      </header>
    </div>
  );
}

export default Header;
