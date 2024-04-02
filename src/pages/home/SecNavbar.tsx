import { Box, AppBar, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";


const commonButtonStyles = {
    color: "#6B0101",
    paddingX: 5,
    "&:hover": { backgroundColor: "#e4973d" },
  };
  
  const commonDividerStyles = {
    backgroundColor: "#fff",
    height: "30px",
  };

const SecNavbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" sx={{ backgroundColor: "#e4973d", height: "100%",width:"100%"}}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%" 
          padding={2}
        >
            <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            onClick={() => navigate(paths.HOME)}
            sx={commonButtonStyles}
          >
            HOME
          </Button>
          <Divider
            sx={commonDividerStyles}
            orientation="vertical"
            flexItem
          />
          </Box>
          <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            onClick={() => navigate(paths.MENU)}
            sx={commonButtonStyles}
          >
            MENU
          </Button>
          <Divider
            sx={commonDividerStyles}
            orientation="vertical"
            flexItem
          />
          </Box>
          <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            onClick={() => navigate(paths.CATERING)}
            sx={commonButtonStyles}
          >
            CATERING
          </Button>
          <Divider
           sx={commonDividerStyles}
            orientation="vertical"
            flexItem
          />
          </Box>
          <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            onClick={() => navigate(paths.ABOUTUS)}
            sx={commonButtonStyles}
          >
            ABOUT US
          </Button>
          <Divider
           sx={commonDividerStyles}
            orientation="vertical"
            flexItem
          />
          </Box>
          <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            onClick={() => navigate(paths.CONTACTUS)}
            sx={commonButtonStyles}
          >
            CONTACT US
          </Button>
          </Box>
        </Box>
    </AppBar>
  );
};

export default SecNavbar;
