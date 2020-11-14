import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import PrintList from "./PrintList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/print">Print</Link>
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
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
