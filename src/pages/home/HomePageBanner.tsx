import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { useStyles } from "../../styles/HomePageBannerStyle";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

function HomePageBanner() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid container style={{ height: "500px" }}>
      <Grid
        item
        xs={12}
        lg={6}
        className={classes.imageContainer}
        sx={{ height: isMobile ? "250px" : "500px" }}
      >
        <Box className={classes.leftOverlay} style={{ position: "relative" }}>
          <img
            src="https://uploads-ssl.webflow.com/62a9784d11caeb4189dca308/62a97a5dc2ab74633fe7d8d5_home-banner.png"
            alt="restaurant"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: isMobile ? "34%" : "37%",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Animate keyframes={slideInLeft} duration={600} delay={50}>
              <p
                style={{
                  fontFamily: "VanakkamPDX-Logo-Font",
                  fontSize: isMobile ? "20px" : "35px",
                }}
              >
                Looking for authentic food flavours?
              </p>
              <p
                style={{
                  fontFamily: "VanakkamPDX-Logo-Font",
                  fontSize: isMobile ? "15px" : "20px",
                }}
              >
                Order & celebrate with your loved ones.
              </p>
            </Animate>
          </div>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        height={"250px"}
        className={classes.imageContainer}
        sx={{ position: "relative", height: isMobile ? "250px" : "500px" }}
      >
        <Box className={classes.rightImage} py={2}>
          <Box className={classes.rightOverlay}>
            <Animate keyframes={slideInRight} duration={600} delay={50}>
              <Typography
                paddingTop={1}
                variant="body1"
                textAlign="center"
                fontSize={isMobile ? 20 : 30}
                fontWeight={900}
                lineHeight={isMobile ? 1.5 : 1.2}
                fontFamily={"VanakkamPDX-Logo-Font"}
              >
                <span className="bold700">GOOD</span>
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                fontSize={isMobile ? 23 : 45}
                lineHeight={isMobile ? 1.5 : 1.2}
                fontFamily={"VanakkamPDX-Logo-Font"}
              >
                <span className="bold600">FOOD</span>
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                fontSize={isMobile ? 15 : 20}
                fontStyle={"italic"}
                lineHeight={isMobile ? 1.5 : 1.2}
                fontFamily={"VanakkamPDX-Logo-Font"}
              >
                BRINGS
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                fontSize={isMobile ? 25 : 40}
                lineHeight={1.5}
                fontFamily={"VanakkamPDX-Logo-Font"}
              >
                HAPPINESS
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                fontSize={isMobile ? 20 : 25}
                lineHeight={1.5}
                fontFamily={"VanakkamPDX-Logo-Font"}
              >
                <span>EVERY</span>
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                fontSize={isMobile ? 20 : 25}
                lineHeight={isMobile ? 1.5 : 1.2}
                fontFamily={"VanakkamPDX-Logo-Font"}
              >
                <span>TIME</span>
              </Typography>
            </Animate>
            {/* <Typography
              variant="body1"
              textAlign="center"
              fontSize={30}
              fontWeight={900}
              lineHeight={1.5}
              fontFamily={"jacques Francois"}
            >
              <span className="bold700">BE HAPPY</span>
            </Typography>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "white",
                zIndex: 1,
                display: "inline-block",
                marginTop: "50px",
              }}
            >
              CHOOSE YOUR EXPERIENCE
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginTop: "50px",
                color: "white",
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "#6B0101",
                },
                zIndex: 1,
              }}
            >
              Book Table
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginTop: "50px",
                color: "white",
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "#6B0101",
                },
                zIndex: 1,
              }}
            >
              Order Now
            </Button>
          </Box> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HomePageBanner;
