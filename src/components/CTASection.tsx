import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20ready%20to%20invest%20in%20Dubai%20real%20estate.";
  const instagramLink = "https://www.instagram.com/zubair_realtor_dxb/";

  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto text-center px-2">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
            Start Your Investment Journey
          </p>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Ready to Invest in{" "}
            <span className="text-gold-gradient">Dubai</span>?
          </h2>
          
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get access to exclusive off-plan deals, luxury villas & high-ROI opportunities 
            before public launch.
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <Button 
              asChild
              variant="gold" 
              size="lg"
              className="w-full sm:w-auto group animate-pulse-gold text-sm sm:text-base"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild
              variant="goldOutline" 
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                Send DM on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
