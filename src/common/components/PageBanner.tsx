import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface IProps {
  imageUrl: string;
  content: string;
  description?: string;
  showTopButtons?: boolean;
  showBottomButtons?: boolean;
  onClickButton?: () => void;
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
          <Animate keyframes={slideInLeft}>
            <Typography
              sx={{
                textTransform: "uppercase",
                marginBottom: "0 !important",
              }}
              variant="h2"
            >
              {content}
            </Typography>
          </Animate>
        </Box>
        {description && (
          <Box className="page-banner-description">
            <Animate keyframes={slideInRight}>
              <Typography
                sx={{
                  marginBottom: "0 !important",
                  fontFamily: "VanakkamPDX-Logo-Font !important",
                  marginLeft: "17px",
                  marginRight: "10px",
              
                }}
                variant="h6"
              >
                {description}
              </Typography>
            </Animate>
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
                borderRadius: "25px",
                fontSize: isMobile ? "14px" : "17px",
                textWrap: isMobile ? "wrap" : "nowrap",
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Catering Enquiry
            </Button>
          </Box>
        )}
      </Box>
      <div ref={formRef} id="CateringEnquireForm" />
    </>
  );
}

export default PageBanner;
