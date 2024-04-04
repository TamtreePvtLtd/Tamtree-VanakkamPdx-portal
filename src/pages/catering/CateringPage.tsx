import PageBanner from "../../common/components/PageBanner";
import CateringCard from "./CateringCard";
import CateringEnquireForm from "./CateringEnquiryForm";


function CateringPage() {
  return (
    <>
      <PageBanner
        imageUrl="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/best-chinese-food-nyc-phpjaIbPP"
        content="CATERING"
        description="PERFECTLY PORTIONED INDIVIDUAL MEALS AND EASY-TO-ORDER PACKAGES YOUR GUESTS WILL LOVE"
        showTopButtons={false}
        showBottomButtons={true}
      />
      <CateringCard />
      <CateringEnquireForm />
    </>
  );
}

export default CateringPage;
