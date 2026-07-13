import PPCHero from "@/components/PPCHero/PPCHero";
import GoogleAdsSection from "@/components/PPCHero/GoogleAdsSection";
import PaidCampaigns from "@/components/PPCHero/PaidCampaigns";
import AudienceTargeting from "@/components/PPCHero/AudienceTargeting";
import BudgetStrategy from "@/components/PPCHero/BudgetStrategy";

 import RoiContentSection from "@/components/PPCHero/RoiContentSection";
  import PPCBenefits from "@/components/PPCHero/PPCBenefits";
  import { conferencePpcFaqData   } from "@/components/PPCHero/data";




import FaqSection from "@/components/common/FaqSection";

export default function Page() {
  return (
    <>
     
      
     
<PPCHero/>
<GoogleAdsSection/>
<PaidCampaigns/>
<AudienceTargeting />
<BudgetStrategy />
<RoiContentSection />
<PPCBenefits />
{/* <ConferencePPCROI /> */}
<FaqSection  data={conferencePpcFaqData} />
   
     
    
    </>
  );
}