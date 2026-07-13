
import FaqSection from "@/components/common/FaqSection";
import RegistrationHero from "@/components/registration-marketing/RegistrationHero";
import SignupStrategiesSection from "@/components/registration-marketing/SignupStrategiesSection";
import ConversionRateSection from "@/components/registration-marketing/ConversionRateSection";
import RegistrationPageOptimization from "@/components/registration-marketing/RegistrationPageOptimization";
import DropOffSection from "@/components/registration-marketing/DropOffSection";
import RegistrationMarketingSection from "@/components/registration-marketing/RegistrationMarketingSection";
import { conferenceRegistrationMarketingFaqData   } from "@/components/registration-marketing/data";




export default function Page() {
  return (
    <>
          {/* <AboutSection  data={EmailmarketingheroContent} /> */}
       
         <RegistrationHero  />
         <SignupStrategiesSection />
         <ConversionRateSection />
         <RegistrationPageOptimization />
         <DropOffSection />
           <RegistrationMarketingSection />
       
        
        
        <FaqSection data={conferenceRegistrationMarketingFaqData } />
   
     
    
    </>
  );
}