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
                marginLeft: "23.3%",
                width: "50%",
                textAlign: "center",
                padding: "15px",
              }}
            >
              {/* <img src={gif}></img> */}
              Project Github Links
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
                    width: "25%",
                    marginLeft: "35%",
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
              <br /> <br />A repository for street performers built with Django
              and Bootstrap and backed by a SqLite database.
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
              This portoflio was built using Express.js, React, and vanilla CSS
              attached to a MySQL instance serving up my poems. Instead of
              building a one-page, homogenous portfolio, I opted to build a
              full-stack web application.
            </p>

            <p className="linkBoxRight">
              <img className="githubLogo" src={github}></img>
              <a
                className="linkTitle"
                href="https://github.com/itochterman/text_analysis"
              >
                Chat History Analysis
              </a>
              <br /> <br />A web tool that analyzes iMessage history for various
              parameters such as message count, word frequency, and sentiment.
              Built with Django and SqLite with analysis tools from Pandas and
              SciPy.
            </p>
          </div>

          <div className="column">
            <div className="aboutContainer">
              <h2>About me</h2>
              <h3>~</h3>
              <p style={{ textAlign: "left" }}>
                Hi, I'm Isabella Tochterman. When I started out as a Psychology
                major, I didn't originally plan on pursuing Computer Science.
                However, after discovering my love for statistics, I found
                myself in an intro programming class. The rest is history.
                <br /> <br />
                During my experience as a CS major at NYU, I was exposed to all
                the working parts of computers, as well as the different levels
                of software that keep our computers operating at both kernel and
                user levels.
                <br /> <br />
                As a Computer Science & Psychology dual degree with a minor in
                Creative Writing, I naturally found myself drifting towards the
                interaction between visualization and logic that is so apparent
                in web applications. I am excited by the way in which seasoned
                web pages can both entice and seduce a viewer.
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
                development intern with responsibilities such as adding and updating
                GraphQL endpoints for our Postgres database, enhancing and
                maintaining front end patient and provider portals using
                ReactJS, HTML and CSS, all while communicating and collaborating
                with a small engineering team through Agile practices.
              </p>
              <h2> Personal Projects</h2>
              <h3>~</h3>
              <p style={{ textAlign: "left" }}>
                Throughout the duration of my Computer Science degree at NYU, I
                worked on various projects that showcase the array of skills I
                acquired through my classes. I've also further explored these
                tools through a couple of personal projects, including this
                site. You'll find links to a few of these projects to the right.
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
