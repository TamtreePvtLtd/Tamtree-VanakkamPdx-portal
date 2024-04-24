import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { paths } from "../router/paths";
import React from "react";

function Navbar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:1200px)");
  const [isHovered, setIsHovered] = React.useState(false);

  const handleLogoClick = () => {
    navigate(paths.ROOT);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#E4973C",
        padding: isMobile ? "1px" : isMedium ? "3px" : null,
        boxShadow: 0,
        margin: 0,
        width: "100%",
        height: "auto",
      }}
    >
      <Toolbar
        sx={{
          marginBottom: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
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
              paddingLeft: isMobile ? "10px" : 2,
            }}
          >
            <img
              src={
                "https://vana-project.s3.ap-south-1.amazonaws.com/Vanakkam+PDX+Logo+3x3+in+transparent-01.png"
              }
              alt="Logo"
              onClick={handleLogoClick}
              style={{
                height: isMobile ? "70px" : "85px",
                width: isMobile ? "70px" : "85px",
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
              justifyContent: isMedium ? "center" : "space-between",
              alignItems: isMobile
                ? "center"
                : isMedium
                ? "center"
                : "flex-start",
              textAlign: "center",
              padding: isMobile ? 1 : 0,
              marginTop: 1,
              width: "auto",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: isMobile ? "center" : "space-between",
                flexDirection: "row",
                wordSpacing: 0,
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: isMobile
                    ? "center"
                    : isMedium
                    ? "center"
                    : "flex-start",
                  alignItems: isMobile
                    ? "center"
                    : isMedium
                    ? "center"
                    : "start",
                }}
              >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    textWrap: "nowrap",
                    justifyContent: isMobile ? "center" : "space-between",
                    flexDirection: "column",
                    padding: 0,
                    marginRight: isMobile ? null : isMedium ? null : 30,
                  }}
                >
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      textWrap: "nowrap",
                      padding: 0,
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
                        padding: 0,
                        textWrap: "nowrap",
                        marginTop: "1px",
                        textShadow: "3px 1.5px 1px rgba(0, 0, 0, 0.9)",
                      }}
                    >
                      VANAKKAM PDX
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      textWrap: "nowrap",
                      padding: 0,
                    }}
                  >
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
                        padding: 0,
                        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.9)",
                      }}
                    >
                      AUTHENTIC INDIAN CUISINE
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile
                    ? "center"
                    : isMedium
                    ? "center"
                    : "flex-end",
                  flexDirection: "row",
                  textWrap: "nowrap",
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
                        fontSize: isMobile
                          ? "12px"
                          : isMedium
                          ? "16px"
                          : "18px",
                      }}
                    />
                    <span>&nbsp;Call Us:</span>
                    <span>&nbsp; +1 (503) 747-2049</span>
                  </a>
                </Typography>
              </Grid>
            </Grid>
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
              textWrap: "nowrap",
              wordWrap: "normal",
              flexWrap: "nowrap",
            }}
          >
            <Button
              size={isMobile ? "medium" : "large"}
              sx={{
                marginRight: isMobile ? null : "10px",
                marginLeft: isMobile ? "3px" : null,
                backgroundColor: isHovered ? "white" : "green",
                height: isMobile ? "25px" : "45px",
                width: isMobile ? "90px" : "165px",
                color: isHovered ? "green" : "white",
                fontWeight: "bold",
                fontFamily: "PT Sans Regular 400",
                cursor: "pointer",
                borderRadius: isMobile ? "10px" : "25px",
                textDecoration: "none",
                marginTop: isMobile ? "8px" : "4px",
                textWrap: "nowrap",
                wordWrap: "normal",
                wordBreak: "keep-all",
                transition: "none",

                "&:hover": {
                  backgroundColor: "white",
                  color: "green",
                  boxShadow: "0px 4px 8px rgba(0.1, 0.1, 0.1, 0.5)",
                },
              }}
              style={{ transition: "none" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              component="a"
              href="http://www.clover.com/online-ordering/vanakkampdx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{
                  fontSize: isMobile ? "9px" : "17px",
                  fontFamily: "PT Sans Regular 400",
                  fontWeight: "bold",
                  textWrap: "nowrap",
                  marginTop: isMobile ? "1.8px" : "3px",
                  padding: isMobile ? "2px" : "3px",
                  transition: "none",
                }}
              >
                ORDER
                <span
                  style={{
                    color: isHovered ? "white" : "green",
                    transition: "none",
                  }}
                >
                  -
                </span>
                ONLINE
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
