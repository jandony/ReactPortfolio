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
        console.log(this.props);
        return <Nav1 heroSelected={this.props.heroSelected} />;
      }

      if (this.props.navSelected === 2) {
        return <Nav2 heroSelected={this.props.heroSelected} />;
      }

      if (this.props.navSelected === 3) {
        return <Nav3 heroSelected={this.props.heroSelected} />;
      }

      return <h2>Select a Page Navigation to begin!</h2>;
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
        </Box>
      </React.Fragment>
    );
  }
}

export default UXLayoutMain;
