import { Outlet } from "react-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
import { Container } from "reactstrap";

const Layout = () => {
  return (
    <main>
      <div className="pageWrapper full_page_wrapper d-lg-flex">
        <div className="contentArea">
          <Container className="p-4 wrapper" fluid>
            
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Layout;
