import { Box, Button, Typography } from "@mui/material";

interface IProps {
  imageUrl: string;
  content: string;
  description?: string;
  showTopButtons?: boolean;
  showBottomButtons?: boolean;
}
function PageBanner(props: IProps) {
  const { imageUrl, content, description,showTopButtons,showBottomButtons } = props;
  return (
    <>
      <Box
        className="page-banner-area"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {showTopButtons && (
          <Box
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Button variant="contained" color="primary">
              Book Table
            </Button>
            <Button variant="contained" color="primary">
              Order Now
            </Button>
          </Box>
        )}

        <Box className="page-banner-content">
            <Typography
              sx={{
                textTransform: "uppercase",
                marginBottom: "0 !important",
              }}
              variant="h2"
              fontWeight={"medium"}
            >
              {content}
            </Typography>
        </Box>
        {description && (
          <Box className="page-banner-description">
              <Typography
                sx={{
                  marginBottom: "0 !important",
                }}
                variant="h6"
                fontWeight={"small"}
              >
                {description}
              </Typography>
          </Box>
        )}
        {showBottomButtons && (
          <Box
            style={{
              position: "absolute",
              bottom: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <Button variant="contained" color="primary">
              Order Catering
            </Button>
            <Button variant="contained" color="primary">
              View Menu
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default PageBanner;
