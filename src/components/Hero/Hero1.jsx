import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "../CustomButtons/Button";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";

class Hero1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Box
          p={2}
          mx={2}
          bgcolor="background.paper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Jumbotron className="w-100 h-100 px-5 m-0">
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button color="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Box>
      </React.Fragment>
    );
  }
}

export default Hero1;
