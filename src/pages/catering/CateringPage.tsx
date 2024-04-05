import { useEffect } from "react";
import PageBanner from "../../common/components/PageBanner";
import CateringCard from "./CateringCard";
import CateringEnquiryForm from "./CateringEnquiryForm";

function CateringPage() {

    useEffect(() => {
      window.scrollTo(0, 0);
    });

  return (
    <>
      <PageBanner
        imageUrl="https://brownbrotherscatering.com/wp-content/uploads/Discover-5-Affordable-Wedding-Catering-Options-That-Wont-Break-the-Bank.jpg"
        content="CATERING"
        description="PERFECTLY PORTIONED INDIVIDUAL MEALS AND EASY-TO-ORDER PACKAGES YOUR GUESTS WILL LOVE"
        showTopButtons={false}
        showBottomButtons={true}
      />
      <CateringCard />
      <CateringEnquiryForm />
    </>
  );
}

export default CateringPage;
