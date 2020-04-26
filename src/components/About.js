import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import NavBar from "./NavBar";
import Header from "./Header";
import ios from "../images/assets/ios_project.jpg";
import github from "../images/assets/github.png";
import gif from "../images/assets/githubLinks.gif";
import hippo from "../images/assets/bitch-hippo.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header title="About Me" buttonBold="Home" />
        <div className="row">
          <div className="column">
            <div>
              <img className="columnImage" src={ios} />
            </div>
            {/* <div className="linkBox"> */}
            <h2
              style={{
                marginLeft: "33.3%",
                width: "50%",
                textAlign: "center",
                paddingTop: "6px",
              }}
            >
              <img src={gif}></img>
              <br />
            </h2>
            <p className="linkBoxLeft">
              <img className="githubLogo" src={github}></img>
              <a
                className="linkTitle"
                href="https://github.com/itochterman/Planner-Pet"
              >
                (iOS) Daily Planner and 3D Virtual Pet
              </a>
              <div>
                <img
                  src={hippo}
                  style={{
                    width: "80%",
                    marginLeft: "10%",
                    position: "flex",
                    paddingTop: "10px",
                    height: "auto%",
                  }}
                ></img>
              </div>
              <br />
              Please click the title to see the source code
            </p>

            <p className="linkBoxRight">
              <img className="githubLogo" src={github}></img>
              <a
                className="linkTitle"
                href="https://github.com/itochterman/StreetJammin"
              >
                StreetJammin: A Repository for Street Performers
              </a>
              <br /> <br />
              StreetJammin is a site built using Django (Python web framework)
              with Bootstrap using a SqLite database that takes in a user's song
              and links it to unique QR codes such that a user can scan the code
              and download a single instance of the song. Check the above link
              for source code.
            </p>
            <p className="linkBoxLeft">
              <img className="githubLogo" src={github}></img>
              <a
                className="linkTitle"
                href="https://github.com/itochterman/portfolio"
              >
                Github Repo for present site...
                <br /> <br />
              </a>
              As you have seen, the present site is also a project I've
              completed. I've created this site independently using a stack of
              ReactJS, expressJS with MySQL, and vanilla CSS. No bootstrap
              libraries were used in the making of this site. As is to be
              expected, this site is a work in progress. I plan to focus on
              mobile integration and further front-end development in the near
              future. I've had a blast building the site, and I hope that
              experience is apparent in the result. Click the above link to view
              code!
            </p>
          </div>

          <div className="column">
            <div className="aboutContainer">
              <h2>About me</h2>
              <h3>~</h3>
              <p style={{ textAlign: "left" }}>
                Hi, I'm Isabella Tochterman. I didn't originally plan to enjoy
                Web Development, but it crept up on me like an itchy foot.
                <br /> <br />
                During my experience at New York University, I was exposed to
                all the working parts of computers, as well as the different
                levels of software that keep our computers operating at a ground
                levels and the user-level applications we stringently rely on in
                order to conduct our daily lives.
                <br /> <br />
                As a Computer Science & Psychology dual degree with a minor in
                Creative Writing, I naturally found myself drifting towards the
                interaction between visualization and logic that is so apparent
                in web applications. I am excited by the way in which seasoned
                web pages can entice and seduce a viewer.
                <p style={{ fontWeight: "bolder" }}>
                  TLDR: I'm anxious to continue learning all I can about the
                  tenets of web development and how to best produce webpages
                  that appeal to consumers.
                </p>
              </p>
              <br /> <br />
              <h2>Education</h2>
              <h3>~</h3>
              <p2>
                <h4>New York University</h4>
                <h5>Bachelor of Arts, Psychology & Computer Science </h5>• GPA:
                3.81, Honors: Dean’s List 2016-current
              </p2>
              <br /> <br />
              <h2> Industry Experience</h2>
              <h3>~</h3>
              <p style={{ textAlign: "left" }}>
                {" "}
                <h4 style={{ textAlign: "center" }}>
                  Full Stack Web Engineering Intern
                </h4>
                <h5 style={{ textAlign: "center" }}> Mantra Health </h5>
                <br />
                During the last four months of 2019, I worked as a full stack
                development intern with responsibilites of adding and updating
                GraphQL endpoints to the Postgres database, enhancing and
                maintaining front end patient and provider portals using
                ReactJS, HTML and CSS, all while communicating and collaborating
                with a small engineering team through Agile practices.
              </p>
              <h2> Personal Projects</h2>
              <h3>~</h3>
              <p style={{ textAlign: "left" }}>
                Throughout the duration of my Computer Science degree at NYU, I
                worked on various projects that showcase an array of skills I
                acquired through my classes. For working examples of these
                projects, please refer to the Github links displayed on the
                right-side panel.
              </p>
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
    );
  }
}
export default About;
