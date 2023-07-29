import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import { useStyles } from "./HeaderStyles";
import { Blog } from "../BodyComponent/Blog";
import ViewOrders from "../BodyComponent/ViewOrders";
import Artist from "../BodyComponent/Artist";
import Users from "../BodyComponent/Users";
import Products from "../BodyComponent/Products";
import AddMasterCategory from "../pages/mastercategories/AddMasterCategory";
import MasterCategories from "../pages/mastercategories/MasterCategories";
import Addcategory from "../pages/categories/Addcategory";
import SubCategory from "../pages/categories/SubCategory";
import AddItems from "../pages/items/AddItems";
import Brand from "../pages/brands/Brand";
import Items from "../pages/items/Items";
import Pending from "../pages/orders/Pending";
import Accepted from "../pages/orders/Accepted";
import Login from "../BodyComponent/Login";

export default function HeaderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (You can use your own logic here)
    const checkLoginStatus = () => {
      // Assuming you have some logic to check if the user is logged in
      const loggedIn = true; // Replace with your actual login check
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/login" render={() => <Login />} />
        {isLoggedIn ? (
          <Box className={classes.wrapper}>
            <Navbar handleDrawerOpen={handleDrawerOpen} />
            <Sidenav
              mobileOpen={mobileOpen}
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
            />
            <Switch>
              <Route exact path="/dashboard" render={() => <Dashboard />} />
              <Route exact path="/accepted-item" render={() => <Accepted />} />
              <Route exact path="/pending-item" render={() => <Pending />} />
              <Route exact path="/list" render={() => <Items />} />
              <Route exact path="/brand" render={() => <Brand />} />
              <Route exact path="/add-Item" render={() => <AddItems />} />
              <Route exact path="/add-category" render={() => <Addcategory />} />
              <Route exact path="/sub-category" render={() => <SubCategory />} />
              <Route
                exact
                path="/master-categories"
                render={() => <MasterCategories />}
              />
              <Route
                exact
                path="/add-master-category"
                render={() => <AddMasterCategory />}
              />
              <Route exact path="/notification" render={() => <Notification />} />
              <Route exact path="/logout" render={() => <Logout />} />
              <Redirect to="/dashboard" />
            </Switch>
          </Box>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </div>
  );
}
