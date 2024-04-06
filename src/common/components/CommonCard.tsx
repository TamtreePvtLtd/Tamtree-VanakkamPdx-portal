import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

interface IProps {
  product: {
    _id: string;
    title: string;
    description: string;
    posterURL: string;
  };
}

function CommonProductCard(props: IProps) {
  const { product } = props;

  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(160px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
}
`;

  return (
    <Animate keyframes={fadeInUp} duration={600} delay={50} >
      <Card
        sx={{
          mr: 2,
          width: "280px",
          height: "360px",
          border: "none",
          boxShadow: "none",
          margin: "30px",
          padding: 0,
          // borderRadius: "10%",
        }}
      >
        <Box
          sx={{
            height: "60%",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            src={product.posterURL}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              transition: "transform 400ms",
            }}
            loading="lazy"
          />
        </Box>

        <CardContent sx={{ height: "28%", overflow: "hidden", padding: "5px" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              fontFamily: "VanakkamPDX-Logo-Font",
              color: "#6B0101",
            }}
            component="div"
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              textAlign: "center",
              marginTop: "5px",
            }}
            component="div"
          >
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </Animate>
  );
}

export default CommonProductCard;
