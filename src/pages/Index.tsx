import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const passedHero = window.scrollY > 80;
      setShowMobileCta(passedHero);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="pb-24 md:pb-0">
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
      <div
        className={`md:hidden fixed left-0 right-0 z-50 px-3 pb-3 transition-all duration-300 ${
          showMobileCta ? "bottom-0 opacity-100" : "-bottom-20 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          variant="outline"
          className="w-full h-12 text-sm font-semibold rounded-lg bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
          onClick={() => setConsultOpen(true)}
        >
          Book a Consultation
        </Button>
      </div>
      {/* Desktop Sticky Consultation Button (Rotated) */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setConsultOpen(true)}
          className="gradient-bg text-primary-foreground hover:opacity-90 transition-all px-3 py-8 rounded-r-[1.25rem] font-bold tracking-widest text-xs uppercase cursor-pointer shadow-[0_0_20px_rgba(var(--primary),0.3)]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Enquire Now
        </button>
      </div>
    </main>
  );
};

export default Index;
