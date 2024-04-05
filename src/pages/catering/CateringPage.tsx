import { useEffect, useRef } from "react";
import PageBanner from "../../common/components/PageBanner";
import CateringCard from "./CateringCard";
import CateringEnquiryForm from "./CateringEnquiryForm";

function CateringPage() {
  const enquiryFormRef = useRef<HTMLDivElement>(null); // Specify the type for useRef

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const scrollToEnquiryForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: "smooth",block:"center" });
    }
  };

  return (
    <>
      <PageBanner
        imageUrl="https://brownbrotherscatering.com/wp-content/uploads/Discover-5-Affordable-Wedding-Catering-Options-That-Wont-Break-the-Bank.jpg"
        content="CATERING"
        description="PERFECTLY PORTIONED INDIVIDUAL MEALS AND EASY-TO-ORDER PACKAGES YOUR GUESTS WILL LOVE"
        showTopButtons={false}
        showBottomButtons={true}
        onClickButton={scrollToEnquiryForm}
      />
      <CateringCard />
      <div ref={enquiryFormRef}>
        <CateringEnquiryForm />
      </div>
    </>
  );
}

export default CateringPage;
