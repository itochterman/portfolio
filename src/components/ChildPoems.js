import React, {Component} from 'react'
import Poems from './Poems'
import Header from './Header'
import NavBar from './NavBar'

class ChildPoems extends Component { 
    constructor(){
        super()
        this.state = {
            body: [],
            title: "",
            author: ""
        }
    }
    componentDidMount(){
        this.setState({body: this.props.current})
        this.poemAdjustments()
    }

    poemAdjustments(){
        const body = this.props.current.slice(6, this.props.current.length-1)
        const title = this.props.current[0]
        const author = this.props.current[1]
        this.setState({body: body, title: title})
    }
    render(){
        const isLoading = this.props.isLoading
        console.log("Child body: ", this.state.body)
        console.log("is loading", this.props.isLoading)

        return(
            <div>
                <br></br>
                <div className = 'poemContainer'>
                    <div className = 'div1'>
                        {!isLoading && this.state.title}
                    </div>
                <br></br>
                <div className = 'poemTextContainer'>
                    <div className = 'poemText'>
                    {this.state.body.map(text => <div key={text}>{text != "\n" ? text: <br/>}</div>)}                        <br></br>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ChildPoems