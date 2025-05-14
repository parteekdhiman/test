import React from "react";
import HeroSection from "./main/HeroSection";
import FeaturesSection from "./main/FeaturesSection";
import AboutSection from "./main/AboutSection";
import SupportSection from "./form/SupportSection";
import ServicesSection from "./main/ServicesSection";
import CTASection from "./main/CTASection";
import Package from "./main/Package";
import StatsSection from "./main/StatsSection";

function Main() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <SupportSection />
      <CTASection />
      <Package />
    </>
  );
}

export default Main;
