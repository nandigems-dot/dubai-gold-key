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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
              The Zubair Advantage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Work With{" "}
              <span className="text-gold-gradient">Zubair</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the difference of working with a dedicated investment consultant 
              who prioritizes your success and long-term wealth building.
            </p>
            
            {/* Differentiators */}
            <ul className="space-y-4">
              {differentiators.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "100+", label: "Happy Clients" },
              { value: "₹500Cr+", label: "Properties Sold" },
              { value: "24/7", label: "Client Support" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center hover-lift"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
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
