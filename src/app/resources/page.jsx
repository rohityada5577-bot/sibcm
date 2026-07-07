import MarketingResourcesSection from "@/components/resources/MarketingResourcesSection";
import DownloadableTemplatesSection from "@/components/resources/DownloadableTemplatesSection";
import EmailSequencesTimeline from "@/components/resources/EmailSequencesTimeline";
import SpeakerKitSection from "@/components/resources/SpeakerKitSection";
import LandingPageCopywright from "@/components/resources/LandingPageCopywright";
import ChecklistResources from "@/components/resources/ChecklistResources";
import ConferenceToolsSection from "@/components/resources/ConferenceToolsSection";
import ResourceLibrarySection from "@/components/resources/ResourceLibrarySection";


export default function Page() {
  return (
    <>
      <MarketingResourcesSection />
      <DownloadableTemplatesSection />
       <EmailSequencesTimeline />
        <SpeakerKitSection />
        <LandingPageCopywright />
          <ChecklistResources />
          <ConferenceToolsSection />
          <ResourceLibrarySection />
  
    
    </>
  );
}