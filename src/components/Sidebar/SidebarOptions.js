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

  const [state, setState] = React.useState({
    heroA: true,
    howItWorksB: true,
    featuresC: true,
    testimonialsD: false,
    portfolioE: false,
    loginF: false,
    teamG: false,
    pricingH: false,
    contactI: false,
    footerJ: false,
  });

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
    hero1,
    hero2,
    hero3,
    navSelected,
    heroSelected,
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
      <Button type="button" href="/" fullWidth="true" color="info">
        <ArrowBackIcon />
        Back to Dashboard
      </Button>

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
            <InputLabel id="nav-select-label">-----</InputLabel>
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
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>2. Page Sections</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <FormControlLabel
              label="(A) Hero"
              control={
                <Checkbox
                  checked={state.heroA}
                  onChange={handleChange}
                  name="heroA"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(B) How it Works"
              control={
                <Checkbox
                  checked={state.howItWorksB}
                  onChange={handleChange}
                  name="howItWorksB"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(C) Features"
              control={
                <Checkbox
                  checked={state.featuresC}
                  onChange={handleChange}
                  name="featuresC"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(D) Testimonials"
              control={
                <Checkbox
                  checked={state.testimonialsD}
                  onChange={handleChange}
                  name="testimonialsD"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(E) Portfolio"
              control={
                <Checkbox
                  checked={state.portfolioE}
                  onChange={handleChange}
                  name="portfolioE"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(F) Login"
              control={
                <Checkbox
                  checked={state.loginF}
                  onChange={handleChange}
                  name="loginF"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(G) Team"
              control={
                <Checkbox
                  checked={state.teamG}
                  onChange={handleChange}
                  name="teamG"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(H) Pricing"
              control={
                <Checkbox
                  checked={state.pricingH}
                  onChange={handleChange}
                  name="pricingH"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(I) Contact"
              control={
                <Checkbox
                  checked={state.contactI}
                  onChange={handleChange}
                  name="contactI"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="(J) Footer"
              control={
                <Checkbox
                  checked={state.footerJ}
                  onChange={handleChange}
                  name="footerJ"
                  color="secondary"
                />
              }
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2.a"}
        onChange={handleExpansionChange("panel2.a")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2.abh-content"
          id="panel2.abh-header"
        >
          <Typography>2a. Hero</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl style={{ width: "100%" }} id={heroSelected}>
            <InputLabel id="hero-select-label">-----</InputLabel>
            <Select
              labelId="hero-select-label"
              id="hero-select"
              value={heroSelected}
              onChange={props.selectHero}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Hero 1</MenuItem>
              <MenuItem value={2}>Hero 2</MenuItem>
              <MenuItem value={3}>Hero 3</MenuItem>
            </Select>
          </FormControl>
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
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
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
