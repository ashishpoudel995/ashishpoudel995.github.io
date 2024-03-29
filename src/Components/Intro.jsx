import React from "react";
import Illustration from "../images/illustration3.gif";
import Illustration1 from "../images/illustration2.png";

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <div className="IntroText">
          Full Stack Software Developer
          <p>Think - Design - Code</p>
        </div>
        <div className="introduction">
          <div className="intro-para">
            <h1>
              ABOUT <span>ME</span>
            </h1>
            <p>
              Hey, I'm <span>Ashish Poudel.</span> I'm currently working as an{" "}
              <span>Associate Software Engineer</span> at{" "}
              <span>Wibmo, a PayU Company</span> in the Access Control Server
              (ACS) Line of Business.
              <br />
              <br />
              I'm <span>passionate</span> to learn new tools and explore new
              domains.Currently, I'm invested in developing projects using
              Vert.x, Java and MySQL. During my spare hours, I play around with
              React JS, Typescript, Node JS and MongoDB.
            </p>
          </div>
          <div className="IntroPhoto">
            <img src={Illustration1} alt="Intro" />
          </div>
        </div>
        <div className="languages-container">
          <h3>Languages/Frameworks: </h3>
          <div className="illustration">
            <img src={Illustration} />
          </div>
          <div className="languages">
            <div className="languagesicons">
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
              <img src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png" />
              <img src="https://img.icons8.com/color/48/000000/redux.png" />
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" />
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
              <img src="https://img.icons8.com/color/48/000000/css3.png" />
              <img src="https://img.icons8.com/ios-filled/50/000000/php-logo.png" />
              <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.png" />
              <img src="https://img.icons8.com/color/48/000000/git.png" />
              <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
              <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
              <img src="https://img.icons8.com/color/48/000000/typescript.png" />
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
