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
              Hey, I'm <span>Ashish Poudel.</span> I'm currently working as a{" "}
              <span> Software Engineer</span> at{" "}
              <span>PayU (Wibmo). </span>
              I've <span>2+ years of professional experience</span> in Fintech domain. I use
              Java, Spring Boot, Vert.x, Microservices architecture, Linux, Nginx, Kafka, MySQL,
              and React.js in my day to day work. <br /><br />I'm a <span>focused individual</span> with a
              proven track record of consistently delivering high-quality projects and prioritizing
              customer satisfaction. I'm recognized for efficient problem-solving and a strong commitment to work.
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
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" title="JavaScript"/>
              <img src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png" alt="ReactJS" title="React JS"/>
              <img src="https://img.icons8.com/color/48/000000/redux.png" alt="Redux" title="Redux"/>
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="NodeJS" title="Node JS"/>
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="MongoDB" title="Mongo DB"/>
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" title="HTML"/>
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" title="CSS"/>
              <img src="https://img.icons8.com/ios-filled/50/000000/php-logo.png" alt="PHP" title="PHP"/>
              <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.png" alt="Java" title="Java"/>
              <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" title="Git"/>
              <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" title="MySQL"/>
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Python" title="Python"/>
              <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++" title="C++"/>
              <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="Typescript" title="Typescript"/>
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" title="Bootstrap"/>
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" alt="Postman" title="Postman"/>
              <img src="https://img.icons8.com/color/48/nginx.png" title="Nginx" alt="nginx"/>
              <img src="https://img.icons8.com/nolan/64/apache-kafka.png" title="Kafka" alt="apache-kafka"/>
              <img src="https://img.icons8.com/color/48/redis--v1.png" title="Redis" alt="redis"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
