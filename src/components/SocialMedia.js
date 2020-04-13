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
        <a
          href="https://www.linkedin.com/in/isabella-tochterman-486739132/"
          className="social linkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/isabella.tochterman"
          className="social facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/portabellamush/"
          className="social instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
