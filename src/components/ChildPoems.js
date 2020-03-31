import React, {Component} from 'react'
import Poems from './Poems'

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
                        {this.props.poems[0].description}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ChildPoems