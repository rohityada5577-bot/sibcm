
import FaqSection from "@/components/common/FaqSection";
import { EmailmarketingheroContent } from "@/components/email-marketing/data";
import AboutSection from "@/components/about/AboutSection";
import WhoWeAreBento from "@/components/about/WhoWeAreSection";
import { convertattendees } from "@/components/email-marketing/data";
import { EventInvitationEmailStrategy } from "@/components/email-marketing/data";
import PromotionMethodology from "@/components/Promotion/PromotionMethodology";
import LandingSeoSection from "@/components/Conference_SEO/LandingSeoSection";
import { AutomationforConferenceGrowth } from "@/components/email-marketing/data";
import ExpertsSection from "@/components/about/ExpertsSection";

import { IncreasingOpenRatesandClickRates } from "@/components/email-marketing/data";
import { NurturingLeadsforEventSignups } from "@/components/email-marketing/data";
import { WhyEmailMarketingWorksforConferences } from "@/components/email-marketing/data";
import { conferenceEmailMarketingFaqData } from "@/components/email-marketing/data";
import BudgetStrategy from "@/components/PPCHero/BudgetStrategy";

export default function Page() {
  return (
    <>
          <AboutSection  data={EmailmarketingheroContent} />
          <WhoWeAreBento  data={convertattendees} />
          <PromotionMethodology  data={ EventInvitationEmailStrategy }/>
          <LandingSeoSection  data={ AutomationforConferenceGrowth }/>
          <ExpertsSection data={IncreasingOpenRatesandClickRates} />
          <WhoWeAreBento  data={NurturingLeadsforEventSignups} />
          <BudgetStrategy  data={ WhyEmailMarketingWorksforConferences }/>
         
      <FaqSection data={conferenceEmailMarketingFaqData} />
   
     
    
    </>
  );
}