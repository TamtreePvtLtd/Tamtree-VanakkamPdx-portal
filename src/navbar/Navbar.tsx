import { AppBar, Toolbar, Typography, Grid, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VanakkamPdxLogo from "../../src/assets/Vanakkam Pdx Logo.png";
import { paths } from "../router/paths";
import { useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function Navbar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:1024px)");
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
              src={"/src/assets/Vanakkam pdx  logo 2.png"}
              alt="Logo"
              onClick={handleLogoClick}
              style={{
                height: "auto",
                width: isMobile ? "60px" : "85px",
                marginRight: isMobile ? 0 : 50,
                cursor: "pointer",
                // backgroundColor: "white",
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
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "flex-start",
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
                  color: "#6ebe44",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginLeft: isMobile ? 0 : (isMedium ? "120px" : "270px"),
                marginTop: isMobile ? 0 : 2.5,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 0.2,
                  color: "black",
                  textDecoration: "none",
                  fontSize: isMobile ? "12px" : "18px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: isMobile ? 700 : "bold",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    textWrap: "nowrap",
                  }}
                >
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href="tel:+19714548476"
                  >
                    <PhoneIcon
                      sx={{
                        color: "#6B0101",
                        fontSize: isMobile ? "12px" : "18px",
                      }}
                    />
                    <span>&nbsp;Ph No:</span>
                    <span>&nbsp;&nbsp; +1 (971) 454-8476</span>
                  </a>
                </div>
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
