import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Box from "@mui/material/Box";
import SecNavbar from "../pages/home/SecNavbar";
import { useMediaQuery } from "@mui/material";

function Layout() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ paddingTop:"80px" }}>
        <Outlet />
      </Box>
      <Box sx={{marginTop:isMobile? "15px" : 0}} >
        <SecNavbar/>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
