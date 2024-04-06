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
      <Toolbar
        sx={{
          padding: isMobile ? 1 : 0,
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid
          container
          spacing={2}
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
              alignItems: isMobile ? "center" : "center",
              justifyContent: "center",
              paddingLeft: isMobile ? 1 : 2,
            }}
          >
            <img
              src={VanakkamPdxLogo}
              alt="Logo"
              onClick={handleLogoClick}
              style={{
                height: "auto",
                width: isMobile ? "60px" : "70px",
                marginRight: isMobile ? 0 : 50,
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
              justifyContent: "center",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: "center",
              marginTop: 1,
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
                textWrap: "nowrap",
                marginTop: "1px",
                textShadow: "3px 1.5px 1px rgba(0, 0, 0, 0.9)",
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
                textWrap: "nowrap",
                marginLeft: isMobile ? 3 : 5,
                textShadow: "1px 1.5px 1px rgba(0, 0, 0, 0.9)",
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
                // fontFamily: "playfair Display",
                fontFamily: "PT Sans Regular 400",
                cursor: "pointer",
                lineHeight: 2,
                textAlign: "center",
                width: "75%",
                borderRadius: "25px",
                fontSize: isMobile ? "14px" : "17px",
                // textWrap: "wrap",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "green",
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
