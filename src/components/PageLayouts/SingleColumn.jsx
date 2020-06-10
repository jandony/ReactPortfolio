import React, { Component } from "react";

// Utility components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class SingleColumn extends Component {
  render() {
    return (
      <React.Fragment>
        <Paper
          style={{
            backgroundColor: "lightgrey",
            margin: "25px",
          }}
        >
          <Container maxWidth="md">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ height: "75vh", backgroundColor: "white" }}
            >
              <Typography>Layout: Single Column</Typography>
            </Box>
          </Container>
        </Paper>
      </React.Fragment>
    );
  }
}

export default SingleColumn;
