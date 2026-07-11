import AboutSection from "@/components/about/AboutSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import MissionExperience from "@/components/about/MissionExperience";
import TrustSection from "@/components/about/TrustSection";
import ExpertsSection from "@/components/about/ExpertsSection";
import FaqSection from "@/components/common/FaqSection";
import AttendeeGrowthSection from "@/components/about/AttendeeGrowthSection";
import { missionExperienceContent } from "@/components/about/data";

export const seoData = {
  primaryKeyword: "Conference Marketing Agency",

  secondaryKeywords: [
    "Conference Growth Agency, Event Marketing Agency, Summit Marketing Agency, Conference Promotion Services, Event Growth Experts",
   
  ],

  longTailKeywords: [
   
    "Conference promotion strategies for organizers",
    "LinkedIn marketing for conferences",
    "SEO services for conferences",
    "PPC advertising for conference registrations",
    "Conference social media marketing services",
    "How to increase conference registrations"
  ],

  queryKeywords: [
    "What is conference marketing?",  
    "How do you market a conference?",
    "How can I increase conference attendance?",
    "How do I promote a B2B conference?",
    "What is the best marketing strategy for conferences?",
    "How much does conference marketing cost?",
    "Does LinkedIn work for conference promotion?",
    "Is PPC effective for conference marketing?"
  ],

  commercialKeywords: [
    "Conference marketing agency",
    "Conference promotion services",
    "Conference marketing consultant",
    "Event marketing agency",
    "Conference advertising services",
    "Conference attendee acquisition agency"
  ]
};

export default function Page() {
  return (
    <>
      <AboutSection />
      <WhoWeAreSection />
      <MissionExperience  data={missionExperienceContent}/>
      <TrustSection />
      <ExpertsSection />
      <AttendeeGrowthSection />
       <FaqSection />
       
    
    </>
  );
}