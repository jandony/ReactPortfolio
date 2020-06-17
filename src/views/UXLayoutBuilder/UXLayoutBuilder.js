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

class UXLayoutMain extends Component {
  render() {
    const ShowNav = () => {
      if (this.props.navSelected === 1) {
        // console.log(this.props);
        return (
          <Nav1
            heroSelected={this.props.heroSelected}
            heroSection={this.props.heroSection}
            hiwSelected={this.props.hiwSelected}
            hiwSection={this.props.hiwSection}
            featuresSelected={this.props.featuresSelected}
            featuresSection={this.props.featuresSection}
            testimonialSelected={this.props.testimonialSelected}
            testimonialSection={this.props.testimonialSection}
            portfolioSelected={this.props.portfolioSelected}
            portfolioSection={this.props.portfolioSection}
          />
        );
      }

      if (this.props.navSelected === 2) {
        return (
          <Nav2
            heroSelected={this.props.heroSelected}
            heroSection={this.props.heroSection}
            hiwSelected={this.props.hiwSelected}
            hiwSection={this.props.hiwSection}
            featuresSelected={this.props.featuresSelected}
            featuresSection={this.props.featuresSection}
            testimonialSelected={this.props.testimonialSelected}
            testimonialSection={this.props.testimonialSection}
            portfolioSelected={this.props.portfolioSelected}
            portfolioSection={this.props.portfolioSection}
          />
        );
      }

      if (this.props.navSelected === 3) {
        return (
          <Nav3
            heroSelected={this.props.heroSelected}
            heroSection={this.props.heroSection}
          />
        );
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
        <Box mt={5}>
          <ShowNav />
        </Box>
      </React.Fragment>
    );
  }
}

export default UXLayoutMain;
