import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class SocialMedia extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="social-container">
        <a href="https://www.facebook.com" className="social linkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com" className="social facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="social instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
