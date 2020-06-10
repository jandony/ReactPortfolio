import React, { Component } from "react";
// important components
import Counters from "../../components/Counters/counters";
import NavBar from "../../components/Navbars/TutorialsNavBar";
import FixedTabs from "../../components/FixedTabs/FixedTabs";

class Tutorials extends Component {
  state = {
    counters: [{ id: 2, value: 4 }, { id: 1, value: 0 }, { id: 3, value: 0 }],
    totalBoxes: 3,
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <h2>Tutorial: React Basics</h2>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onSort={this.handleSort}
        />
        <h2>Tutorial: Tabs</h2>
        <FixedTabs />
      </React.Fragment>
    );
  }

  // -- Start of Lifted State Functions -- //

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const totalBoxes = this.state.totalBoxes;
    const newId = totalBoxes + 1;
    counters.push({ id: newId, value: 0 });
    this.setState({ counters, totalBoxes: newId });

    console.log(counters);
    console.log("Total Boxes: ", totalBoxes);
  };

  //   handleSort = () => {
  //     const counters = [...this.state.counters];
  //     counters.sort(function(a, b) {
  //       if (b.id < a.id) return -1;
  //     });
  //     this.setState({ counters });
  //   };

  // -- End of Lifted State Functions -- //
}

export default Tutorials;
