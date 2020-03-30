import React from "react"
import {Link} from "react-router-dom"
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
                Tech
            </button>
            <button>
                <Link to="/poems">Poems </Link>

            </button>
        </div>
    )
}

export default NavBar