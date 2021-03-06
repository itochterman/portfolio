import React, { Component } from "react";
import { arr, thought } from "../images";

class ImageGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      mouseDoesHover: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        const capacity = Math.floor(memes.length / 6);
        console.log(capacity);
        let temp = [];
        for (let i = 1; i < 7; i++) {
          temp.push(arr[i - 1]);
        }
        // this.setState({ allMemeImgs: memes })
        this.setState({ allMemeImgs: temp });
      });
  }

  handleChange(event) {
    console.log(this.state.allMemeImgs, "memes");

    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const us = this.state.allMemeImgs;
    const randomNumber = Math.floor(Math.random() * us.length);
    const targetMeme = us[randomNumber];
    console.log(randomNumber);
    this.setState({ randomImage: targetMeme });
  }
  handleHover(event) {
    this.setState({ mouseDoesHover: true });
  }
  handleLeave(event) {
    this.setState({ mouseDoesHover: false });
  }

  render() {
    let doDisplay = true;
    if (this.state.topText && this.state.bottomText) {
      console.log("FALSE");
      doDisplay = false;
    }
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="Bottom Text"
          />
          <button>Gen</button>
        </form>
        <div
          className="meme"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
        >
          <img src={this.state.randomImage} alt="" />
          {this.state.mouseDoesHover && doDisplay && (
            <img className="advice" src={thought} />
          )}
          {this.state.mouseDoesHover && doDisplay && (
            <h2 className="adviceText"> you should p enter some text</h2>
          )}
          <h2 className="top"> {this.state.topText} </h2>
          <h2 className="bottom"> {this.state.bottomText} </h2>
        </div>
      </div>
    );
  }
}

export default ImageGenerator;
