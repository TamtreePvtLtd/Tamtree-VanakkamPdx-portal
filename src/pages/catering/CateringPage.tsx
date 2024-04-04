import PageBanner from "../../common/components/PageBanner";
import CateringCard from "./CateringCard";
import CateringEnquireForm from "./CateringEnquiryForm";

function CateringPage() {
  return (
    <>
      <PageBanner
        imageUrl="https://www.shutterstock.com/image-photo/assorted-chinese-food-set-noodles-260nw-446808100.jpg"
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
