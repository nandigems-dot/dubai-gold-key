import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadFormSection from "@/components/LeadFormSection";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load below-the-fold components for better initial load performance
const AuthoritySection = lazy(() => import("@/components/AuthoritySection"));
const WhyDubaiSection = lazy(() => import("@/components/WhyDubaiSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyZubairSection = lazy(() => import("@/components/WhyZubairSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal loading placeholder
const SectionPlaceholder = () => (
  <div className="min-h-[200px] bg-background" />
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionPlaceholder />}>
        <AuthoritySection />
      </Suspense>
      <LeadFormSection />
      <Suspense fallback={<SectionPlaceholder />}>
        <WhyDubaiSection />
        <ServicesSection />
        <WhyZubairSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </main>
  );
};

export default Index;
