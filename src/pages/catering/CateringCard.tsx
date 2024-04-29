import { Box } from "@mui/material";
import CommonProductCard from "../../common/components/CommonCard";
import seedData from "../../seed-data/Seed-Data";
import { Typography } from "@mui/material";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

function CateringCard() {
  return (
    <Box>
      <Box>
        <Animate keyframes={slideInLeft}>
          <Typography
            variant="h4"
            sx={{
              marginTop: "20px",
              fontFamily: "VanakkamPDX-Logo-Font",
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
              color: "#6B0101",
              padding: "10px",
            }}
          >
            Elevating Every Event with Our Exquisite Cuisine!
          </Typography>
        </Animate>
      </Box>
      <Box
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {seedData.map((product) => (
          <CommonProductCard key={product._id} product={product} />
        ))}
      </Box>
    </Box>
  );
}

export default CateringCard;
