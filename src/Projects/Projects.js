import React from "react";

class Projects extends React.Component {
  mapProjects() {
    const Projectlists = this.props.Projectlists;
    return Projectlists.map((Project) => {
      if (Project.Demo) {
        return (
          <div className="card">
            <div className="title">
              <h5>{Project.Title}</h5>
            </div>
            <div className="Description">{Project.Description}</div>
            <div className="linksparent">
              <span className="links">
                <i class="fab fa-github"></i>
                <br />
                <a href={Project.Link} target="_new">
                  Github Link
                </a>
              </span>
              <span className="links">
                <i class="fab fa-chrome"></i>
                <br />
                <a href={Project.Demo} target="_new">
                  Demo Link
                </a>
              </span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="card">
            <div className="title">
              <h5>{Project.Title}</h5>
            </div>
            <div className="Description">{Project.Description}</div>
            <span className="links">
              <i class="fab fa-github"></i>
              <br />
              <a href={Project.Link} target="_new">
                Github Link
              </a>
            </span>
          </div>
        );
      }
    });
  }
  render() {
    return (
      <div>
        <div id="Projects">
          <h1 data-text="Projects">Projects</h1>
        </div>
        <div className="project">{this.mapProjects()}</div>
      </div>
    );
  }
}

export default Projects;
