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
        description="COME ENJOY DELECIOUS FOOD AND  GREAT SERVICE AT VANAKKAM PDX"
        showTopButtons={false}
        showBottomButtons={false}
      />
      <Grid
        container
        spacing={2}
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
              Vanakkam pdx is the collective outcome of authentic south Indian
              cuisine and the passion to create an exciting fine dining
              experience. We believe in creating an interesting and unique place
              for you to enjoy our simple and great tasting 'south Indian' food.
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
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience authentic Indian
            cuisine at Vanakkam PDX South Indian Restaurant, located on Rare
            Course Road. Vanakkam PDX South Indian Restaurant invites you to
            savor the authentic flavors of South India in the heart of the east.
            Whether you're a seasoned aficionado of Indian cuisine or a curious
            first-timer, Vanakkam PDX delivers a tantalizing feast that will
            entice your senses and leave a lasting impression.Here, you'll find
            a diverse menu that caters to both vegetarian and non-vegetarian
            tastes. Each dish is prepared with fresh ingredients to ensure an
            authentic Indian experience. The dedicated staff at Vanakkam PDX
            ensures that your dining experience is both memorable and
            satisfying. The restaurant also stands out as a top choice for
            catering services, adept at handling functions and gatherings of all
            types, perfectly blending flavor, culture, and comfort.
          </Typography>
        </Animate>
      </Grid>
    </>
  );
}

export default AboutUs;
