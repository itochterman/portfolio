import React from "react"
import  {arr} from "../images/index"
import Rose from '../images/assets/rose.png'

function Header(props) {
    return (
        <header>
            <img className = 'logo' src={arr[0]} />
            <p> 
                {props.title}
            </p>
            <img src = {Rose}/>
      

        </header>
    )
}

export default Header