import PromotionHero from "@/components/Promotion/PromotionHero";
import PromotionMethodology from "@/components/Promotion/PromotionMethodology";
import RegistrationGrowthSection from "@/components/Promotion/RegistrationGrowthSection";
import DigitalChannelsSection from "@/components/Promotion/DigitalChannelsSection";
import AttendanceChallengesSection from "@/components/Promotion/AttendanceChallengesSection";
import { conferencePromotionFaqData   } from "@/components/Promotion/data";






import FaqSection from "@/components/common/FaqSection";

export default function Page() {
  return (
    <>
      <PromotionHero />
      <PromotionMethodology />
      <RegistrationGrowthSection />
      <DigitalChannelsSection />
      <AttendanceChallengesSection />
      <FaqSection  data={conferencePromotionFaqData } />
    </>
  );
}