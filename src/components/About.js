import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header title="About Me" buttonBold="Home" />
        <div className="row">
          <div className="column">
            <h2 className="aboutHeader">Education</h2>
            <ul>
              <li style={{ fontWeight: "bolder" }}> New York University</li>
            </ul>
          </div>
          <div className="column">
            <h2 className="aboutHeader"> Personal Projects</h2>
            <ul>
              <li style={{ fontWeight: "bolder" }}> New York University</li>
            </ul>
          </div>
          <div className="column">
            <h2 className="aboutHeader">Professional Experience</h2>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
