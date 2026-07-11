

import FaqSection from "@/components/common/FaqSection";
import SponsorshipMarketingSection from "@/components/sponsormarketing/SponsorshipMarketingSection";
import SponsorAcquisitionSection from "@/components/sponsormarketing//SponsorAcquisitionSection";
import SponsorshipPackagesSection from "@/components/sponsormarketing/SponsorshipPackagesSection";
import SponsorValueSection from "@/components/sponsormarketing/SponsorValueSection";
import SponsorInvestmentSection from "@/components/sponsormarketing/SponsorInvestmentSection";


export default function Page() {
  return (
    <>
     
       <SponsorshipMarketingSection />
       <SponsorAcquisitionSection />
       <SponsorshipPackagesSection />
       <SponsorValueSection />
       <SponsorInvestmentSection />
  
      
    
        
          <FaqSection />
         
       
     
         
  
    
    </>
  );
}