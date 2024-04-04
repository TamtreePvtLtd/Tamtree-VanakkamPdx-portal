import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

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
        margin: "30px",
        padding: 0,
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

      <CardContent sx={{ height: "28%", overflow: "hidden", padding: "5px" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            textAlign:"center",
            // color: "#E4973C",
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
            textAlign:"center",
            marginTop:"5px",
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
