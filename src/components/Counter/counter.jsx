import React, { Component } from "react";
import Button from "../CustomButtons/Button.js";
import Box from "@material-ui/core/Box";

class Counter extends Component {
  zeroStyle = {
    color: "black",
  };

  tenStyle = {
    color: "green",
    fontWeight: "bold",
  };

  numberStyle = {
    color: "green",
  };

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        <Box
          id={this.props.counter.id}
          p={2}
          px={5}
          m={2}
          bgcolor="background.paper"
        >
          <h6>Counter {this.props.counter.id}</h6>
          <h3 style={this.changeNumberStyles()}>{this.formatValue()}</h3>
          <Button
            color="info"
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </Button>
          <Button
            color="info"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </Button>
          <Button
            color="danger"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </Button>
        </Box>
      </React.Fragment>
    );
  }

  changeNumberStyles() {
    let zero = this.zeroStyle;
    let number = this.numberStyle;
    let ten = this.tenStyle;
    let newClass =
      this.props.counter === 0
        ? zero
        : this.props.counter === 10
        ? ten
        : number;
    return newClass;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
