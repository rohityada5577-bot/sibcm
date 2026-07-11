
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryMarketingSection from "@/components/industries/IndustryMarketingSection";
import FinanceEducationSection from "@/components/industries/FinanceEducationSection";
// import IndustryStrategies from "@/components/industries/IndustryStrategies";
// import HealthcareRegistryHero from "@/components/industries/HealthcareRegistryHero";
// import FinanceEventsHero from "@/components/industries/FinanceEventsHero";
// import EducationConferenceHero from "@/components/industries/EducationConferenceHero";
// import IndustryStrategiesMatrix from "@/components/industries/IndustryStrategiesMatrix";
import FaqSection from "@/components/common/FaqSection";








export default function Page() {
  return (
    <>
     
        <IndustryHero />
        <IndustryMarketingSection />
        <FinanceEducationSection />
        <IndustryStrategies />
        {/* <FinanceEventsHero />
        <EducationConferenceHero />
        <IndustryStrategiesMatrix /> */}
    
        
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}