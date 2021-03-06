import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { UrlList } from "../helpers/UrlList";


const hyper_link = (type) => {window.location.href= UrlList[type]};
const email = (email) => { window.location = UrlList.Email};

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Antonio J. Silva Paucar</h2>
        <div className="prompt">
          <p>Software Developer in Eugene, Oregon. Graduated from the University of Oregon in 2021</p>
          <LinkedInIcon onClick={event => hyper_link("Linkedin")}/>
          <GithubIcon onClick={event => hyper_link("Github")} />
          <EmailIcon  onClick={event => email("Email")}/>
        </div>
      </div>
      <div className="skills">
        <h1> Experience </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, and BootStrap.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Flask, Django, Heroku, MongoDB, and MongoAtlas
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, JavaScript, C++/C and Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;