import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/game" component={Home} />
      <Route exact path="/game/about" component={About} />
    </div>
  </Router>
);

export default App;
