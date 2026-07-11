import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import SuccessStoriesStats from "@/components/testimonials/SuccessStoriesStats";
import OrganizerFeedbackTrust from "@/components/testimonials/OrganizerFeedbackTrust";
import AccountabilityTrust from "@/components/testimonials/AccountabilityTrust";
import FaqSection from "@/components/common/FaqSection";
import { AccountabilityTrustContent } from "@/components/testimonials/data";







export default function Page() {
  return (
    <>
     
          <TestimonialsSection />
          <SuccessStoriesStats />
          <OrganizerFeedbackTrust />
          <AccountabilityTrust data={AccountabilityTrustContent} />
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}