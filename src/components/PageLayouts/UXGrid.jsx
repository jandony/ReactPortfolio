import React, { Component } from "react";

// Utility components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Custom components
import UXGridBox from "../UXGridBox/UXGridBox";

class UXGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <Paper
          style={{
            backgroundColor: "lightgrey",
            margin: "25px",
          }}
        >
          <Grid
            container
            style={{
              height: "75vh",
              backgroundColor: "white",
            }}
          >
            <UXGridBox />
            <UXGridBox />
            <UXGridBox />
            <UXGridBox />

            <UXGridBox />
            <UXGridBox />
            <UXGridBox />
            <UXGridBox />
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}

export default UXGrid;
