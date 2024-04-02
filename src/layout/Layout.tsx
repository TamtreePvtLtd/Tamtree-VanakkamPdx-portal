import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import SecNavbar from "../pages/home/SecNavbar";

function Layout() {
  const theme = useTheme();
  const isBelowSMScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
