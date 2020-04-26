import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import axios from "axios";
import SocialMedia from "./SocialMedia";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      messageSent: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("body").value;
    let tag = "";
    axios({
      method: "POST",
      url: "http://104.248.10.249:80/send",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      },
    }).then((response) => {
      console.log(response);
      if (response.data.msg === "success") {
        tag = true;

        this.setState({ messageSent: tag });
        console.log(tag);

        document.getElementById("email-form").reset();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <Header title="Contact" />

          <div className="form-container">
            <form
              className="contactForm"
              id="email-form"
              name="email-form"
              onSubmit={this.handleSubmit}
            >
              <label for="firstName">First name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="input"
                placeholder="First Name"
              ></input>
              <br />
              <br />
              <label for="lastName">Last name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              ></input>
              <br />
              <br />
              <label for="email"> Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <br /> <br />
              <textarea
                type="text"
                id="body"
                name="body"
                style={{ width: "500px", height: "300px" }}
              ></textarea>
              <br />
              <br />
              {this.state.messageSent && (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "2%",
                  }}
                >
                  {" "}
                  Message Sent!
                </p>
              )}
              <div style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  value="Submit"
                  className="backButton"
                  style={{ marginTop: "0", textAlign: "center" }}
                ></input>
              </div>
            </form>
          </div>
        </div>
        <SocialMedia />
      </div>
    );
  }
}
export default Contact;
