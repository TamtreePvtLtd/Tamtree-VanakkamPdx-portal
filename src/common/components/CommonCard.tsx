import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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

  return (
    <Card
      sx={{
        mr: 2,
        width: "280px",
        height: "350px",
        border: "1px solid #ddd",
        boxShadow: "none",
        margin: "50px",
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
            transition: "transform 400ms",
          }}
          loading="lazy"
        />
      </Box>

      <CardContent
        sx={{ height: "28%", overflow: "hidden", paddingTop: "3px" }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 1,
            color: "#E4973C",
          }}
          component="div"
        >
          {product.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
          component="div"
        >
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CommonProductCard;
