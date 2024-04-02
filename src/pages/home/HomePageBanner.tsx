import { Grid, Button, Typography, Box } from "@mui/material";
import { useStyles } from "../../styles/HomePageBannerStyle";

function HomePageBanner() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} style={{ height: "500px" }}>
      <Grid item xs={6} className={classes.imageContainer}>
        <Box className={classes.leftOverlay}></Box>
        <img
          src="src/assets/Home-left-bannerimage.jpg"
          alt="restaurant"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        className={classes.imageContainer}
        sx={{ position: "relative" }}
      >
        <Box
          py={2}
          sx={{
            backgroundImage: `url('src/assets/Home-right-bannerimage.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "93.5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
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

          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HomePageBanner;
