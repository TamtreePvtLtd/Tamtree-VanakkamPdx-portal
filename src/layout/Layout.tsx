import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Grid from "@mui/material/Grid";
import SecNavbar from "../pages/home/SecNavbar";

function Layout() {
  return (
    <>
      <Grid>
        <NavBar />
      </Grid>
      <Grid sx={{ paddingTop:"80px" }}>
        <Outlet />
      </Grid>
      <Grid>
        <SecNavbar/>
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default Layout;
