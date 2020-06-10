import React, { Component } from "react";

// Utility components
import Box from "@material-ui/core/Box";

// UX Page Layout components
import SingleColumn from "../../components/PageLayouts/SingleColumn";
import Split from "../../components/PageLayouts/Split";
import Asymmetrical from "../../components/PageLayouts/Asymmetrical";
import UXGrid from "../../components/PageLayouts/UXGrid";

// Nav components
import Nav1 from "../../components/Navbars/Nav1";
import Nav2 from "../../components/Navbars/Nav2";
import Nav3 from "../../components/Navbars/Nav3";

// Hero components
import Hero1 from "../../components/Hero/Hero1";
import Hero2 from "../../components/Hero/Hero2";
import Hero3 from "../../components/Hero/Hero3";

class UXLayoutMain extends Component {
  render() {
    const ShowNav = () => {
      if (this.props.navSelected === 1) {
        return <Nav1 />;
      }

      if (this.props.navSelected === 2) {
        return <Nav2 />;
      }

      if (this.props.navSelected === 3) {
        return <Nav3 />;
      }

      return <h2>Select a Nav Type to begin!</h2>;
    };

    return (
      <React.Fragment>
        {/* <SingleColumn />
        <Split />
        <Asymmetrical />
        <UXGrid /> */}

        {/* DOM */}
        {this.props.hero1 && <Hero1 />}
        {this.props.hero2 && <Hero2 />}
        {this.props.hero3 && <Hero3 />}

        {/* DOM */}
        <Box mt={5}>
          <ShowNav />
          {this.props.heroSelected === 1 && <Hero1 />}
          {this.props.heroSelected === 2 && <Hero2 />}
          {this.props.heroSelected === 3 && <Hero3 />}
        </Box>
      </React.Fragment>
    );
  }

  toggleHero1 = () => {
    this.setState({
      Hero1: !this.state.Hero1,
    });
  };

  toggleHero2 = () => {
    this.setState({
      Hero2: !this.state.Hero2,
    });
  };

  toggleHero3 = () => {
    this.setState({
      Hero3: !this.state.Hero3,
    });
  };
}

export default UXLayoutMain;
