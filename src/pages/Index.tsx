import { lazy, Suspense, memo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load ALL below-fold components for better initial load
const AuthoritySection = lazy(() => import("@/components/AuthoritySection"));
const LeadFormSection = lazy(() => import("@/components/LeadFormSection"));
const WhyDubaiSection = lazy(() => import("@/components/WhyDubaiSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyZubairSection = lazy(() => import("@/components/WhyZubairSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

// Minimal skeleton for lazy sections
const SectionSkeleton = memo(() => (
  <div className="min-h-[200px] bg-background" aria-hidden="true" />
));
SectionSkeleton.displayName = "SectionSkeleton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Critical path - load immediately */}
      <Navbar />
      <HeroSection />
      
      {/* Below-fold content - lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <AuthoritySection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <LeadFormSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WhyDubaiSection />
        <ServicesSection />
        <WhyZubairSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </main>
  );
};

export default Index;
