import FaqSection from "@/components/common/FaqSection";
import SpeakerMarketingHero from "@/components/speaker-marketing/SpeakerMarketingHero";
import SpeakerPromotionSection from "@/components/speaker-marketing/SpeakerPromotionSection";
import SpeakerAuthoritySection from "@/components/speaker-marketing/SpeakerAuthoritySection";
import CredibilityAudienceSection from "@/components/speaker-marketing/CredibilityAudienceSection";
import SpeakerImpactSection from "@/components/speaker-marketing/SpeakerImpactSection";





export default function Page() {
  return (
    <>
          {/* <AboutSection  data={EmailmarketingheroContent} /> */}
       
         <SpeakerMarketingHero  />
         <SpeakerPromotionSection />
         <SpeakerAuthoritySection />
         <CredibilityAudienceSection />
         <SpeakerImpactSection />
          
        
       
        
        
        <FaqSection />
   
     
    
    </>
  );
}