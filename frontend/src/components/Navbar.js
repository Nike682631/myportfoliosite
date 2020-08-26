import React from "react";
import { Link } from "react-router-dom";

//MUI STUFF
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="h3" component="h3">
            NG
          </Typography>
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/Projects"
          style={{
            left: "73%",
          }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/MyLearningPath"
          style={{
            left: "73%",
          }}
        >
          MyLearningPath
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
