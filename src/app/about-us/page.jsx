import AboutSection from "@/components/about/AboutSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import MissionExperience from "@/components/about/MissionExperience";
import TrustSection from "@/components/about/TrustSection";
import ExpertsSection from "@/components/about/ExpertsSection";
import FaqSection from "@/components/common/FaqSection";
import AttendeeGrowthSection from "@/components/about/AttendeeGrowthSection";
import { missionExperienceContent } from "@/components/about/data";
import { conferenceMarketingAgencyFaqData  } from "@/components/about/data";


export default function Page() {
  return (
    <>
      <AboutSection />
      <WhoWeAreSection />
      <MissionExperience  data={missionExperienceContent}/>
      <TrustSection />
      <ExpertsSection />
      <AttendeeGrowthSection />
       <FaqSection data={conferenceMarketingAgencyFaqData } />
       
    
    </>
  );
}