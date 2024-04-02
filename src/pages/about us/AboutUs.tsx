import { Box } from '@mui/material'
import PageBanner from '../../common/components/PageBanner'

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
    </>
  )
}

export default AboutUs