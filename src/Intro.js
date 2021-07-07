import React from "react";
import IntroPhoto from "./images/introphoto.PNG";

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <div className="IntroText">
          Software Development Enthusiast, Web Developer
          <p>
            I design and Code. I make web applications usually with React
            JS,HTML and CSS.
          </p>
        </div>
        <div className="IntroPhoto">
          <img src={IntroPhoto} />
        </div>
        <div className="languages">
          <h3>Languages/Technologies I Speak: </h3>
          <div className="languagesnames">
            <p>React JS</p>
            <p>Redux</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>PHP</p>
            <p>Java</p>
            <p>Git and Github</p>
            <p>MySQL</p>
            <p>Vanilla JS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
