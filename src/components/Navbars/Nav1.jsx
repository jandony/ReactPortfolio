import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

// Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";

// Custom components

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
import Testimonials0 from "../../components/Testimonials/Testimonials0";
import Testimonials1 from "../../components/Testimonials/Testimonials1";
import Testimonials2 from "../../components/Testimonials/Testimonials2";
import Testimonials3 from "../../components/Testimonials/Testimonials3";

// Portfolio components
import Portfolio0 from "../../components/Portfolio/Portfolio0";
import Portfolio1 from "../../components/Portfolio/Portfolio1";
import Portfolio2 from "../../components/Portfolio/Portfolio2";
import Portfolio3 from "../../components/Portfolio/Portfolio3";

// Login components
import Login0 from "../../components/Login/Login0";
import Login1 from "../../components/Login/Login1";
import Login2 from "../../components/Login/Login2";
import Login3 from "../../components/Login/Login3";

// Team components
import Team0 from "../../components/Team/Team0";
import Team1 from "../../components/Team/Team1";
import Team2 from "../../components/Team/Team2";
import Team3 from "../../components/Team/Team3";

// Pricing components
import Pricing0 from "../../components/Pricing/Pricing0";
import Pricing1 from "../../components/Pricing/Pricing1";
import Pricing2 from "../../components/Pricing/Pricing2";
import Pricing3 from "../../components/Pricing/Pricing3";

// Contact components
import Contact0 from "../../components/Contact/Contact0";
import Contact1 from "../../components/Contact/Contact1";
import Contact2 from "../../components/Contact/Contact2";
import Contact3 from "../../components/Contact/Contact3";

// Footer components
import Footer0 from "../../components/Footer/Footer0";
import Footer1 from "../../components/Footer/Footer1";
import Footer2 from "../../components/Footer/Footer2";
import Footer3 from "../../components/Footer/Footer3";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Nav1 = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  console.log(props);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Paper style={{ minHeight: "100vh", marginBottom: "50px" }}>
      <div className={classes.grow}>
        <AppBar position="static" style={{ backgroundColor: "#555" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Top Navigation
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

      {/* DOM => Hero Layouts */}
      {props.heroSection && props.heroSelected === 0 && <Hero0 />}
      {props.heroSection && props.heroSelected === 1 && <Hero1 />}
      {props.heroSection && props.heroSelected === 2 && <Hero2 />}
      {props.heroSection && props.heroSelected === 3 && <Hero3 />}

      {/* DOM => How It Works Layouts */}
      {props.hiwSection && props.hiwSelected === 0 && <HowItWorks0 />}
      {props.hiwSection && props.hiwSelected === 1 && <HowItWorks1 />}
      {props.hiwSection && props.hiwSelected === 2 && <HowItWorks2 />}
      {props.hiwSection && props.hiwSelected === 3 && <HowItWorks3 />}

      {/* DOM => Features Layouts */}
      {props.featuresSection && props.featuresSelected === 0 && <Features0 />}
      {props.featuresSection && props.featuresSelected === 1 && <Features1 />}
      {props.featuresSection && props.featuresSelected === 2 && <Features2 />}
      {props.featuresSection && props.featuresSelected === 3 && <Features3 />}

      {/* DOM => Testimonials Layouts */}
      {props.testimonialSection && props.testimonialSelected === 0 && (
        <Testimonials0 />
      )}
      {props.testimonialSection && props.testimonialSelected === 1 && (
        <Testimonials1 />
      )}
      {props.testimonialSection && props.testimonialSelected === 2 && (
        <Testimonials2 />
      )}
      {props.testimonialSection && props.testimonialSelected === 3 && (
        <Testimonials3 />
      )}
      {/* DOM => Portfolio Layouts */}
      {props.portfolioSection && props.portfolioSelected === 0 && (
        <Portfolio0 />
      )}
      {props.portfolioSection && props.portfolioSelected === 1 && (
        <Portfolio1 />
      )}
      {props.portfolioSection && props.portfolioSelected === 2 && (
        <Portfolio2 />
      )}
      {props.portfolioSection && props.portfolioSelected === 3 && (
        <Portfolio3 />
      )}

      {/* DOM => Login Layouts */}
      {props.loginSection && props.loginSelected === 0 && <Login0 />}
      {props.loginSection && props.loginSelected === 1 && <Login1 />}
      {props.loginSection && props.loginSelected === 2 && <Login2 />}
      {props.loginSection && props.loginSelected === 3 && <Login3 />}

      {/* DOM => Team Layouts */}
      {props.teamSection && props.teamSelected === 0 && <Team0 />}
      {props.teamSection && props.teamSelected === 1 && <Team1 />}
      {props.teamSection && props.teamSelected === 2 && <Team2 />}
      {props.teamSection && props.teamSelected === 3 && <Team3 />}

      {/* DOM => Pricing Layouts */}
      {props.pricingSection && props.pricingSelected === 0 && <Pricing0 />}
      {props.pricingSection && props.pricingSelected === 1 && <Pricing1 />}
      {props.pricingSection && props.pricingSelected === 2 && <Pricing2 />}
      {props.pricingSection && props.pricingSelected === 3 && <Pricing3 />}

      {/* DOM => Contact Layouts */}
      {props.contactSection && props.contactSelected === 0 && <Contact0 />}
      {props.contactSection && props.contactSelected === 1 && <Contact1 />}
      {props.contactSection && props.contactSelected === 2 && <Contact2 />}
      {props.contactSection && props.contactSelected === 3 && <Contact3 />}

      {/* DOM => Footer Layouts */}
      {props.footerSection && props.footerSelected === 0 && <Footer0 />}
      {props.footerSection && props.footerSelected === 1 && <Footer1 />}
      {props.footerSection && props.footerSelected === 2 && <Footer2 />}
      {props.footerSection && props.footerSelected === 3 && <Footer3 />}
    </Paper>
  );
};

export default Nav1;
