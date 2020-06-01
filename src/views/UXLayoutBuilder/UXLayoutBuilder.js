import React from "react";
import Button from "../../components/CustomButtons/Button.js";
import Box from "@material-ui/core/Box";
import BottomAppBar from "components/BottomAppBar/BottomeAppBar.js";

export default function UXLayoutMain() {
  return (
    <React.Fragment>
      <Box
        id="LayoutBuilderHeader"
        p={5}
        m={2}
        bgcolor="background.paper"
        style={{
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Page Header</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
      </Box>
      <h1>UX Layout Builder</h1>
      <Box p={5} m={2} bgcolor="background.paper">
        <Button>Add</Button>
      </Box>
      <BottomAppBar />
    </React.Fragment>
  );
}
