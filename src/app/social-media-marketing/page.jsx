
import  SMMHeroSection from "@/components/social-media-marketing/SMMHeroSection"
import FaqSection from "@/components/common/FaqSection";
import PromotionMethodology from "@/components/Promotion/PromotionMethodology";

import { PromoteConferencesonLinkedInforProfessionals } from "@/components/social-media-marketing/data";
import MissionExperience from "@/components/about/MissionExperience";
import { InstagramFacebookEvent } from "@/components/social-media-marketing/data";
import { TikTokMarketingforEventReach } from "@/components/social-media-marketing/data";
import BudgetStrategy from "@/components/PPCHero/BudgetStrategy";
import LinkedInMarketingSection from "@/components/social-media-marketing/LinkedInMarketingSection";
import SocialPromotionSection from "@/components/social-media-marketing/SocialPromotionSection";
import SocialAwarenessSection from "@/components/social-media-marketing/SocialAwarenessSection";
  import { conferenceSocialMediaFaqData    } from "@/components/social-media-marketing/data";





export default function Page() {
  return (
    <>  
          <SMMHeroSection  />
          <LinkedInMarketingSection />
             <MissionExperience  data={ InstagramFacebookEvent }/>
              <SocialPromotionSection />
          <SocialAwarenessSection />
        
          {/* <PromotionMethodology data={PromoteConferencesonLinkedInforProfessionals}/> */}
       
{/*         
          <BudgetStrategy  data={TikTokMarketingforEventReach}/> */}

      
         
      <FaqSection data={conferenceSocialMediaFaqData }/>
   
     
    
    </>
  );
}