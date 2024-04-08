import { AppBar, Toolbar, Typography, Grid, Button, Box } from "@mui/material";
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
          marginBottom: "5px",
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
            paddingY: isMobile ? "18px" : 0,
            justifyContent: isMobile ? "center" : "space-between",
            flexDirection: "row",
          }}
        >
          <Grid
            item
            xs={1.5}
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
                marginTop: 5,
              }}
            />
          </Grid>
          <Grid
            item
            xs={8.5}
            sm={7}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
                  marginLeft: isMobile ? 0 : 0,
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.9)",
                }}
              >
                AUTHENTIC INDIAN CUISINE
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={3}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // paddingRight: "5px",
            }}
          >
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                fontFamily: "PT Sans Regular 400",
                cursor: "pointer",
                borderRadius: isMobile ? "10px" : "25px",
                // padding: isMobile ? "3px" : "7px",
                textDecoration: "none",

                textWrap: "nowrap",
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
              <Typography
                sx={{
                  fontSize: isMobile ? "8px" : "17px",
                  fontFamily: "PT Sans Regular 400",
                  fontWeight: "bold",
                }}
              >
                ORDER ONLINE
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
