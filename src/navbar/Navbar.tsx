import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VanakkamPdxLogo from "../../src/assets/Vanakkam Pdx Logo.png";
import { paths } from "../router/paths";
import { useMediaQuery } from "@mui/material";

function Navbar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:700px)"); 
  const handleLogoClick = () => {
    navigate(paths.ROOT);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#E4973C",
        padding: isMobile ? 1 : 1,
        boxShadow: 0,
        margin: 0,
        width: "100%",
        height: "85px",
      }}
    >
      <Toolbar>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingY: isMobile ? 2 : 0,
            justifyContent: isMobile ? "center" : "space-between",
            flexDirection: "row",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              alignItems: isMobile ? "start" : "center",
              justifyContent: "center",
              paddingLeft: 2,
            }}
          >
            <img
              src={VanakkamPdxLogo}
              alt="Logo"
              onClick={handleLogoClick}
              style={{
                height: "auto",
                width: "70px",
                marginRight:isMobile ? 0 : 50,
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            md={8}
            lg={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "flex-start"
            }}
          >
            <Typography
              variant="h5"
              component="div"
              onClick={handleLogoClick}
              sx={{
                color: "#ffffff",
                fontFamily: "alfa_slab_one",
                fontWeight: "950",
                textAlign: "center",
                cursor: "pointer",
                textWrap:"nowrap"
              }}
            >
              VANAKKAM PDX
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "green",
                fontSize: isMobile ? "12px" : "none",
                fontWeight: "950",
                fontFamily: "alfa_slab_one",
                textAlign: "center",
                textWrap:"nowrap",
                marginLeft: isMobile ? 3 : 5,
              }}
            >
              - AUTHENTIC INDIAN CUISINE
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#6B0101",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                lineHeight: 1.3,
                fontSize: isMobile ? "14px" : "17px",
                // textWrap: "wrap",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#6B0101",
                  color: "white",
                },
              }}
              component="a"
              href="http://www.clover.com/online-ordering/vanakkampdx"
              target="_blank"
              rel="noopener noreferrer"
            >
              ORDER ONLINE
            </Button>
            {/* <Typography
              color="#6B0101"
              sx={{
                cursor: "pointer",
                fontSize: isMobile ? "14px" : "17px",
                textWrap: isMobile ? "wrap" :"nowrap",
                textDecoration: "none",
                marginLeft:isMobile ? 5 : 0,
                "&:hover": { color: "green", textDecoration: "none" },
              }}
              component="a"
              href="http://www.clover.com/online-ordering/vanakkampdx"
              target="_blank"
              rel="noopener noreferrer"
            >
              ORDER ONLINE
            </Typography> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
