
import VirtualConferenceHero from "@/components/virtualevent/VirtualConferenceHero";
import VirtualPromotionMatrix from "@/components/virtualevent/VirtualPromotionMatrix";
import WebinarStrategy from "@/components/virtualevent/WebinarStrategy";
import OnlineEventParticipation from "@/components/virtualevent/OnlineEventParticipation";
import FaqSection from "@/components/common/FaqSection";


export default function Page() {
  return (
    <>
     
        <VirtualConferenceHero />
        <VirtualPromotionMatrix />
         <WebinarStrategy />
         <OnlineEventParticipation />
      
    
        
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}