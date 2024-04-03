import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import VanakkamPdxLogo from "../../src/assets/Vanakkam Pdx Logo.png";
import { paths } from "../router/paths";

function Navbar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate(paths.ROOT);
    };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#E4973C",
        padding: 2,
        boxShadow: 0,
        margin: 0,
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingX: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingX: 6,
            }}
          >
            <img
              src={VanakkamPdxLogo}
              alt="Logo"
              onClick={handleLogoClick}
              style={{
                backgroundColor: "white",
                height: 70,
                borderRadius: "60%",
                marginRight: 10,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "-ms-flexbox",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#ffffff",
                fontFamily: "alfa_slab_one",
                fontWeight: "bold",
              }}
            >
              VANAKKAM PDX
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                // color: "#1e4e18",
                color:"green",
                fontWeight: 1000,
                fontFamily: "alfa_slab_one",
                display: "flex",
                justifyContent: "center",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-AUTHENTIC
              INDIAN CUISINE
            </Typography>
          </Box>
        </Box>
        <Box marginRight={5}>
          {/* <Button
            size="small"
            sx={{
              backgroundColor: "#6B0101",
              color: "#ffffff",
              fontFamily: "alfa_slab_one",
              "&:hover": { backgroundColor: "#6B0101" },
              marginRight: 5,
            }}
          >
            Explore Menu
          </Button>
          <Button
            size="small"
            sx={{
              backgroundColor: "#6B0101",
              color: "#ffffff",
              fontFamily: "alfa_slab_one",
              "&:hover": { backgroundColor: "#6B0101" },
            }}
          >
            Sign In
          </Button> */}
          {/* <Button
            size="small"
            sx={{
              color: "#ffffff",
              fontFamily: "alfa_slab_one",
              border: "1.5px solid green",
              marginRight: 5,
            }}
          >
            Order Online
          </Button> */}
          {/* <Typography
            variant="h6"
            sx={{
              color: "#6B0101",
              fontWeight: 600,
              fontFamily: "alfa_slab_one",
            }}
          >
            Order Online
          </Typography> */}
          <Typography
      fontSize="16px"
      color="black"
      fontFamily="alfa_slab_one,Itim"
      sx={{
        cursor:"pointer",
        textDecoration:"none",
        '&:hover': {
          color: "green",
          textDecoration:"none"
        }
      }}
      component="a" 
      href="https://www.clover.com/"
      target="_blank" 
      rel="noopener noreferrer" 
    >
      ORDER ONLINE
    </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
