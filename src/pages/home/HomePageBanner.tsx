import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { useStyles } from "../../styles/HomePageBannerStyle";

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
        <Box className={classes.leftOverlay}>
        <img
          src="src/assets/Home-left-bannerimage.png"
          alt="restaurant"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
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
            <Typography
              variant="body1"
              textAlign="center"
              fontSize={20}
              lineHeight={1.5}
              fontFamily={"jacques Francois"}
            >
              PULL UP A CHAIR.
              <br />
              TAKE A TASTE.&nbsp; &nbsp; COME JOIN US.
              <br />
              LIFE IS SO ENDLESSLY DELICIOUS.
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
      </Grid>
    </Grid>
  );
}

export default HomePageBanner;
