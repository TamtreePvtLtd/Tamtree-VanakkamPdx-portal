import {
  Grid,
  AppBar,
  Button,
  Divider,
  useMediaQuery,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent", // Set the background color to transparent
    "&:hover": {
      backgroundColor: "transparent !important", // Set the background color to transparent on hover
    },
  },
});

const commonButtonStyles = {
  color: "#6B0101",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontFamily: "'Acme",
  "&:hover": {
    color: "green",
    textDecoration: "none",
  },
  fontSize: "16px !important", // Try using !important
};

const commonDividerStyles = {
  backgroundColor: "#fff",
};

const handleCloverClick = () => {
  window.open("http://www.clover.com/online-ordering/vanakkampdx");
};

const SecNavbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:1000px)");
  const classes = useStyles();

  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "#e4973d",
        height: "100%",
        width: "100%",
      }}
    >
      <Toolbar>
        <Grid
          container
          sx={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Grid
            item
            xs={12}
            lg={1.8}
            md={1.8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              onClick={() => navigate(paths.HOME)}
              className={classes.button}
              sx={{
                ...commonButtonStyles,
              }}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  fontFamily: "Acme",
                  "&:hover": { color: "green", textDecoration: "none" },
                }}
              >
                HOME
              </Typography>
            </Button>
          </Grid>
          <Divider
            sx={{
              ...commonDividerStyles,
              marginTop: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
              height: isMobile ? "1px" : "25px",
            }}
            orientation="vertical"
            flexItem
          />
          <Grid
            item
            xs={12}
            lg={1.8}
            md={1.8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginX: 2,
            }}
          >
            <Button
              color="inherit"
              className={classes.button}
              onClick={handleCloverClick}
              sx={commonButtonStyles}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  fontFamily: "Acme",
                  textWrap: "nowrap",
                  "&:hover": { color: "green", textDecoration: "none" },
                }}
              >
                DINING MENU
              </Typography>
            </Button>
          </Grid>
          <Divider
            sx={{
              ...commonDividerStyles,
              marginTop: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
              height: isMobile ? "1px" : "25px",
            }}
            orientation="vertical"
            flexItem
          />

          <Grid
            item
            xs={12}
            lg={1.8}
            md={1.8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              className={classes.button}
              onClick={handleCloverClick}
              sx={commonButtonStyles}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  fontFamily: "Acme",
                  "&:hover": { color: "green", textDecoration: "none" },
                }}
              >
                TAKEOUT
              </Typography>
            </Button>
          </Grid>
          <Divider
            sx={{
              ...commonDividerStyles,
              marginTop: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
              height: isMobile ? "1px" : "25px",
            }}
            orientation="vertical"
            flexItem
          />

          <Grid
            item
            xs={12}
            lg={1.8}
            md={1.8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => navigate(paths.CATERING)}
              sx={commonButtonStyles}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  fontFamily: "Acme",
                  "&:hover": { color: "green", textDecoration: "none" },
                }}
              >
                CATERING
              </Typography>
            </Button>
          </Grid>
          <Divider
            sx={{
              ...commonDividerStyles,
              marginTop: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
              height: isMobile ? "1px" : "25px",
            }}
            orientation="vertical"
            flexItem
          />

          <Grid
            item
            xs={12}
            lg={1.8}
            md={1.8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => navigate(paths.ABOUTUS)}
              sx={commonButtonStyles}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  fontFamily: "Acme",
                  "&:hover": { color: "green", textDecoration: "none" },
                }}
              >
                ABOUT US
              </Typography>
            </Button>
          </Grid>
          <Divider
            sx={{
              ...commonDividerStyles,
              marginTop: "5px",
              height: isMobile ? "1px" : "25px",
            }}
            orientation="vertical"
            flexItem
          />

          <Grid
            item
            xs={12}
            lg={1.8}
            md={1.8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => navigate(paths.DISCOUNT)}
              sx={commonButtonStyles}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  fontFamily: "Acme",
                  "&:hover": { color: "green", textDecoration: "none" },
                }}
              >
                DISCOUNT
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SecNavbar;
