import HeroSection from "@/components/home/HeroSection";
import VelocitySection from "@/components/home/VelocitySection";
import RegistrationsSection from "@/components/home/RegistrationsSection";
import AttendeeSection from "@/components/home/AttendeeSection";
import StrategySection from "@/components/home/StrategySection";
import ChannelsSection from "@/components/home/ChannelsSection";
import WhyChoose from "@/components/home/WhyChoose";
import FaqSection from "@/components/common/FaqSection";



export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VelocitySection />
      <RegistrationsSection />
      <AttendeeSection />
      <StrategySection />
      <ChannelsSection />
      <WhyChoose />
      <FaqSection />
      {/* <Testimonials /> */}

    </>
  );
}