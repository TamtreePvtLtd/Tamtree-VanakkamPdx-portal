import { Grid, Typography, useMediaQuery } from "@mui/material";
import PageBanner from "../../common/components/PageBanner";
import { useEffect } from "react";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
}
`;

function AboutUs() {
  const isMobile = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <PageBanner
        imageUrl="https://as1.ftcdn.net/v2/jpg/06/35/76/76/1000_F_635767696_2fpfuQhfCVGchFb4KpHMroELgzK4usZl.jpg"
        content="ABOUT US"
        description="come enjoy our delicious food and great service"
        showTopButtons={false}
        showBottomButtons={false}
      />

      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        paddingBottom={1}
        sx={{ marginRight: isMobile ? "null" : 8, paddingX: 2.5 }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: isMobile ? "center" : "start",
            marginTop: "15px",
          }}
        >
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Indian-Cuisine-PNG-Photos.png"
            alt="Vanakkam PDX"
            style={{
              width: "80%",
              height: "80%",
              position: "relative",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "center" : "flex-start",
            alignItems: "center",
          }}
        >
          <Animate keyframes={fadeInUp}>
            <Typography
              variant="h4"
              sx={{
                color: "#e4973d",
                fontFamily: "Cinzel Decorative",
                paddingTop: 2,
              }}
            >
              A Tapestry of
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#6B0101",
                fontFamily: "VanakkamPDX-Logo-Font",
                paddingTop: 0.5,
                textAlign: "center",
              }}
            >
              Authentic Indian Flavors!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: "#333",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                padding: 0,
                fontSize: "18px",
                lineHeight: "2rem",
              }}
            >
              Welcome to Vanakkam PDX where we bring the vibrant flavors and
              rich culinary heritage of India to Portland, Oregon. At Vanakkam
              Pdx, we are passionate about creating an authentic Indian Cuisine
              experience that tantalizes the taste buds and transports you to
              the bustling streets of Chennai, the royal courts of Lucknow, or
              the serene backwaters of Kerala, right here in Portland, Oregon.
            </Typography>
          </Animate>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: isMobile ? "center" : "end",
          }}
        >
          <img
            src="https://sambarcafe.com/wp-content/uploads/2022/10/Appam_500x500.png"
            alt="Vanakkam PDX"
            style={{
              width: "80%",
              height: "80%",
            }}
          />
        </Grid>
      </Grid>
      <Grid padding={2} paddingX={4}>
        <Animate keyframes={fadeInUp}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#6B0101",
              fontFamily: "Cinzel Decorative",
              fontSize: "30px",
              fontWeight: 800,
              textAlign: "center",
              paddingBottom: 2,
            }}
          >
            THE STORY OF VANAKKAM PDX
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "#333",
              fontFamily: "Arial, sans-serif",
              textAlign: "left",
              fontSize: "18px",
              lineHeight: "2rem",
            }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Our journey began with a vision to
            share the diverse and colorful tapestry of Indian cuisine with our
            community. Drawing inspiration from the myriad regional cuisines of
            India, our chefs craft each dish with care and attention to detail,
            using traditional spices, fresh ingredients, and time-honored
            cooking techniques. From aromatic biryanis to fiery curries, from
            crispy dosas to decadent desserts, our menu showcases the best of
            Indian gastronomy, curated to cater to every palate and preference.
            Whether you're a fan of the fiery heat of South Indian cuisine or
            the delicate flavors of North Indian cuisine, there's something for
            everyone at Vanakkam PDX. But it's not just about the food; it's
            about the entire dining experience. Our warm and inviting ambiance,
            attentive service, and commitment to excellence ensure that every
            visit to Vanakkam PDX is a memorable one. Whether you're celebrating
            a special occasion, enjoying a meal with family and friends, or
            simply craving a taste of India, we invite you to join us on a
            culinary journey like no other. Thank you for choosing Vanakkam PDX.
            We look forward to serving you and sharing the flavors
            of India with you.
          </Typography>
        </Animate>
      </Grid>
    </>
  );
}

export default AboutUs;
