import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import PrintList from "./PrintList";
import Resume from './Resume';
import Home from './Home';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <figure className="logo">
            <a href="/">
        <img src="/images/nav/alyssa-bt-logo-grey.png" />
        </a>
        </figure>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/resume">
              <img src="/images/nav/alyssa-bt-resume.png" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                <img src="/images/nav/alyssa-bt-projects.png" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/print">
              <img src="/images/nav/alyssa-bt-print.png" />
              </Link>
            </li>
          </ul>
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
