import React from "react";
import NavBar from "./NavBar";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";
import SocialMedia from "./SocialMedia";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="Isabella Tochterman" />
        <NavBar />
        <MemeGenerator />
        <SocialMedia />
      </div>
    );
  }
}
export default Home;
