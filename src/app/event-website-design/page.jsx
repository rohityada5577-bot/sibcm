
import FaqSection from "@/components/common/FaqSection";
import ConferenceWebsiteHero from "@/components/event-website-design/ConferenceWebsiteHero";
import EventLandingPageStructure from "@/components/event-website-design/EventLandingPageStructure";
import UXRegistrationSection from "@/components/event-website-design/UXRegistrationSection";
import MobileConferenceSection from "@/components/event-website-design/MobileConferenceSection";
import EventFunnelChecklist from "@/components/event-website-design/EventFunnelChecklist";
import EventWebsiteMatrix from "@/components/event-website-design/EventWebsiteMatrix";
import WebsiteDesignImpactSection from "@/components/event-website-design/WebsiteDesignImpactSection";
import { conferenceWebsiteDesignFaqData  } from "@/components/event-website-design/data";




export default function Page() {
  return (
    <>
          {/* <AboutSection  data={EmailmarketingheroContent} /> */}
       
         <ConferenceWebsiteHero  />
         <EventLandingPageStructure />
         <UXRegistrationSection />
         <MobileConferenceSection />
         <EventFunnelChecklist />
         <EventWebsiteMatrix />
         <WebsiteDesignImpactSection />
        
        
        <FaqSection  data={conferenceWebsiteDesignFaqData }/>
   
     
    
    </>
  );
}