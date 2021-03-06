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

    const title = this.props.current[0];

    console.log(body);

    return (
      <div style={{ paddingBottom: "5%" }}>
        <br></br>
        <div className="poemContainer">
          <div className="div1">{title}</div>
          <br></br>
          <div className="poemTextContainer">
            <div className="poemText">
              {/* {body.map((text, index) => (
                <div key={index}>{text != "\n" ? text : <br />}</div>
              ))}{" "} */}
              <pre>{body}</pre>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChildPoems;
