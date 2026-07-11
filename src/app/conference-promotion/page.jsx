import PromotionHero from "@/components/Promotion/PromotionHero";
import PromotionMethodology from "@/components/Promotion/PromotionMethodology";
import PromotionStrategy from "@/components/Promotion/PromotionStrategy";
import RegistrationGrowthSection from "@/components/Promotion/RegistrationGrowthSection";
import DigitalChannelsSection from "@/components/Promotion/DigitalChannelsSection";
import AttendanceChallengesSection from "@/components/Promotion/AttendanceChallengesSection";





import FaqSection from "@/components/common/FaqSection";

export default function Page() {
  return (
    <>
      <PromotionHero />
      <PromotionMethodology />
      {/* <PromotionStrategy /> */}
      <RegistrationGrowthSection />
      <DigitalChannelsSection />
      <AttendanceChallengesSection />
      <FaqSection />
    </>
  );
}