import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import Accepted from "./Components/pages/orders/Accepted";
import { useStyles } from "./Components/Header/HeaderStyles";
import Items from "./Components/pages/items/Items";
import Brand from "./Components/pages/brands/Brand";
import AddItems from "./Components/pages/items/AddItems";
import Pending from "./Components/pages/orders/Pending";
import Addcategory from "./Components/pages/categories/Addcategory";
import SubCategory from "./Components/pages/categories/SubCategory";
import MasterCategories from "./Components/pages/mastercategories/MasterCategories";
import AddMasterCategory from "./Components/pages/mastercategories/AddMasterCategory";
import Notification from "./Components/BodyComponent/Notification";
import Logout from "./Components/BodyComponent/Logout";
import Dashboard from "./Components/BodyComponent/Dashboard/Dashboard";
import { Box } from "@material-ui/core";
import Login from "./Components/BodyComponent/Login";
import { useEffect, useState } from "react";
import Delivered from "./Components/pages/orders/Delivered";
import Addons from "./Components/pages/addons/Addons";
import EditAddons from "./Components/pages/addons/EditAddons";
import Attributs from "./Components/pages/attributes/Attributs";
import Unit from "./Components/pages/unit/Unit";
import GSTCalculator from "./Components/pages/items/Gst";
import AddVendor from "./Components/pages/vendor/AddVendor";
import EditMasterCategory from "./Components/pages/mastercategories/EditMasterCategory";
import ProductPage from "./Components/ProductPage";
import EditItem from "./Components/pages/items/EditItem";
import ViewOrder from "./Components/pages/orders/ViewOrder";
import Processing from "./Components/pages/orders/Processing";
import Item_on_the_way from "./Components/pages/orders/Item_on_the_way";
// import FullLayout from "./Components/Header/FullLayout";

function App() {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Check if the user is logged in (You can use your own logic here)
    const checkLoginStatus = () => {
      // Assuming you have some logic to check if the user is logged in
      const loggedIn = true; // Replace with your actual login check
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          {isLoggedIn ? (
            <Box className={classes.wrapper}>
              <HeaderComponent />
              {/* <FullLayout> */}
              <Switch>
                <Route exact path="/test" component={ProductPage} />
                <Route exact path="/add-vendor" component={AddVendor} />
                <Route exact path="/list" component={Items} />
                <Route exact path="/item/edit/:id" component={EditItem} />
                <Route exact path="/add-Item" component={AddItems} />
                <Route exact path="/brand" component={Brand} />
                <Route exact path="/gst" component={GSTCalculator} />
                <Route exact path="/add-category" component={Addcategory} />
                <Route exact path="/sub-category" component={SubCategory} />
                <Route exact path="/accepted-item" component={Accepted} />
                <Route exact path="/pending-item" component={Pending} />
                <Route exact path="/processing-item" component={Processing} />
                <Route
                  exact
                  path="/item-on-the-way"
                  component={Item_on_the_way}
                />
                <Route exact path="/delivered-item" component={Delivered} />
                <Route
                  exact
                  path="/order/order-details/:id"
                  component={ViewOrder}
                />
                <Route exact path="/addons" component={Addons} />
                <Route exact path="/addons/edit/:id" component={EditAddons} />
                <Route exact path="/attributes" component={Attributs} />
                <Route exact path="/unit" component={Unit} />
                <Route
                  exact
                  path="/master-categories"
                  component={MasterCategories}
                />
                <Route
                  exact
                  path="/add-master-category"
                  component={AddMasterCategory}
                />
                <Route
                  exact
                  path="/edit/mastercategory/:id"
                  component={EditMasterCategory}
                />
                <Route exact path="/notification" component={Notification} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
              <FooterComponent></FooterComponent>
              {/* </FullLayout> */}
            </Box>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
