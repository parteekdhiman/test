import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("./main/HeroSection"));
const FeaturesSection = lazy(() => import("./main/FeaturesSection"));
const AboutSection = lazy(() => import("./main/AboutSection"));
const SupportSection = lazy(() => import("./form/SupportSection"));
const ServicesSection = lazy(() => import("./main/ServicesSection"));
const Package = lazy(() => import("./main/Package"));
const StatsSection = lazy(() => import("./main/StatsSection"));
const Courseslider = lazy(() => import("./main/Courseslider"));
const InternationalCertification = lazy(() =>
  import("./main/InternationalCertification")
);

function Main() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <FeaturesSection />
      <Courseslider />
      <InternationalCertification />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <Package />
      <SupportSection />
    </Suspense>
  );
}

export default Main;
