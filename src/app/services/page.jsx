import ServiceHero from "@/components/services/ServiceHero";
import PromotionServices from "@/components/services/PromotionServices";
import StrategySection from "@/components/services/StrategySection";
import RegistrationGrowthSection from "@/components/services/RegistrationGrowthSection";
import SeoMarketingSection from "@/components/services/SeoMarketingSection";
// import MarketingChannelsSection from "@/components/services/MarketingChannelsSection";
import MarketingChannels from "@/components/services/MarketingChannels";
import CustomMarketingPlans from "@/components/services/CustomMarketingPlans";
import ResultsSection from "@/components/services/ResultsSection";




import FaqSection from "@/components/common/FaqSection";

export default function Page() {
  return (
    <>
      <ServiceHero />
      <PromotionServices />
      <StrategySection />
       <RegistrationGrowthSection />
          <SeoMarketingSection />
      {/* <MarketingChannelsSection /> */}
      <MarketingChannels />
      <CustomMarketingPlans />
       <ResultsSection />

      <FaqSection />
   
     
    
    </>
  );
}