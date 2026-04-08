import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProcessSection from "@/components/landing/ProcessSection";
import JourneySection from "@/components/landing/JourneySection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import ConsultationModal from "@/components/landing/ConsultationModal";

const Index = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <HeroSection onBookConsult={() => setConsultOpen(true)} />
      <AboutSection />
      <ProcessSection />
      <JourneySection />
      <ServicesSection />
      <WhyUsSection />
      <ResultsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ConsultationModal open={consultOpen} onOpenChange={setConsultOpen} />
    </main>
  );
};

export default Index;
