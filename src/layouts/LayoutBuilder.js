import React from "react";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
// core components
import Navbar from "components/Navbars/Navbar.js";
import UXBuilder from "views/UXLayoutBuilder/UXLayoutBuilder";
// import Sidebars
import SidebarOptions from "components/Sidebar/SidebarOptions.js";

import bgImage from "assets/img/sidebar-2.jpg";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

import routes from "routes.js";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/ux") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

const useStyles = makeStyles(styles);

export default function UXLayoutBuilder({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [hero1, setHero1] = React.useState(false);
  const toggleHero1 = () => {
    setHero1(!hero1);
  };
  const [hero2, setHero2] = React.useState(false);
  const toggleHero2 = () => {
    setHero2(!hero2);
  };
  const [hero3, setHero3] = React.useState(false);
  const toggleHero3 = () => {
    setHero3(!hero3);
  };

  const [navSelected, setNav] = React.useState(null);
  const selectNav = (event) => {
    setNav(event.target.value);
    console.log(event.target.value);
  };

  const [heroSelected, setHero] = React.useState(null);
  const selectHero = (event) => {
    setHero(event.target.value);
    console.log(event.target.value);
  };

  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div id="ux-main" className={classes.wrapper}>
      <div id="ux-panel1">
        <SidebarOptions
          routes={routes}
          logoText={"UX Layout Builder"}
          logo={<AspectRatioIcon />}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          hero1={hero1}
          toggleHero1={toggleHero1}
          hero2={hero2}
          toggleHero2={toggleHero2}
          hero3={hero3}
          toggleHero3={toggleHero3}
          navSelected={navSelected}
          selectNav={selectNav}
          heroSelected={heroSelected}
          selectHero={selectHero}
          {...rest}
        />
      </div>
      <div id="ux-panel2" className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>
              <UXBuilder
                hero1={hero1}
                hero2={hero2}
                hero3={hero3}
                navSelected={navSelected}
                heroSelected={heroSelected}
              />
            </div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
    </div>
  );
}
