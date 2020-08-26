import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//PAGES
import Home from "./pages/Home";
import MyLearningPath from "./pages/MyLearningPath";
import Projects from "./pages/Projects";

//COMPONENTS
import Navbar from "./components/Navbar";

//UTIL
import themeFile from "./util/themeFile";

//MUI STUFF
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/MyLearningPath" component={MyLearningPath} />

          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
