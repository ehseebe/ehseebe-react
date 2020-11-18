import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";
import ProjectList from "./ProjectList";
import PrintList from "./PrintList";
import Resume from "./Resume";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-body">
        <nav>
          <span className="logo">
            <Link to="/">
              alyssa <br />
              beaton <br />
              tanguay <br />
            </Link>
          </span>
          <span className="nav-right-side">
            <ul className="nav-items">
              <li className="nav-item">
                <Link to="/resume">resume</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/print">print</Link>
              </li>
            </ul>
            <div className="social-icons">
              <div className="icon">
                <a href="https://www.github.com/ehseebe" target="_blank">
                  <img src="/images/nav/github.png" />
                </a>
              </div>

              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/alyssa-beaton-tanguay-51a057138/"
                  target="_blank"
                >
                  <img src="/images/nav/linkedin.png" />
                </a>
              </div>
            </div>
          </span>
        </nav>
        <Switch>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/print">
            <PrintList />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ScrollArrow />
      </div>
      <footer className="footer"></footer>
    </Router>
  );
};

export default App;
