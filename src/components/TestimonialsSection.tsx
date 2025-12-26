import { Quote, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Developer Logos
import nakheelLogo from "@/assets/developers/nakheel.jpg";
import meraasLogo from "@/assets/developers/meraas.png";
import emaarLogo from "@/assets/developers/emaar.jpg";
import sobhaLogo from "@/assets/developers/sobha.png";
import damacLogo from "@/assets/developers/damac.png";
import imtiazLogo from "@/assets/developers/imtiaz.jpg";
import binghattiLogo from "@/assets/developers/binghatti.jpg";
import ellingtonLogo from "@/assets/developers/ellington.png";
import beyondLogo from "@/assets/developers/beyond.png";
import aldarLogo from "@/assets/developers/aldar.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Zubair made my first Dubai investment seamless. His knowledge of the market and transparent approach gave me complete confidence.",
      author: "Khalid A.",
      location: "Abu Dhabi, UAE",
    },
    {
      quote: "Exceptional service! Got early access to an off-plan project that's already appreciated 15%. Highly recommend Zubair for Dubai investments.",
      author: "Fatima R.",
      location: "Dubai, UAE",
    },
    {
      quote: "Professional, knowledgeable, and always available. Zubair helped me secure my Golden Visa through a smart property investment.",
      author: "Mohammed H.",
      location: "Sharjah, UAE",
    },
  ];

  const developers = [
    { name: "Nakheel", logo: nakheelLogo, scale: "scale-110", bgClass: "bg-[#0d2e3f]" },
    { name: "Meraas", logo: meraasLogo, scale: "scale-110", bgClass: "bg-white" },
    { name: "Emaar", logo: emaarLogo, scale: "scale-110", bgClass: "bg-white" },
    { name: "Sobha", logo: sobhaLogo, scale: "scale-150", bgClass: "bg-white" },
    { name: "Damac", logo: damacLogo, scale: "scale-125", bgClass: "bg-white" },
    { name: "Imtiaz", logo: imtiazLogo, scale: "scale-125", bgClass: "bg-white" },
    { name: "Binghatti", logo: binghattiLogo, scale: "scale-125", bgClass: "bg-white" },
    { name: "Ellington", logo: ellingtonLogo, scale: "scale-110", bgClass: "bg-white" },
    { name: "Beyond", logo: beyondLogo, scale: "scale-110", bgClass: "bg-white" },
    { name: "Aldar", logo: aldarLogo, scale: "scale-100", bgClass: "bg-white" },
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
            Trusted by UAE Investors
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
        <div className="border-t border-b border-border/50 py-10 sm:py-12 lg:py-16">
          <p className="text-center text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10 uppercase tracking-widest px-4">
            Partnering with Dubai's Premier Developers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start justify-items-center">
            {developers.map((developer, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3"
              >
                <div className={`flex items-center justify-center p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-[160px] h-24 sm:h-28 border border-border/20 overflow-hidden ${developer.bgClass || 'bg-white'}`}>
                  <img 
                    src={developer.logo} 
                    alt={`${developer.name} logo`}
                    width={120}
                    height={80}
                    loading="lazy"
                    className={`max-h-full max-w-full object-contain ${developer.scale}`}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground/80 text-center">
                  {developer.name}
                </span>
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
