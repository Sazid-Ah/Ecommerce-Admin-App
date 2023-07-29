import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  toggler: {
    Zindex: "99",
    position: "absolute",
    right: "10px",
    top: "15px",
    width: "30px",
    height: "30px",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  appBar: {
    backgroundColor: "black",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  logo: {
    color: "white",
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvater: {
    backgroundColor: blue["A200"],
    color: "white",
  },
  navAvatar: {
    width: "35px",
    height: "35px",
  },

  //wrapper of main contianer
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "#efefef",
    marginTop: "60px",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
      marginTop: "45px",
    },
  },

  //Side nav
  drawerPaper: {
    width: "270px",
    height: "92vh",
    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      marginTop: "65px",
    },
  },
  navlinks: {
    color: blueGrey["A400"],

    "& :hover , &:hover div": {
      color: grey["900"],
    },

    " & div": {
      color: blueGrey["A400"],
    },
  },
  activeNavlinks: {
    color: grey["900"],
    "& div": {
      color: grey["900"],
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
    color: "black",
  },
}));
