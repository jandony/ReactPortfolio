import React from "react";

// Utility components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  boxSpacing: {
    height: "100%",
    width: "100%",
    padding: "15px",
  },
});

function UXGridBox() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <div className={classes.boxSpacing}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          style={{ backgroundColor: "lightgrey" }}
        >
          <Typography>Layout: Grid</Typography>
        </Box>
      </div>
    </Grid>
  );
}

export default UXGridBox;
