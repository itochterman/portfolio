import React from "react";
import { Link } from "react-router-dom";
function NavBar(props) {
  console.log(props);
  return (
    <div className=" Bar">
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/about">
        <button className="navButton">About</button>
      </Link>
      <Link to="/tech">
        <button className="navButton">Tech</button>
      </Link>
      <Link to="/mypoems">
        <button className="navButton">Poems</button>
      </Link>
    </div>
  );
}

export default NavBar;
