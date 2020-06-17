import React from "react";

// Material UI components
import Paper from "@material-ui/core/Paper";

const Portfolio1 = () => {
  return (
    <Paper
      style={{
        height: "75vh",
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 class={{ color: "white" }}> Portfolio 1</h1>
    </Paper>
  );
};

export default Portfolio1;
