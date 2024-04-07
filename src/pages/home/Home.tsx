import { Box } from "@mui/material";
import HomePageBanner from "./HomePageBanner";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <Box>
      <HomePageBanner/>
    </Box>
  );
}

export default Home;
