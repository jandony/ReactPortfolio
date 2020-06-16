import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "../CustomButtons/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "../../assets/css/custom.css";

// Img imports
import twoIphones from "../../assets/img/products/2-iPhones.png";

// Icon components
import MessageIcon from "@material-ui/icons/Message";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import StoreIcon from "@material-ui/icons/Store";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";

class Hero1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Box
          pt={1}
          mx={0}
          style={{
            display: "flex",
          }}
        >
          <Jumbotron
            className="w-100 m-0"
            style={{
              minHeight: "75vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <Container maxWidth="md">
              <Grid container spacing={3}>
                {/* Row 1 */}
                <Grid item sm={12} className="text-center">
                  <h1>
                    <b>Your New Product is Here!</b>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed.
                  </p>
                </Grid>

                {/* Row 2 (1/2) */}
                <Grid item sm={12} md={6}>
                  <img
                    src={twoIphones}
                    alt="Two iphones"
                    width="100%"
                    height="auto"
                  />
                </Grid>

                {/* Row 2 2/2 */}
                <Grid
                  item
                  sm={12}
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div id="iconBtnContainer" className="my-2">
                    <Button
                      color="primary"
                      className="css
                      m-2"
                      style={{ padding: "30px", borderRadius: "50%" }}
                    >
                      <MessageIcon style={{ height: "30px", width: "30px" }} />
                    </Button>
                    <Button
                      color="primary"
                      className="m-2"
                      style={{ padding: "30px", borderRadius: "50%" }}
                    >
                      <TouchAppIcon style={{ height: "30px", width: "30px" }} />
                    </Button>
                    <Button
                      color="primary"
                      className="m-2"
                      style={{ padding: "30px", borderRadius: "50%" }}
                    >
                      <VolumeUpIcon style={{ height: "30px", width: "30px" }} />
                    </Button>
                  </div>
                  <p className="mt-2 mb-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et
                  </p>
                  <div id="callToActionBtns">
                    <Button color="primary" className="m-2">
                      <StoreIcon />
                      App Store
                    </Button>
                    <Button color="primary" className="m-2">
                      <PlayArrowIcon />
                      Google Play
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Jumbotron>
        </Box>
      </React.Fragment>
    );
  }
}

export default Hero1;
