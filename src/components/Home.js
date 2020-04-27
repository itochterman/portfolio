import React from "react";
import NavBar from "./NavBar";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";
import SocialMedia from "./SocialMedia";
import network from "../images/assets/network.jpeg";

class Home extends React.Component {
  render() {
    const arrow = "\u279C";
    return (
      <div>
        {/* <div className="arrow">{arrow}</div> */}

        <img className="home" src={network} />
        <NavBar style={{ top: "0px" }} />

        <div className="title">Hi, I'm Isabella Tochterman</div>
        <div
          className="title"
          style={{ top: "50%", fontSize: "25px", color: "red" }}
        >
          I'm an aspiring web developer
        </div>

        {/* <MemeGenerator /> */}
        <SocialMedia />
      </div>
    );
  }
}
export default Home;
