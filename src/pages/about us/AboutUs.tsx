import { Grid, Typography } from "@mui/material";
import PageBanner from "../../common/components/PageBanner";

function AboutUs() {
  return (
    <>
      <PageBanner
        // imageUrl="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"
        imageUrl="https://as1.ftcdn.net/v2/jpg/06/35/76/76/1000_F_635767696_2fpfuQhfCVGchFb4KpHMroELgzK4usZl.jpg"
        content="ABOUT US"
        description="COME ENJOY DELECIOUS FOOD AND  GREAT SERVICE AT VANAKKAM PDX"
        showTopButtons={false}
        showBottomButtons={false}
      />
      <Grid container spacing={2} height={"auto"} paddingBottom={1}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "start",
            "@media (max-width: 600px)": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <img
            src="https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=WUFvAWQgxT44QW1JHS5c_QiB_RDf2hkR2hf4Kpk_lzA="
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
            "@media (max-width: 600px)": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#E4973C",
              fontFamily: "architects Daughter",
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
              fontFamily: "Arial, sans-serif",
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
              padding: 2,
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
            "@media (max-width: 600px)": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <img
            src="https://media.istockphoto.com/id/941615570/photo/kuzhi-paniyaram-served-with-coconut-chutney-and-sambar-south-indian-breakfast-with-black.jpg?s=170667a&w=0&k=20&c=BuyDdaUAZJxfZ915WR_Sirrnc8HZS5zC5DVa7jRYB3M="
            alt="Vanakkam PDX"
            style={{
              width: "calc(100% - 20%)",
              height: "70%",
              // borderRadius: "50%",
            }}
          />
        </Grid>
      </Grid>
      <Grid sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#E4973C",
            fontFamily: "allerta stencil",
            fontSize: "30px",
            fontWeight: 500,
            textAlign: "center",
            textDecoration: "underline",
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
          }}
        >
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience authentic Indian cuisine
          at Vanakkam PDX South Indian Restaurant, located on Rare Course Road.
          Vanakkam PDX South Indian Restaurant invites you to savor the
          authentic flavors of South India in the heart of the east. Whether
          you're a seasoned aficionado of Indian cuisine or a curious
          first-timer, Vanakkam PDX delivers a tantalizing feast that will
          entice your senses and leave a lasting impression.Here, you'll find a
          diverse menu that caters to both vegetarian and non-vegetarian tastes.
          Each dish is prepared with fresh ingredients to ensure an authentic
          Indian experience. The dedicated staff at Vanakkam PDX ensures that
          your dining experience is both memorable and satisfying. The
          restaurant also stands out as a top choice for catering services,
          adept at handling functions and gatherings of all types, perfectly
          blending flavor, culture, and comfort.
        </Typography>
      </Grid>
    </>
  );
}

export default AboutUs;
