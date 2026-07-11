
import FaqSection from "@/components/common/FaqSection";
import { ConferenceContentMarketing } from "@/components/content-marketing/data";
import AccountabilityTrust from "@/components/testimonials/AccountabilityTrust";
import BloggingStrategySection from "@/components/content-marketing/BloggingStrategySection";
import SeoConferencePages from "@/components/content-marketing/SeoConferencePages";
import ThoughtLeadershipSection from "@/components/content-marketing/ThoughtLeadershipSection";
import ConferenceContentCalendar from "@/components/content-marketing/ConferenceContentCalendar";
import ContentTrustSection from "@/components/content-marketing/ContentTrustSection";
import ContentMarketingImpact from "@/components/content-marketing/ContentMarketingImpact";



export default function Page() {
  return (
    <>
          {/* <AboutSection  data={EmailmarketingheroContent} /> */}
       
         <AccountabilityTrust data={ConferenceContentMarketing} />
         <BloggingStrategySection />
         <SeoConferencePages />
         <ThoughtLeadershipSection />
         <ConferenceContentCalendar />
         <ContentTrustSection />
         <ContentMarketingImpact />
        
        <FaqSection />
   
     
    
    </>
  );
}