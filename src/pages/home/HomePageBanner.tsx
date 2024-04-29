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
  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Grid
      container
      style={{ height: { xs: "500px", md: "1000px", lg: "500px" } as any }}
    >
      <Grid
        item
        xs={12}
        lg={6}
        className={classes.imageContainer}
        sx={{ height: { xs: "250px", md: "650px", lg: "500px" } as any }}
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
                Looking for authentic food flavors?
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
        sx={{
          position: "relative",
          height: { xs: "250px", md: "600px", lg: "500px" } as any,
        }}
      >
        <Box className={classes.rightImage} py={2}>
          <Box className={classes.rightOverlay}>
            <Typography
              paddingTop={1}
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 25 : 30}}
              fontWeight={900}
              lineHeight={1}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span className="bold700">GOOD</span>
              </Animate>
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 40 : 45}}
              lineHeight={1.2}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span className="bold600">FOOD</span>
              </Animate>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 15 : 20}}
              fontStyle={"italic"}
              lineHeight={1.2}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span>----- is -----</span>
              </Animate>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 20 : 25}}
              lineHeight={1.5}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span>ALL</span>
              </Animate>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 40 : 45}}
              lineHeight={1.2}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span>NEED</span>
              </Animate>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 15 : 20}}
              fontStyle={"italic"}
              lineHeight={1}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span>..... to .....</span>
              </Animate>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{fontSize:isMobile ? 25 : 30}}
              paddingBottom={2}
              fontWeight={900}
              lineHeight={1.5}
              fontFamily={"jacques Francois"}
            >
              <Animate keyframes={slideInRight} duration={600} delay={50}>
                <span className="bold700">BE HAPPY</span>
              </Animate>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HomePageBanner;
