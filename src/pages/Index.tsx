
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PricingSection from "@/components/home/PricingSection";
import ContactCTA from "@/components/home/ContactCTA";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import AboutAltSection from "@/components/home/AboutAltSection";
import TeamSection from "@/components/home/TeamSection";
import CybersecurityServices from "@/components/home/CybersecurityServices";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <CybersecurityServices />
        <ServicesGrid />
        <StatsSection />
        <AboutAltSection />
        <TeamSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
