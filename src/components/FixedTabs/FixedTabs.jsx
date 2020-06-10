import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const checked = React.useState();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Zoom in={checked} timeout={500}>
            <Typography>{children}</Typography>
          </Zoom>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item md={12} lg={6}>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <h2>Title 1</h2>

          <img
            src="https://images.unsplash.com/photo-1525476325627-1380280dcfab?ixlib=rb-1.2.1"
            alt="photo1"
            height="100%"
            width="100%"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </p>

          <p>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2>Title 2</h2>

          <img
            src="https://images.unsplash.com/photo-1525905282907-588e48081d8b?ixlib=rb-1.2.1"
            alt="photo2"
            height="100%"
            width="100%"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </p>

          <p>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h2>Title 3</h2>

          <img
            src="https://images.unsplash.com/photo-1564633745055-0b344f158784?ixlib=rb-1.2.1"
            alt="photo3"
            height="100%"
            width="100%"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </p>

          <p>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
        </TabPanel>
      </div>
    </Grid>
  );
}
