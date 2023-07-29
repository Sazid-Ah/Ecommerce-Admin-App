import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import { Container } from "reactstrap";
import { useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "../FooterComponent";

const FullLayout = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("use_info")) {
  //     navigate("/login");
  //   }
  // }, [navigate]);
  return (
    <div className="wrapper">
      <HeaderComponent />
      <Container>
        {/* <Sidenav /> */}
        {/* <Navbar /> */}
        {/* Render the content of the current route */}
        {/* <Outlet /> */}
        <FooterComponent />
      </Container>
    </div>
  );
};

export default FullLayout;
