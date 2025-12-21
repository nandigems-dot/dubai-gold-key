import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dubai-skyline-hero.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20Dubai%20real%20estate%20investment.";
  const instagramLink = "https://www.instagram.com/zubair_realtor_dxb/";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Trust Line */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6 animate-fade-in-up font-medium">
            Dubai Real Estate Investment
          </p>
          
          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Invest Smart in Dubai's Most{" "}
            <span className="text-gold-gradient">Profitable</span> Luxury Properties
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Villas • Off-Plan Projects • High ROI • Golden Visa Assistance
          </p>
          
          {/* Trust Line */}
          <p className="text-base md:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Helping global investors secure premium Dubai real estate with confidence
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild
              variant="gold" 
              size="xl" 
              className="w-full sm:w-auto group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Get Exclusive Deals on WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild
              variant="goldOutline" 
              size="xl" 
              className="w-full sm:w-auto group"
            >
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5" />
                DM for Investment Consultation
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
