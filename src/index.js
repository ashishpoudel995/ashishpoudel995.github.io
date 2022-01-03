import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./Components/HomePage.jsx";
import NavigationBar from "./Components/NavigationBar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import { Blogs } from "./Components/Blogs/Blogs.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
        </Switch>
      </Router>
      <ContactUs />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
