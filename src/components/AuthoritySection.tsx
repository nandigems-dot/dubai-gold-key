import { Building2, TrendingUp, Globe } from "lucide-react";
import zubairImage from "@/assets/zubair-malik.jpg";

const AuthoritySection = () => {
  const badges = [
    { icon: Building2, text: "Dubai Real Estate" },
    { icon: TrendingUp, text: "Luxury & Investment Expert" },
    { icon: Globe, text: "Golden Visa Guidance" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
              {/* Gold border frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-primary/30 rounded-2xl -rotate-3" />
              <div className="absolute -inset-3 sm:-inset-4 border border-primary/20 rounded-2xl rotate-2" />
              
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden gold-glow">
                <img 
                  src={zubairImage} 
                  alt="Zubair Malik - Dubai Real Estate Investment Advisor"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
              Your Trusted Advisor
            </p>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Zubair Malik
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-4 sm:mb-6">
              Dubai Real Estate Investment Advisor
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Specializing in luxury villas, off-plan investments, and high-ROI properties across Dubai. 
              Trusted by international clients for transparent advice, premium access, and end-to-end support.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="glass-card px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 hover-lift"
                >
                  <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
