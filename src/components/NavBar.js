import React from "react";
import { Link } from "react-router-dom";
function NavBar(props) {
  if (props) {
    console.log("PROPS", props);
  }
  return (
    <div className=" Bar">
      <Link to="/" className="navButton">
        {/* <button className="navButton">Home</button> */}
        Home
      </Link>
      <Link to="/about" className="navButton">
        {/* <button className="navButton">About</button> */}
        About
      </Link>
      <Link to="/mypoems" className="navButton">
        {/* <button className="navButton">Poems</button> */}
        Poems
      </Link>
      <Link to="/contact" className="navButton">
        {/* <button className="navButton">Tech</button> */}
        Contact
      </Link>
    </div>
  );
}

export default NavBar;
