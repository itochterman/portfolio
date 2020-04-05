import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="Bar">
      <button>
        <Link to="/">Home </Link>
      </button>
      <button>
        <Link to="/about">About </Link>
      </button>
      <button>
        <Link to="/tech">Tech </Link>
      </button>
      <button>
        <Link to="/mypoems">Poems </Link>
      </button>
    </div>
  );
}

export default NavBar;
