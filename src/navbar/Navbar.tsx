import { AppBar, Toolbar, Typography, Grid, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import VanakkamPdxLogo from "../../src/assets/Vanakkam Pdx Logo.png";
import { paths } from "../router/paths";

function Navbar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:1200px)");

  const handleLogoClick = () => {
    navigate(paths.ROOT);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#E4973C",
        padding: isMobile ? "1px" : 0,
        boxShadow: 0,
        margin: 0,
        width: "100%",
        height: isMedium ? "85px" : "80px",
      }}
    >
      <Toolbar
        sx={{
          padding: isMobile ? 1 : (isMedium ? 1 : 0),
          marginBottom: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid
          container
          spacing={1}
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
            lg={1.5}
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
                borderRadius: "50%",
                marginTop: 5,
              }}
            />
          </Grid>
          <Grid
            item
            xs={7.5}
            sm={7}
            md={8}
            lg={8.5}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : isMedium ? "column" : "row",
              justifyContent: isMedium ? "center" : "space-between",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: "center",
              marginTop: 1,
              width: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: isMobile ? "center" : (isMedium ? "center" : "start"),
                alignItems: "center",
                marginRight: isMobile ? 0 : (isMedium ? 0 : "20%"),
                width: "50%",
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
              {
                isMedium ? <Typography
                variant="body1"
                sx={{
                  color: "black",
                  fontSize: isMobile ? "12px" : isMedium ? "16px" : "18px",
                  fontWeight: isMobile ? 700 : "bold",
                  textAlign: "center",
                  textWrap: "nowrap",
                  wordWrap: "normal",
                  wordBreak: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: isMedium ? "5px" : 0,
                }}
              >
                <a
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href="tel:+15037472049"
                >
                  <PhoneIcon
                    sx={{
                      color: "#6B0101",
                      fontSize: isMobile ? "12px" : isMedium ? "16px" : "18px",
                    }}
                  />
                  <span>&nbsp;Call Us:</span>
                  <span>&nbsp;&nbsp; +1 (503) 747-2049</span>
                </a>
              </Typography>  : null
              }
            </Box>
            { isMedium ? null :
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : isMedium ? "center" : "center",
                flexDirection: "row",
                marginLeft: isMobile ? 0 : isMedium ? 0 : "20%",
                marginTop: isMobile ? 0 : isMedium ? 0 : 2.1,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  fontSize: isMobile ? "12px" : isMedium ? "16px" : "18px",
                  fontWeight: isMobile ? 700 : "bold",
                  textAlign: "center",
                  textWrap: "nowrap",
                  wordWrap: "normal",
                  wordBreak: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: isMedium ? "5px" : 0,
                }}
              >
                <a
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href="tel:+15037472049"
                >
                  <PhoneIcon
                    sx={{
                      color: "#6B0101",
                      fontSize: isMobile ? "12px" : isMedium ? "16px" : "18px",
                    }}
                  />
                  <span>&nbsp;Call Us:</span>
                  <span>&nbsp;&nbsp; +1 (503) 747-2049</span>
                </a>
              </Typography>
            </Box>}
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              size={isMobile ? "medium" : "large"}
              sx={{
                marginRight: isMobile ? "2px" : "10px",
                backgroundColor: "green",
                height: isMobile ? "22px" : "45px",
                width: isMobile ? "80px" : "150px",
                color: "white",
                fontWeight: "bold",
                fontFamily: "PT Sans Regular 400",
                cursor: "pointer",
                borderRadius: isMobile ? "10px" : "25px",
                textDecoration: "none",
                marginTop: isMobile ? "8px" : "4px",
                textWrap: "nowrap",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#6B0101",
                  boxShadow: "0px 4px 8px rgba(0.1, 0.1, 0.1, 0.5)"
                },
              }}
              component="a"
              href="http://www.clover.com/online-ordering/vanakkampdx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{
                  fontSize: isMobile ? "9px" : "15px",
                  fontFamily: "PT Sans Regular 400",
                  fontWeight: "bold",
                  marginTop: isMobile ? "1.8px" : "3px",
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
