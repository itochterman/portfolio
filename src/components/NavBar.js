import React from "react";
import { Link } from "react-router-dom";
function NavBar(props) {
  console.log(props);
  return (
    <div className=" Bar">
      <button className="navButton">
        <Link to="/">Home </Link>
      </button>
      <button className="navButton">
        <Link to="/about">About </Link>
      </button>
      <button className="navButton">
        <Link to="/tech">Tech </Link>
      </button>
      <button className="navButton">
        <Link to="/mypoems">Poems </Link>
      </button>
    </div>
  );
}

export default NavBar;
