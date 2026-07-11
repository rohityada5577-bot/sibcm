
import VirtualConferenceHero from "@/components/virtualevent/VirtualConferenceHero";
import VirtualPromotionSection from "@/components/virtualevent/VirtualPromotionSection";
import WebinarParticipationSection from "@/components/virtualevent/WebinarParticipationSection";

import VirtualMarketingSection from "@/components/virtualevent/VirtualMarketingSection";

import FaqSection from "@/components/common/FaqSection";


export default function Page() {
  return (
    <>
     
        <VirtualConferenceHero />
        <VirtualPromotionSection />
        <WebinarParticipationSection />
        <VirtualMarketingSection />
  
      
    
        
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}