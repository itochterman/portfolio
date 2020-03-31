import React, {Component} from 'react'
import Poems from './Poems'
import Header from './Header'
import NavBar from './NavBar'

class ChildPoems extends Component { 
    constructor(){
        super()
        this.state = {


        }
    }
    render(){
        const isLoading = this.props.isLoading

        return(
            <div>
                <br></br>
                <div className = 'poemContainer'>
                    <div className = 'div1'>
                        {!isLoading && this.props.poems[0].title}
                    </div>
                <br></br>
                <div className = 'poemTextContainer'>
                    <div className = 'poemText'>
                        {this.props.current}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ChildPoems