import React, { Component } from "react";
import Poems from "./Poems";
import Header from "./Header";
import NavBar from "./NavBar";

class ChildPoems extends Component {
  constructor() {
    super();
  }
  render() {
    const body = this.props.current;

    console.log("BODY: ", body);
    const title = this.props.current[0];

    return (
      <div>
        <br></br>
        <div className="poemContainer">
          <div className="div1">{title}</div>
          <br></br>
          <div className="poemTextContainer">
            <div className="poemText">
              {body.map(text => (
                <div key={text}>{text != "\n" ? text : <br />}</div>
              ))}{" "}
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChildPoems;
