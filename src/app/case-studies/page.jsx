import ConferenceCaseStudyHero from "@/components/casestudy/ConferenceCaseStudyHero";
import GrowthResultsSection from "@/components/casestudy/GrowthResultsSection";
import HowWeIncreasedAttendance from "@/components/casestudy/HowWeIncreasedAttendance";
import HealthcareCaseStudy from "@/components/casestudy/HealthcareCaseStudy";
import RoiMatrixSection from "@/components/casestudy/RoiMatrixSection";
import FaqSection from "@/components/common/FaqSection";








export default function Page() {
  return (
    <>
     
          <ConferenceCaseStudyHero />
            <GrowthResultsSection />
            <HowWeIncreasedAttendance />
            <HealthcareCaseStudy />
              <RoiMatrixSection />
        
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}