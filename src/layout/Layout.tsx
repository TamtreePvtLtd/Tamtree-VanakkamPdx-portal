import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Box from "@mui/material/Box";
import SecNavbar from "../pages/home/SecNavbar";

function Layout() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ paddingTop:"80px" }}>
        <Outlet />
      </Box>
      <Box>
        <SecNavbar/>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
