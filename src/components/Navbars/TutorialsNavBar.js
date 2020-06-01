import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

class NavBar extends Component {
  render() {
    console.log("NavBar - Rendered");
    return (
      <React.Fragment>
        <Box mb={1}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Chip
                label={
                  <Typography variant="h6">
                    {this.props.totalCounters}
                  </Typography>
                }
              ></Chip>
            </Toolbar>
          </AppBar>
        </Box>
      </React.Fragment>
    );
  }
}

export default NavBar;
