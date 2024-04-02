import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
    height: "100%",
  },
  rightImage: {
    backgroundImage: `url("src/assets/Home-right-bannerimage.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "93.5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));
