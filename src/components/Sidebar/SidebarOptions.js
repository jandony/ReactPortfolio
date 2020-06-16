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

// @material-ui/icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// core components
import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
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
      {/* <div>
        Header 1:
        <Switch checked={hero1} onChange={props.toggleHero1} />
      </div>
      <div>
        Header 2:
        <Switch checked={hero2} onChange={props.toggleHero2} />
      </div>
      <div>
        Header 3
        <Switch checked={hero3} onChange={props.toggleHero3} />
      </div> */}

      {/* <h3>Page Layout:</h3>
      <FormControl style={{ width: "100%" }} id={layoutSelected}>
        <InputLabel id="layout-select-label" style={{ color: "white" }}>
          1 - Select Page Layout
        </InputLabel>
        <Select
          labelId="layout-select-label"
          id="layout-select"
          value={layoutSelected}
          onChange={props.selectLayout}
          style={{ color: "white" }}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Single Column</MenuItem>
          <MenuItem value={2}>Split</MenuItem>
          <MenuItem value={3}>Asymmetrical</MenuItem>
          <MenuItem value={4}>Grid</MenuItem>
        </Select>
      </FormControl> */}

      <h3>1-Nav Type</h3>
      <FormControl style={{ width: "100%" }} id={navSelected}>
        <InputLabel id="nav-select-label" style={{ color: "white" }}>
          Select a Nav
        </InputLabel>
        <Select
          labelId="nav-select-label"
          id="nav-select"
          value={navSelected}
          onChange={props.selectNav}
          style={{ color: "white" }}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Top Nav</MenuItem>
          <MenuItem value={2}>Left Nav</MenuItem>
        </Select>
      </FormControl>

      <h3>2-Hero</h3>
      <FormControl style={{ width: "100%" }} id={heroSelected}>
        <InputLabel id="hero-select-label" style={{ color: "white" }}>
          Select a Hero
        </InputLabel>
        <Select
          labelId="hero-select-label"
          id="hero-select"
          value={heroSelected}
          onChange={props.selectHero}
          style={{ color: "white" }}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Hero 1</MenuItem>
          <MenuItem value={2}>Hero 2</MenuItem>
          <MenuItem value={3}>Hero 3</MenuItem>
        </Select>
      </FormControl>
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
