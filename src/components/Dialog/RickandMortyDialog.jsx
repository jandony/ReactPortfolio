import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

// Icon components
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RickandMortyDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ marginLeft: "15px" }}
        onClick={handleClickOpen}
      >
        <InfoIcon style={{ marginRight: "5px" }} />
        Read more
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="rickandmorty-dialog-title"
        open={open}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="rickandmorty-dialog-title" onClose={handleClose}>
          Rick and Morty API Overview
        </DialogTitle>
        <DialogContent dividers>
          <h3>Goal:</h3>
          <Typography gutterBottom>
            <ul>
              <li>
                Learn the Rick and Morty API and apply it into react app using
                Material UI Components.
              </li>
            </ul>
          </Typography>
          <h3>Obstacles:</h3>
          <Typography gutterBottom>
            <ul>
              <li>
                Learned that you cannot output React components using the .map()
                method.
              </li>
            </ul>
          </Typography>
          <h3>Solutions:</h3>
          <Typography gutterBottom>
            <ul>
              <li>Included React Bootstrap to create the character cards.</li>
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
