import React from "react";

// Material UI components
import Paper from "@material-ui/core/Paper";

const Team0 = () => {
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
      <h1 class={{ color: "white" }}> Team </h1>
    </Paper>
  );
};

export default Team0;
