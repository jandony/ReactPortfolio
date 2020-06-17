import React from "react";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

// Hero components
import Hero0 from "../../components/Hero/Hero0";
import Hero1 from "../../components/Hero/Hero1";
import Hero2 from "../../components/Hero/Hero2";
import Hero3 from "../../components/Hero/Hero3";

// How It Works components
import HowItWorks0 from "../../components/HowItWorks/HowItWorks0";
import HowItWorks1 from "../../components/HowItWorks/HowItWorks1";
import HowItWorks2 from "../../components/HowItWorks/HowItWorks2";
import HowItWorks3 from "../../components/HowItWorks/HowItWorks3";

// Features components
import Features0 from "../../components/Features/Features0";
import Features1 from "../../components/Features/Features1";
import Features2 from "../../components/Features/Features2";
import Features3 from "../../components/Features/Features3";

// Testimonials components
// Portfolio components
// Login components
// Team components
// Pricing components
// Contact components
// Footer components

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      width: `79%`,
      marginLeft: drawerWidth,
      position: "absolute",
      top: "auto",
      right: "auto",
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    top: "auto",
    left: "auto",
    backgroundColor: "#232323",
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const toolbarLogo = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#555",
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div id="drawerLogo" className={classes.toolbar} style={toolbarLogo}>
        <Typography className={classes.title} variant="h6" noWrap>
          Left Navigation
        </Typography>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "white" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider style={{ backgroundColor: "#ffffff87" }} />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "white" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Paper style={{ minHeight: "100vh", marginBottom: "50px" }}>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar className={classes.appBar} style={{ backgroundColor: "#555" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Left Navigation
            </Typography>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden idName="latpopDrawer?" smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div id="toolbar" className={classes.toolbar} />
          {/* DOM => Hero Layouts */}
          {props.heroSection && props.heroSelected === 0 && <Hero0 />}
          {props.heroSection && props.heroSelected === 1 && <Hero1 />}
          {props.heroSection && props.heroSelected === 2 && <Hero2 />}
          {props.heroSection && props.heroSelected === 3 && <Hero3 />}
          <br />
          {/* DOM => How It Works Layouts */}
          {props.hiwSection && props.hiwSelected === 0 && <HowItWorks0 />}
          {props.hiwSection && props.hiwSelected === 1 && <HowItWorks1 />}
          {props.hiwSection && props.hiwSelected === 2 && <HowItWorks2 />}
          {props.hiwSection && props.hiwSelected === 3 && <HowItWorks3 />}
          <br />
          {/* DOM => Features Layouts */}
          {props.featuresSection && props.featuresSelected === 0 && (
            <Features0 />
          )}
          {props.featuresSection && props.featuresSelected === 1 && (
            <Features1 />
          )}
          {props.featuresSection && props.featuresSelected === 2 && (
            <Features2 />
          )}
          {props.featuresSection && props.featuresSelected === 3 && (
            <Features3 />
          )}
          <br />
          {/* DOM => Testimonials Layouts */}
          <br />
          {/* DOM => Portfolio Layouts */}
          <br />
          {/* DOM => Login Layouts */}
          <br />
          {/* DOM => Team Layouts */}
          <br />
          {/* DOM => Pricing Layouts */}
          <br />
          {/* DOM => Contact Layouts */}
          <br />
          {/* DOM => Footer Layouts */}
          <br />
        </main>
      </div>
    </Paper>
  );
}

export default ResponsiveDrawer;
