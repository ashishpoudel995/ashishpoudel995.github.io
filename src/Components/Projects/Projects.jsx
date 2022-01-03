import React, { useEffect, useState } from "react";
import { getRepos } from "../../utils/getRepos";
import { Loader } from "../Loader.jsx";

const Projects = (props) => {
  const [loading, setLoading] = useState(true);
  const [Projectlists, setProjectlists] = useState([]);

  const initialLoad = () => {
    getRepos().then((res) => {
      setProjectlists(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    initialLoad();
  }, []);

  const mapProjects = () => {
    if (Projectlists.length == 0) {
      return <div className="err">Opps, Couldn't retrieve Projects...</div>;
    } else {
      return Projectlists.map((Project) => {
        var bannerSrc =
          "https://github.com/ashishpoudel995/images/blob/main/" +
          Project.Title +
          ".png?raw=true";
        console.log(bannerSrc);
        if (Project.Demo) {
          return (
            <div className="card">
              <div className="banner">
                <img src={bannerSrc} />
              </div>
              <div className="title">
                <h5>{Project.Title}</h5>
              </div>
              <div className="Description">{Project.Description}</div>
              <div className="linksparent">
                <span className="links">
                  <i className="fab fa-github"></i>
                  <br />
                  <a href={Project.Link} target="_new">
                    Github Link
                  </a>
                </span>
                <span className="links">
                  <i className="fab fa-chrome"></i>
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
              <div className="banner">
                <img src={bannerSrc} />
              </div>
              <div className="title">
                <h5>{Project.Title}</h5>
              </div>
              <div className="Description">{Project.Description}</div>
              <span className="links">
                <i className="fab fa-github"></i>
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
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="projects-container">
      <div id="Projects">
        <h3>Personal Projects:</h3>
      </div>
      <div className="project">{mapProjects()}</div>
    </div>
  );
};

export default Projects;
