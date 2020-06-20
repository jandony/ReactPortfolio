import React, { Component } from "react";

// Icon components
import InfoIcon from '@material-ui/icons/Info';

// Material UI components
import Button from '@material-ui/core/Button';

// Custom components
import Counters from "../../components/Counters/counters";
import NavBar from "../../components/Navbars/TutorialsNavBar";
import FixedTabs from "../../components/FixedTabs/FixedTabs";
import RickandMortyAPI from "../../components/RickandMorty/RickandMorty";

class Tutorials extends Component {

  state = {
    counters: [{
      id: 2,
      value: 4
    }, {
      id: 1,
      value: 0
    }, {
      id: 3,
      value: 0
    }
    ],
    totalBoxes: 3,
    isOpen: false
  };

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleClickOpen() {
    console.log("Read More button clicked...");
    console.log(this.state.isOpen)
  }

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <h2>Tutorial: React Basics
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ marginLeft: "15px" }}
            onClick={this.handleClickOpen}
          >
            <InfoIcon style={{ marginRight: "5px" }} />
            Read more
          </Button></h2>
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
        <h2 className="mt-5">Tutorial: Rick and Morty API</h2>
        <RickandMortyAPI />
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

  // -- End of Lifted State Functions -- //
}

export default Tutorials;
