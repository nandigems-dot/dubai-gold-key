import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load all below-the-fold components
const AuthoritySection = lazy(() => import("@/components/AuthoritySection"));
const LeadFormSection = lazy(() => import("@/components/LeadFormSection"));
const WhyDubaiSection = lazy(() => import("@/components/WhyDubaiSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyZubairSection = lazy(() => import("@/components/WhyZubairSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

// Minimal loading placeholder with fixed height to prevent CLS
const SectionPlaceholder = ({ height = 200 }: { height?: number }) => (
  <div className="bg-background" style={{ minHeight: `${height}px` }} />
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionPlaceholder height={400} />}>
        <AuthoritySection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={500} />}>
        <LeadFormSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={300} />}>
        <WhyDubaiSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={300} />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={300} />}>
        <WhyZubairSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={500} />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={200} />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder height={150} />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </main>
  );
};

export default Index;
