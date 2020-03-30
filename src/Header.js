import React from "react"
import  {arr} from "./images/index"
function Header(props) {
    return (
        <header>
            <img src={arr[0]} />
            <p> 
                {props.title}
            </p>
        </header>
    )
}

export default Header