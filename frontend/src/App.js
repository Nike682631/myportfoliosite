import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import MyLearningPath from "./pages/MyLearningPath";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/MyLearningPath" component={MyLearningPath} />

        <Route exact path="/Projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
