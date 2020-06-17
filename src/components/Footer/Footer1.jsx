import React from "react";

// Material UI components
import Paper from "@material-ui/core/Paper";

const Footer1 = () => {
  return (
    <Paper
      style={{
        height: "75vh",
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <h1 class={{ color: "white" }}>Footer 1</h1>
    </Paper>
  );
};

export default Footer1;
