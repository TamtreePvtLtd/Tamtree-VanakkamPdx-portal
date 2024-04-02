import { Box, Grid, Typography } from "@mui/material";
import PageBanner from "../../common/components/PageBanner";

function AboutUs() {
  return (
    <>
      <PageBanner
        imageUrl="src/assets/AboutUsBanner.jpg"
        content="ABOUT US"
        description="COME ENJOY DELECIOUS FOOD AND  GREAT SERVICE AT VANAKKAM PDX"
        showTopButtons={false}
        showBottomButtons={false}
      />
      <Grid container spacing={2} height={"310px"} paddingBottom={1}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "start",
          }}
        >
          <img
            src="src/assets/AboutUs_Image_2-removebg-preview.png"
            alt="Vanakkam PDX"
            style={{
              width: "calc(100% - 20%)",
              height: "70%",
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
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#E4973C", fontFamily: "architects Daughter",paddingTop:2 }}
          >
            A Tapestry of
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#6B0101", fontFamily: "Arial, sans-serif" }}
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
            }}
          >
            Vanakkam pdx is the collective outcome of authentic south Indian
            cuisine and the passion to create an exciting fine dining
            experience. We believe in creating an interesting and unique place
            for you to enjoy our simple and great tasting 'south Indian' food.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <img
            src="src/assets/AboutUs Image1.jpg"
            alt="Vanakkam PDX"
            style={{ width: "calc(100% - 20%)", height: "70%", borderRadius: "50%"}}
          />
        </Grid>
      </Grid>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color:"#E4973C", fontFamily: "allerta stencil",fontSize:"30px",fontWeight:500,textAlign: "center",textDecoration: "underline"}}
        >
          THE STORY OF VANAKKAM PDX
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: "#333", fontFamily: "Arial, sans-serif",textAlign: "left"}}
        >
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience authentic Indian cuisine at Vanakkam PDX South Indian
          Restaurant, located on Rare Course Road. Vanakkam PDX South Indian
          Restaurant invites you to savor the authentic flavors of South India
          in the heart of the east. Whether you're a seasoned aficionado of
          Indian cuisine or a curious first-timer, Vanakkam PDX delivers a
          tantalizing feast that will entice your senses and leave a lasting
          impression.Here, you'll find a diverse menu that caters to both vegetarian and
          non-vegetarian tastes. Each dish is prepared with fresh ingredients to
          ensure an authentic Indian experience. The dedicated staff at Vanakkam
          PDX ensures that your dining experience is both memorable and
          satisfying. The restaurant also stands out as a top choice for
          catering services, adept at handling functions and gatherings of all
          types, perfectly blending flavor, culture, and comfort.
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;
