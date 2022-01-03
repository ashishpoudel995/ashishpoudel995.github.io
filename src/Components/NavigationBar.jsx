import React from "react";
import Logo from "../images/logo.png";
import Resume from "../files/Resume.pdf";
import { HashRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavigationBar extends React.Component {
  render() {
    const { location } = this.props;
    const homepath = location.pathname === "/" ? "active" : "";
    const projectspath = location.pathname === "/projects" ? "active" : "";
    const blogspath = location.pathname === "/blogs" ? "active" : "";

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <span className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Router>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${homepath}`}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${projectspath}`}>
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className={`nav-item ${blogspath}`}>
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Resume} target="_new">
                    <i className="far fa-file-pdf"></i>&nbsp;Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="mailto:ashishpoudel995@gmail.com"
                  >
                    Say Hello&nbsp;<i className="material-icons">waving_hand</i>
                  </a>
                </li>
              </ul>
            </div>
          </Router>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
