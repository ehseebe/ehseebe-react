import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <span className="logo tracking-in-expand">
            <Link to="/">
              alyssa <br/>
              beaton <br/>
              tanguay <br/>
            </Link>
          </span>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/resume">
                resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/print">
                print
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
