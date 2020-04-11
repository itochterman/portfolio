import React from "react";
import NavBar from "./NavBar";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";
import SocialMedia from "./SocialMedia";
import network from "../images/assets/network.jpeg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />

        <img className="home" src={network} />
        <div className="title">Hi, I'm Isabella Tochterman.</div>
        {/* <MemeGenerator /> */}
        <SocialMedia />
      </div>
    );
  }
}
export default Home;
