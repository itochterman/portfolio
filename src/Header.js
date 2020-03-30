import React from "react"
function Header(props) {
    return (
        <header>
            <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
            <p> 
                {props.title}
            </p>
        </header>
    )
}

export default Header