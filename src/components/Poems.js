import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import ChildPoems from "./ChildPoems";
import PoemDataService from "../services/poem.service";
import SocialMedia from "./SocialMedia";

class Poems extends React.Component {
  constructor() {
    super();
    this.state = {
      all: [
        {
          id: "",
          title: "",
          description: "",
        },
      ],
      isLoading: true,
      counter: 0,
      currPoem: [],
    };
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  }
  async componentWillMount() {
    const all = await this.displayPoems();
    this.setState({ all: this.readTextFile(all) });
    if (this.state.all) {
      this.setState({
        currPoem: this.state.all[this.state.counter],
        isLoading: false,
      });
      console.log(this.state.all);
    }
  }
  readTextFile = (all) => {
    const rval = [];
    for (let p = 0; p < all.length; p++) {
      const file = all[p].description;
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
	    console.log("RAW: ", rawFile);
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
            let allText = rawFile.responseText;
            for (let i = 0; i < allText.length; i++) {
              let uni = allText.charCodeAt(i);
              if (uni === 13) {
                allText =
                  allText.substring(0, i + 1) +
                  "~" +
                  allText.substring(i + 1, allText.length);
              }
            }
            let newText = allText.split("~");
            console.log("text: ", newText);
            rval.push(newText);

            // this.setState({
            //   currPoem: newText
            // });
          }
        }
      };
      rawFile.send(null);
    }
    // this.setState({ all: rval, isLoading: false });
    console.log("ALL", rval);
    return rval;
  };

  async displayPoems() {
    const data = await PoemDataService.getAll().then((response) => {
      return response.data;
    });
	console.log("DATA", data);
    // this.setState({ all: data });
    return data;
  }

  handleForward() {
    if (
      this.state.counter + 1 < this.state.all.length &&
      !this.state.isLoading
    ) {
      this.setState((prev) => {
        return {
          currPoem: this.state.all[prev.counter + 1],
          counter: prev.counter + 1,
        };
      });
    }
  }
  handleBackward() {
    if (this.state.counter - 1 >= 0 && !this.state.isLoading) {
      this.setState((prev) => {
        return {
          currPoem: this.state.all[prev.counter - 1],
          counter: prev.counter - 1,
        };
      });
    }
  }
  render() {
    const sendProps = this.state.isLoading;
    console.log(this.state.currPoem);
    return (
      <div>
        <Header title="Poems" page="about" />
        <div style={{ textAlign: "center", padding: "10px" }}>
          <button className="backButton" onClick={this.handleBackward}>
            Back
          </button>
          <button className="backButton" onClick={this.handleForward}>
            Next
          </button>
        </div>

        {!sendProps && <ChildPoems current={this.state.currPoem} />}
        <SocialMedia />
      </div>
    );
  }
}
export default Poems;
