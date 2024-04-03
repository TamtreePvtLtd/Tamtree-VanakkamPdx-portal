import { Grid, AppBar, Button, Divider, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";

const commonButtonStyles = {
  color: "#6B0101",
   display: "flex",
  alignItems: "center",
  fontWeight:"bold",
  "&:hover": { backgroundColor: "#e4973d" },
};

const commonDividerStyles = {
  backgroundColor: "#fff",
 
};

const handleCloverClick = () => {
  window.open("http://www.clover.com/online-ordering/vanakkampdx");
};

const SecNavbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#e4973d", height: "100%", width: "100%" }}
    >
      <Grid
        container
        sx={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Grid
          item
          xs={12}
          lg={1.8}
          md={1.8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={() => navigate(paths.HOME)}
            sx={commonButtonStyles}
          >
            HOME
          </Button>
        </Grid>
        <Divider
          sx={{
            ...commonDividerStyles,
            marginTop: "5px",
            height: isMobile ? "1px" : "25px",
          }}
          orientation="vertical"
          flexItem
        />
        <Grid
          item
          xs={12}
          lg={1.8}
          md={1.8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={handleCloverClick}
            sx={commonButtonStyles}
          >
            DINING MENU
          </Button>
        </Grid>
        <Divider
          sx={{
            ...commonDividerStyles,
            marginTop: "5px",
            height: isMobile ? "1px" : "25px",
          }}
          orientation="vertical"
          flexItem
        />

        <Grid
          item
          xs={12}
          lg={1.8}
          md={1.8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={handleCloverClick}
            sx={commonButtonStyles}
          >
            TAKEOUT
          </Button>
        </Grid>
        <Divider
          sx={{
            ...commonDividerStyles,
            marginTop: "5px",
            height: isMobile ? "1px" : "25px",
          }}
          orientation="vertical"
          flexItem
        />

        <Grid
          item
          xs={12}
          lg={1.8}
          md={1.8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={() => navigate(paths.CATERING)}
            sx={commonButtonStyles}
          >
            CATERING
          </Button>
        </Grid>
        <Divider
          sx={{
            ...commonDividerStyles,
            marginTop: "5px",
            height: isMobile ? "1px" : "25px",
          }}
          orientation="vertical"
          flexItem
        />

        <Grid
          item
          xs={12}
          lg={1.8}
          md={1.8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={() => navigate(paths.ABOUTUS)}
            sx={commonButtonStyles}
          >
            ABOUT US
          </Button>
        </Grid>
        <Divider
          sx={{
            ...commonDividerStyles,
            marginTop: "5px",
            height: isMobile ? "1px" : "25px",
          }}
          orientation="vertical"
          flexItem
        />

        <Grid
          item
          xs={12}
          lg={1.8}
          md={1.8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            color="inherit"
            onClick={() => navigate(paths.CONTACTUS)}
            sx={commonButtonStyles}
          >
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default SecNavbar;
