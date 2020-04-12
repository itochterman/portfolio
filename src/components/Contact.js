import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import axios from "axios";

class Contact extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("body").value;
    axios({
      method: "POST",
      url: "http://localhost:3001/send",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        document.getElementById("email-form").reset();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  render() {
    return (
      <div>
        <Header title="Contact" />
        <form id="email-form" name="email-form" onSubmit={this.handleSubmit}>
          <label for="firstName">First name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue="First Name"
          ></input>
          <br />
          <br />
          <label for="lastName">Last name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue="Last Name"
          ></input>
          <br />
          <br />
          <label for="email"> Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="Email"
          ></input>
          <br /> <br />
          <textarea type="text" id="body" name="body"></textarea>
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
export default Contact;
