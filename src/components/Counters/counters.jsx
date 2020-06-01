import React, { Component } from "react";
import Counter from "../Counter/counter";
import Button from "../CustomButtons/Button.js";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
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
