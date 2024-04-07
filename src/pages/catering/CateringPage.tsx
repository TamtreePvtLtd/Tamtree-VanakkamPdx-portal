import { useEffect, useRef } from "react";
import PageBanner from "../../common/components/PageBanner";
import CateringCard from "./CateringCard";
import CateringEnquiryForm from "./CateringEnquiryForm";

function CateringPage() {
  const enquiryFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const scrollToEnquiryForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: "smooth",block:"center" });
    }
  };

  return (
    <>
      <PageBanner
        imageUrl="https://img.etimg.com/thumb/width-1600,height-900,imgsize-1554765,resizemode-75,msid-84575088/magazines/panache/no-more-altering-the-spice-these-restaurateurs-want-to-serve-real-indian-food-in-america.jpg"
        content="CATERING"
        description="perfectly portioned individual meals and easy-to-order packages your guests will love"
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
