import { Box, Button, Typography } from "@mui/material";

interface IProps {
  imageUrl: string;
  content: string;
  description?: string;
  showTopButtons?: boolean;
  showBottomButtons?: boolean;
}
function PageBanner(props: IProps) {
  const { imageUrl, content, description, showTopButtons, showBottomButtons } =
    props;
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
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "#6B0101",
                },
              }}
            >
              Book Table
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "#6B0101",
                },
              }}
            >
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
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{
                color: "#6B0101",
                fontWeight:550,
                backgroundColor: "#E4973C",
                "&:hover": {
                  backgroundColor: "#E4973C",
                },
              }}
            >
              Catering Enqiry
            </Button>
            {/* <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "#6B0101",
                },
              }}
            >
              View Menu
            </Button> */}
          </Box>
        )}
      </Box>
    </>
  );
}

export default PageBanner;
