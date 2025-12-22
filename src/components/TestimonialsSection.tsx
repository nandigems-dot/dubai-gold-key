import { Quote, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Developer logos
import nakheelLogo from "@/assets/developers/nakheel.png";
import meraasLogo from "@/assets/developers/meraas.png";
import emaarLogo from "@/assets/developers/emaar.png";
import sobhaLogo from "@/assets/developers/sobha.png";
import damacLogo from "@/assets/developers/damac.png";
import imtiazLogo from "@/assets/developers/imtiaz.png";
import binghattiLogo from "@/assets/developers/binghatti.png";
import ellingtonLogo from "@/assets/developers/ellington.png";
import beyondLogo from "@/assets/developers/beyond.png";
import omniyatLogo from "@/assets/developers/omniyat.png";
import aldarLogo from "@/assets/developers/aldar.png";
import alhamraLogo from "@/assets/developers/alhamra.png";
import rakpropertiesLogo from "@/assets/developers/rakproperties.png";
import aqaarLogo from "@/assets/developers/aqaar.png";
import aradaLogo from "@/assets/developers/arada.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Zubair made my first Dubai investment seamless. His knowledge of the market and transparent approach gave me complete confidence.",
      author: "Rajesh K.",
      location: "Mumbai, India",
    },
    {
      quote: "Exceptional service! Got early access to an off-plan project that's already appreciated 15%. Highly recommend Zubair for Dubai investments.",
      author: "Sarah M.",
      location: "London, UK",
    },
    {
      quote: "Professional, knowledgeable, and always available. Zubair helped me secure my Golden Visa through a smart property investment.",
      author: "Ahmed H.",
      location: "Riyadh, Saudi Arabia",
    },
  ];

  const developers = [
    { name: "Nakheel", logo: nakheelLogo },
    { name: "Meraas", logo: meraasLogo },
    { name: "Emaar", logo: emaarLogo },
    { name: "Sobha", logo: sobhaLogo },
    { name: "Damac", logo: damacLogo },
    { name: "Imtiaz", logo: imtiazLogo },
    { name: "Binghatti", logo: binghattiLogo },
    { name: "Ellington", logo: ellingtonLogo },
    { name: "Beyond", logo: beyondLogo },
    { name: "Omniyat", logo: omniyatLogo },
    { name: "Aldar", logo: aldarLogo },
    { name: "Al Hamra Village", logo: alhamraLogo },
    { name: "RAK Properties", logo: rakpropertiesLogo },
    { name: "Aqaar", logo: aqaarLogo },
    { name: "Arada", logo: aradaLogo },
  ];

  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Trusted by Global Investors
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-5 sm:p-6 lg:p-8 hover-lift"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30 mb-3 sm:mb-4" />
              <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Logos */}
        <div className="border-t border-b border-border/50 py-8 sm:py-10 lg:py-12">
          <p className="text-center text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 uppercase tracking-widest px-4">
            Partnering with Dubai's Premier Developers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {developers.map((developer, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-12 sm:h-14 px-2 opacity-70 hover:opacity-100 transition-opacity"
                title={developer.name}
              >
                <img 
                  src={developer.logo} 
                  alt={`${developer.name} logo`}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">Follow for daily updates & exclusive deals</p>
          <Button 
            asChild
            variant="goldOutline"
            size="default"
            className="text-sm sm:text-base"
          >
            <a 
              href="https://www.instagram.com/zubair_realtor_dxb/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              @zubair_realtor_dxb
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;