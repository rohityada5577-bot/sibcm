import HeroSection from "@/components/home/HeroSection";
import VelocitySection from "@/components/home/VelocitySection";
import RegistrationsSection from "@/components/home/RegistrationsSection";
import AttendeeSection from "@/components/home/AttendeeSection";
import StrategySection from "@/components/home/StrategySection";
import ChannelsSection from "@/components/home/ChannelsSection";
import WhyChoose from "@/components/home/WhyChoose";
import IndustriesSection from "@/components/home/IndustriesSection";

import FaqSection from "@/components/common/FaqSection";

import { conferenceSeoFaqData } from "@/components/home/data";



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
      <IndustriesSection />
      <FaqSection    data={conferenceSeoFaqData}  />
      {/* <Testimonials /> */}

    </>
  );
}