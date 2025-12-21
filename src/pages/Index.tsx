import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import LeadFormSection from "@/components/LeadFormSection";
import WhyDubaiSection from "@/components/WhyDubaiSection";
import ServicesSection from "@/components/ServicesSection";
import PropertiesSection from "@/components/PropertiesSection";
import WhyZubairSection from "@/components/WhyZubairSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <LeadFormSection />
      <WhyDubaiSection />
      <ServicesSection />
      <PropertiesSection />
      <WhyZubairSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
