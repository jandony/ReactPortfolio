import React, { Component } from "react";

// Utility components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Split extends Component {
  render() {
    return (
      <React.Fragment>
        <Paper
          style={{
            backgroundColor: "lightgrey",
            margin: "25px",
          }}
        >
          <Grid container style={{ height: "75vh", backgroundColor: "white" }}>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography>Layout: Split</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style={{ backgroundColor: "lightgrey" }}
              >
                <Typography>Layout: Split</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Split;
