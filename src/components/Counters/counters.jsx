import React, { Component } from "react";
import Counter from "../Counter/counter";
import Button from "../CustomButtons/Button.js";
import Box from "@material-ui/core/Box";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
        <Box px={5} p={2} mb={2} bgcolor="background.paper">
          <Button color="warning" onClick={this.props.onReset}>
            Reset
          </Button>
          <Button
            color="success"
            onClick={this.props.onAdd}
            style={{ float: "right" }}
          >
            Add Counter
          </Button>
          <Button
            color="dark"
            onClick={this.props.onSort}
            style={{ float: "right" }}
          >
            Sort: Asc
          </Button>
        </Box>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
