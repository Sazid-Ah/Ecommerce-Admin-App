import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import { useStyles } from "./HeaderStyles";
import { Blog } from "../BodyComponent/Blog";
// import Orders from "../BodyComponent/Orders";
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
  // const id = Orders();
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
     
    </div>
  );
}
