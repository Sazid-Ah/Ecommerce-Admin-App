import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
// import { NavLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ContactsIcon from "@mui/icons-material/Contacts";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import $ from "jquery";
import { BiBuilding } from "react-icons/bi";
import { CategorySharp } from "@material-ui/icons";
import { IconBase, IconContext } from "react-icons";

$(document).on("click", ".toggler", function () {
  $(this).find("i").toggleClass("open_i");
  $(this).next("ul").slideToggle(500);
});

export default function SidenavData({ handleDrawerClose }) {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const classes = useStyles();
  return (
    <div>
      <section>
        <div className="container-fluid m-0 p-0">
          <NavLink
            activeclassName="active"
            to="/dashboard"
            className="nav-link text-secondary py-3"
          >
            <i className="bi bi-speedometer2"></i>
            <DashboardIcon />
            <span className="ms-3 d-inline-block">Dashboard</span>
          </NavLink>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler w-100 border-0 shadow-none text-black fw-bold my-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Open
                <i className="fa-solid fa-arrow-down-short-wide ms-2"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="container-fluid m-0 p-0 d-flex flex-column">
                  <div
                    className="container-fluid m-0 p-0"
                    // style="overflow-y: scroll; scroll-behavior: smooth;scrollbar-base-color: transparent;height: 600px;"
                  >
                    <div
                      className="container-fluid d-block m-0 p-0"
                      //  style="white-space: nowrap;"
                    >
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        {/* ----------------Drop Down Master Category -------------------------------- */}

                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <p style={{ fontSize: 13 }}>
                            MASTER CATEGORY MANAGEMENT
                          </p>
                          <h6 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse3"
                              aria-expanded="true"
                              aria-controls="collapse3"
                            >
                              Master Category
                            </button>
                          </h6>
                          <div
                            id="collapse3"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                <NavLink
                                  activeclassName="active"
                                  to="/add-master-category"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Add Master Category
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Master Categories
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Pos -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <p style={{ fontSize: 13 }}>VENDOR MANAGEMENT</p>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2"
                              aria-expanded="true"
                              aria-controls="collapse2"
                            >
                              Vendor
                            </button>
                          </h2>
                          <div
                            id="collapse2"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/add-vendor"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Add Vendor
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/vendor-list"
                                  className="text-decoration-none text-dark"
                                >
                                  <DashboardIcon />
                                  <i className="bi bi-speedometer2"></i>
                                  <span className="ms-3 d-inline-block">
                                    List of Vendors
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Orders-------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <p style={{ fontSize: 13 }}> ORDER SECTION</p>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse4"
                              aria-expanded="true"
                              aria-controls="collapse4"
                            >
                              Orders
                            </button>
                          </h2>
                          <div
                            id="collapse4"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/pending-item"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Pending
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/accepted-item"
                                  className="text-decoration-none text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Accepted
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/processing-item"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Processing
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/item-on-the-way"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Item On The Way
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/delivered-item"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Delivered
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/canceled-item"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Canceled
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/payment-failed"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Payment Failed
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/scheduled-item"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Scheduled
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/all-orders-item"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    All
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0  ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Dispatch Management-------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse5"
                              aria-expanded="true"
                              aria-controls="collapse5"
                            >
                              Dispatch Management
                            </button>
                          </h2>
                          <div
                            id="collapse5"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/add-master-category"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Searching Delivery...
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Ongoing Orders
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Parcel -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse6"
                              aria-expanded="true"
                              aria-controls="collapse6"
                            >
                              Parcel
                            </button>
                          </h2>
                          <div
                            id="collapse6"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                <NavLink
                                  activeclassName="active"
                                  to="/add-master-category"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Parcel Category
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Parcel Orders
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Parcel Settings
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Categories -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <p style={{ fontSize: 13 }}>ITEM MANAGEMENT</p>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse8"
                              aria-expanded="true"
                              aria-controls="collapse8"
                            >
                              Categories
                            </button>
                          </h2>
                          <div
                            id="collapse8"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/add-category"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Category
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/sub-category"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Sub Category
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Brands -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse9"
                              aria-expanded="true"
                              aria-controls="collapse9"
                            >
                              Brands
                            </button>
                          </h2>
                          <div
                            id="collapse9"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/brand"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Brand
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                {/* <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Brands
                                  </span>
                                </NavLink> */}
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Attributes -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse15"
                              aria-expanded="true"
                              aria-controls="collapse15"
                            >
                              Attributes
                            </button>
                          </h2>
                          <div
                            id="collapse15"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/attributes"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Attributes
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                {/* <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Brands
                                  </span>
                                </NavLink> */}
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Units -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse16"
                              aria-expanded="true"
                              aria-controls="collapse16"
                            >
                              Unit
                            </button>
                          </h2>
                          <div
                            id="collapse16"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/unit"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Unit
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                {/* <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Brands
                                  </span>
                                </NavLink> */}
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Addons -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse17"
                              aria-expanded="true"
                              aria-controls="collapse17"
                            >
                              Addons
                            </button>
                          </h2>
                          <div
                            id="collapse17"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/addons"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Addons
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                {/* <NavLink
                                  activeclassName="active"
                                  to="/master-categories"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    Brands
                                  </span>
                                </NavLink> */}
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------------Drop Down Items -------------------------------- */}
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0 ">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse10"
                              aria-expanded="true"
                              aria-controls="collapse10"
                            >
                              Items
                            </button>
                          </h2>
                          <div
                            id="collapse10"
                            className="accordion-collapse collapse align"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="button"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  <p className="my-auto">Check</p>
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/add-Item"
                                  className="text-decoration-none text-dark"
                                  // className="nav-link text-secondary py-3"
                                >
                                  <i className="bi bi-speedometer2"></i>
                                  <DashboardIcon />
                                  <span className="ms-2 d-inline-block">
                                    Add New
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center m-0 p-0">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                                <NavLink
                                  activeclassName="active"
                                  to="/list"
                                  className="text-dark"
                                >
                                  <DashboardIcon />
                                  <span className="ms-3 d-inline-block">
                                    List
                                  </span>
                                </NavLink>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                {/* <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                /> */}
                                {/* <label className="form-check-label" for="flexCheck">
                                  checkbox
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none  bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseeight"
                              aria-expanded="false"
                              aria-controls="collapseeight"
                            >
                              work{" "}
                            </button>
                          </h2>
                          <div
                            id="collapseeight"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none  bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsenine"
                              aria-expanded="false"
                              aria-controls="collapsenine"
                            >
                              price{" "}
                            </button>
                          </h2>
                          <div
                            id="collapsenine"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none  bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseten"
                              aria-expanded="false"
                              aria-controls="collapseten"
                            >
                              discount{" "}
                            </button>
                          </h2>
                          <div
                            id="collapseten"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none  bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseeleven"
                              aria-expanded="false"
                              aria-controls="collapseeleven"
                            >
                              availabilty{" "}
                            </button>
                          </h2>
                          <div
                            id="collapseeleven"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border border-1 border-black border-start-0 border-end-0 border-top-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button shadow-none  bg-white collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsetwelve"
                              aria-expanded="false"
                              aria-controls="collapsetwelve"
                            >
                              sizes{" "}
                            </button>
                          </h2>
                          <div
                            id="collapsetwelve"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="form-check d-flex align-items-center ms-3   ">
                                <input
                                  className="form-check-input fs-4 border border-1 border-black shadow-none mb-2 mx-3"
                                  type="checkbox"
                                  value=""
                                  id="flexCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheck"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    {/* <button className="btn btn-danger w-75 my-2 ">
                      Apply Filters
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
