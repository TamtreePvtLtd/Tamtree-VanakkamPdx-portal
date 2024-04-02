import { Grid, Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  rightOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  },
  leftOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  },
  imageContainer: {
    position: "relative",
    zIndex: 0,
    height: "80%",
  },
}));

function HomePageBanner() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} style={{ height: "560px" }}>
      <Grid item xs={6} className={classes.imageContainer}>
        <Box className={classes.leftOverlay}></Box>
        <img
          src="src/assets/Home-left-bannerimage.jpg"
          alt="restaurant"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // backgroundColor: "rgba(0, 0, 0, 0.7)",
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
            height: "93%",
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
