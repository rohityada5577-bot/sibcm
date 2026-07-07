import ConferenceGuideHero from "@/components/guide/ConferenceGuideHero";

import PromotionStrategySection from "@/components/guide/PromotionStrategySection";
import First1000AttendeesSection from "@/components/guide/First1000AttendeesSection";
import MarketingChannelsSection from "@/components/guide/MarketingChannelsSection";
import CommonMistakesSection from "@/components/guide/CommonMistakesSection";
import GrowthMethodsSection from "@/components/guide/GrowthMethodsSection";
import GuideCTASection from "@/components/guide/GuideCTASection";
import FaqSection from "@/components/common/FaqSection";



export default function Page() {
  return (
    <>
     
          <ConferenceGuideHero />
          <PromotionStrategySection />
          <First1000AttendeesSection />
          <MarketingChannelsSection />
          <CommonMistakesSection />
           <GrowthMethodsSection />
            <GuideCTASection />
            <FaqSection />
         
  
    
    </>
  );
}