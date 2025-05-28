import React from "react";
import HeroSection from "./main/HeroSection";
import FeaturesSection from "./main/FeaturesSection";
import AboutSection from "./main/AboutSection";
import SupportSection from "./form/SupportSection";
import ServicesSection from "./main/ServicesSection";
import CTASection from "./main/CTASection";
import Package from "./main/Package";
import StatsSection from "./main/StatsSection";
import Courseslider from "./main/Courseslider";
import BlogsSection from "./main/BlogsSection";
import InternationalCertification from "./main/InternationalCertification";

function Main() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Courseslider/>
      <InternationalCertification/>
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      {/* <CTASection /> */}
      <Package />
      <SupportSection />
    </>
  );
}

export default Main;
