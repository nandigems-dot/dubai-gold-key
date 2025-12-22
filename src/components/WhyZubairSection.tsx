import { CheckCircle2 } from "lucide-react";

const WhyZubairSection = () => {
  const differentiators = [
    "Direct access to top developers",
    "Transparent & honest guidance",
    "ROI-focused recommendations",
    "End-to-end support (booking to handover)",
    "Dedicated WhatsApp assistance",
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
              The Zubair Advantage
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Why Work With{" "}
              <span className="text-gold-gradient">Zubair</span>?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience the difference of working with a dedicated investment advisor 
              who prioritizes your success and long-term wealth building.
            </p>
            
            {/* Differentiators */}
            <ul className="space-y-3 sm:space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {differentiators.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "100+", label: "Happy Clients" },
              { value: "20M+", label: "AED Properties Sold" },
              { value: "24/7", label: "Client Support" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-4 sm:p-6 lg:p-8 text-center hover-lift"
              >
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZubairSection;
