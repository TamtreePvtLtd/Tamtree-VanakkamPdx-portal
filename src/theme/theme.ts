import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
   primary: {
      main: "#e4973d",
    },
    secondary: {
      main: "#6B0101",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Inter-Regular",
    button: {
      textTransform: "none",
      fontWeight: 600,
      textDecoration: "none",
      color: "white",
    },
    subtitle1: {
      fontWeight: "bold",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "#57ccb5",
        },
        contained: {
          color: "white",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          maxHeight: "65vh",
          overflow: "auto",
        },
      },
    },
  },
});

export default theme;
