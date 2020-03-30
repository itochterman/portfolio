import React, {Component} from 'react'
import {arr} from './images/index'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "", 
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            shouldHover: false 
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    componentDidMount() {
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(response => response.json())
        //     .then(response => {
        //         const {memes} = response.data
        //         this.setState({ allMemeImgs: memes })
        //     })

        this.setState({allMemeImgs: arr})
    }


    handleChange(event){
        console.log(this.state.allMemeImgs, "memes")

        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit(event){
        event.preventDefault()
        const memes = this.state.allMemeImgs
        const randomNumber = Math.floor((Math.random())*memes.length)
        const targetMeme = memes[randomNumber]
        console.log(targetMeme)
        this.setState({randomImage: targetMeme})

    }

    handleHover(event){
        this.setState({shouldHover: true})
        console.log(true)
    }

    handleLeave(event){
        this.setState({shouldHover: false})
        console.log(false)
    }

    
    render() {

        return (
            <div>
                <form className="meme-form" onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text"
                        name = "topText"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                        placeholder = "Top Text"
                    />
                    <input type = "text"
                        name = "bottomText"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                        placeholder = "Bottom Text"
                    />
                    <button>Gen</button>
                </form>
                <div className = "meme" onMouseEnter = {this.handleHover} onMouseLeave = {this.handleLeave}>

                    <img src = {this.state.randomImage} alt = ""/>
                    {this.state.shouldHover && (this.state.filledOut && this.state.topText) && <div className = "advice">
                        I think you should fill it out...
                    </div>}
                    <h2 className = "top"> {this.state.topText} </h2>
                    <h2 className = "bottom"> {this.state.bottomText} </h2>
                </div>


            

            </div>
        )
    }
}

export default MemeGenerator