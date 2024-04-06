import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useRef } from "react";

interface IProps {
  imageUrl: string;
  content: string;
  description?: string;
  showTopButtons?: boolean;
  showBottomButtons?: boolean;
  onClickButton?: () => void; // Define the onClickButton prop
}
function PageBanner(props: IProps) {
  const {
    imageUrl,
    content,
    description,
    showTopButtons,
    showBottomButtons,
    onClickButton,
  } = props;
  const formRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width:700px)");

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (onClickButton) {
      // Call onClickButton if it's provided
      onClickButton();
    }
  };

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
              fontFamily: "VanakkamPDX-Logo-Font",
            }}
            variant="h2"
            // fontWeight={"medium"}
          >
            {content}
          </Typography>
        </Box>
        {description && (
          <Box className="page-banner-description">
            <Typography
              sx={{
                marginBottom: "0 !important",
                fontFamily: "cursive !important",
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
              onClick={scrollToForm}
              sx={{
                color: "white",
                fontWeight: 550,
                fontFamily: "PT Sans Regular 400",
                cursor: "pointer",
                lineHeight: 2,
                textAlign: "center",
                width: isMobile ? "40%" : "13%",
                borderRadius: "25px",
                fontSize: isMobile ? "14px" : "17px",
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Catering Enqiry
            </Button>
          </Box>
        )}
      </Box>
      <div ref={formRef} id="CateringEnquireForm" />
    </>
  );
}

export default PageBanner;
