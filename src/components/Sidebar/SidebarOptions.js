/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "components/CustomButtons/Button";

// UX components
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Expansion Panel components
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// @material-ui/icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// core components
import "../../assets/css/custom.css";
import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();

  const [heroExpansionPanel, setHeroExpansion] = React.useState(false);
  const heroExpansionToggle = () => {
    setHeroExpansion(!heroExpansionPanel);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpansionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  const {
    color,
    logo,
    image,
    logoText,
    navSelected,
    heroSelected,
    heroSection,
    hiwSelected,
    hiwSection,
    featuresSelected,
    featuresSection,
    testimonialSelected,
    testimonialSection,
    portfolioSelected,
    portfolioSection,
  } = props;

  var brand = (
    <div className={classes.logo}>
      <a
        href="/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
      >
        <div className={classes.logoImage}>{logo}</div>
        {logoText}
      </a>
    </div>
  );

  var items = (
    <div
      style={{
        position: "relative",
        color: "white",
        zIndex: 4,
        padding: 20,
      }}
    >
      <h3>Select...</h3>

      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleExpansionChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>1. Page Navigation</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl style={{ width: "100%" }} id={navSelected}>
            <InputLabel id="nav-select-label">Navigation Layout:</InputLabel>
            <Select
              labelId="nav-select-label"
              id="nav-select"
              value={navSelected}
              onChange={props.selectNav}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Top Nav</MenuItem>
              <MenuItem value={2}>Left Nav</MenuItem>
            </Select>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleExpansionChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>2. Page Sections</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <FormControlLabel
              label="(a) Hero"
              control={
                <Checkbox
                  checked={props.heroSection}
                  onChange={props.toggleHeroSection}
                  name="heroA"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(b) How It Works"
              control={
                <Checkbox
                  checked={props.hiwSection}
                  onChange={props.toggleHIWSection}
                  name="howItWorksB"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(c) Features"
              control={
                <Checkbox
                  checked={props.featuresSection}
                  onChange={props.toggleFeaturesSection}
                  name="featuresC"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(d) Testimonials"
              control={
                <Checkbox
                  checked={props.testimonialSection}
                  onChange={props.toggleTestimonialSection}
                  name="testimonialsD"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(e) Portfolio"
              control={
                <Checkbox
                  checked={props.portfolioSection}
                  onChange={props.togglePortfolioSection}
                  name="portfolioE"
                  color="secondary"
                />
              }
            />
            {/* <FormControlLabel
              label="(f) Login"
              control={
                <Checkbox
                  checked="false"
                  onChange={handleChange}
                  name="loginF"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(g) Team"
              control={
                <Checkbox
                  checked="false"
                  onChange={handleChange}
                  name="teamG"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(h) Pricing"
              control={
                <Checkbox
                  checked="false"
                  onChange={handleChange}
                  name="pricingH"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(i) Contact"
              control={
                <Checkbox
                  checked="false"
                  onChange={handleChange}
                  name="contactI"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(j) Footer"
              control={
                <Checkbox
                  checked="false"
                  onChange={handleChange}
                  name="footerJ"
                  color="secondary"
                />
              }
            /> */}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleExpansionChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>3. Section Layouts</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails style={{ paddingTop: 0 }}>
          {heroSection && (
            <FormControl
              style={{ width: "100%", paddingTop: 0 }}
              id={heroSelected}
            >
              <InputLabel id="hero-select-label">Hero Layouts:</InputLabel>
              <Select
                labelId="hero-select-label"
                id="hero-select"
                value={heroSelected}
                onChange={props.selectHero}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Hero 1</MenuItem>
                <MenuItem value={2}>Hero 2</MenuItem>
                <MenuItem value={3}>Hero 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </ExpansionPanelDetails>

        <ExpansionPanelDetails style={{ paddingTop: 0 }}>
          {hiwSection && (
            <FormControl
              style={{ width: "100%", paddingTop: 0 }}
              id={hiwSelected}
            >
              <InputLabel id="hiw-select-label">HIW Layouts:</InputLabel>
              <Select
                labelId="hiw-select-label"
                id="hiw-select"
                value={hiwSelected}
                onChange={props.selectHIW}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>How It Works 1</MenuItem>
                <MenuItem value={2}>How It Works 2</MenuItem>
                <MenuItem value={3}>How It Works 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </ExpansionPanelDetails>

        <ExpansionPanelDetails style={{ paddingTop: 0 }}>
          {featuresSection && (
            <FormControl
              style={{ width: "100%", paddingTop: 0 }}
              id={featuresSelected}
            >
              <InputLabel id="features-select-label">
                Features Layouts:
              </InputLabel>
              <Select
                labelId="features-select-label"
                id="features-select"
                value={featuresSelected}
                onChange={props.selectFeatures}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Features 1</MenuItem>
                <MenuItem value={2}>Features 2</MenuItem>
                <MenuItem value={3}>Features 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </ExpansionPanelDetails>

        <ExpansionPanelDetails style={{ paddingTop: 0 }}>
          {testimonialSection && (
            <FormControl
              style={{ width: "100%", paddingTop: 0 }}
              id={testimonialSelected}
            >
              <InputLabel id="testimonials-select-label">
                Testimonial Layouts:
              </InputLabel>
              <Select
                labelId="testimonials-select-label"
                id="testimonials-select"
                value={testimonialSelected}
                onChange={props.selectTestimonial}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Testimonial 1</MenuItem>
                <MenuItem value={2}>Testimonial 2</MenuItem>
                <MenuItem value={3}>Testimonial 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </ExpansionPanelDetails>

        <ExpansionPanelDetails style={{ paddingTop: 0 }}>
          {portfolioSection && (
            <FormControl
              style={{ width: "100%", paddingTop: 0 }}
              id={portfolioSelected}
            >
              <InputLabel id="portfolio-select-label">
                Portfolio Layouts:
              </InputLabel>
              <Select
                labelId="portfolio-select-label"
                id="portfolio-select"
                value={portfolioSelected}
                onChange={props.selectPortfolio}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Portfolio 1</MenuItem>
                <MenuItem value={2}>Portfolio 2</MenuItem>
                <MenuItem value={3}>Portfolio 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleExpansionChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>4. Components</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel5"}
        onChange={handleExpansionChange("panel5")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5h-header"
        >
          <Typography>5. Functions</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <Button
        type="button"
        href="/"
        fullWidth="true"
        color="info"
        className="mt-5"
      >
        <ArrowBackIcon />
        Back to Dashboard
      </Button>
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          {items}
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          {items}
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  open: PropTypes.bool,
  hero1: PropTypes.bool,
  toggleHero1: PropTypes.func,
  hero2: PropTypes.bool,
  toggleHero2: PropTypes.func,
  hero3: PropTypes.bool,
  toggleHero3: PropTypes.func,
};
