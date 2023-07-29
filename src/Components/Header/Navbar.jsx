import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import Notification from "./Navtabs/notification";
import { useStyles } from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./download.png";

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          {/* <img
            style={{ height: "50px", width: "180px" }}
            src={
              "https://zeevector.com/wp-content/uploads/Black-Barbie-Logo-PNG-VECTOR-file.png"
            }
          /> */}
          <h1 className="Fira Sans font-weight: 900;">Admin Panel...</h1>
        </Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
