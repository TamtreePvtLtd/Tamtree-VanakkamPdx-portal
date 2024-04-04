import PageBanner from "../../common/components/PageBanner";
import CateringCard from "./CateringCard";
import CateringEnquireForm from "./CateringEnquiryForm";

function CateringPage() {
  return (
    <>
      <PageBanner
        imageUrl="src/assets/cateringpagebanner3.jpg"
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
