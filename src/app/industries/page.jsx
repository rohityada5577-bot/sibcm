
import IndustryHero from "@/components/industries/IndustryHero";
import HealthcareRegistryHero from "@/components/industries/HealthcareRegistryHero";
import FinanceEventsHero from "@/components/industries/FinanceEventsHero";
import EducationConferenceHero from "@/components/industries/EducationConferenceHero";
import IndustryStrategiesMatrix from "@/components/industries/IndustryStrategiesMatrix";
import FaqSection from "@/components/common/FaqSection";








export default function Page() {
  return (
    <>
     
        <IndustryHero />
        <HealthcareRegistryHero />
        <FinanceEventsHero />
        <EducationConferenceHero />
        <IndustryStrategiesMatrix />
    
        
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}