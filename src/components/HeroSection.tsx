import { Button } from "@/components/ui/button";

// Inline SVG icons to avoid loading lucide-react chunk for hero
const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const HeroSection = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20Dubai%20real%20estate%20investment.";
  const instagramLink = "https://www.instagram.com/zubair_realtor_dxb/";
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Hero Image - Responsive srcset with higher compression for mobile */}
      <picture>
        {/* Mobile: smaller image with higher compression */}
        <source
          media="(max-width: 640px)"
          srcSet="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=640&q=60&fm=webp&auto=format"
          type="image/webp"
        />
        {/* Tablet */}
        <source
          media="(max-width: 1024px)"
          srcSet="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1024&q=70&fm=webp&auto=format"
          type="image/webp"
        />
        {/* Desktop */}
        <source
          srcSet="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=75&fm=webp&auto=format"
          type="image/webp"
        />
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=75&fm=webp&auto=format"
          alt="Dubai Skyline - Luxury Real Estate"
          width={1400}
          height={933}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      
      {/* Overlay Gradient - Solid, no blur for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Trust Line */}
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.3em] text-primary mb-4 sm:mb-6 font-medium">
            Dubai Real Estate Investment
          </p>
          
          {/* Main Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            Invest Smart in Dubai's Most{" "}
            <span className="text-gold-gradient">Profitable</span> Luxury Properties
          </h1>
          
          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4 font-light">
            Villas • Off-Plan Projects • High ROI • Golden Visa
          </p>
          
          {/* Trust Line */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Helping global investors secure premium Dubai real estate with confidence
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <Button 
              asChild
              variant="gold" 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircleIcon />
                Get Exclusive Deals on WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild
              variant="goldOutline" 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base group"
            >
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <MailIcon />
                DM for Investment Consultation
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile for performance */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
