import { Box } from "@mui/system";
import CommonProductCard from "../../common/components/CommonCard";
import seedData from "../../seed-data/Seed-Data";
import { Typography } from "@mui/material";

function CateringCard() {
  return (
    <Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
            fontFamily: "jacques Francois",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            color: "#6B0101",
            padding:"10px"
          }}
        >
          Making Your Special Events, Even More Special!
        </Typography>
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
