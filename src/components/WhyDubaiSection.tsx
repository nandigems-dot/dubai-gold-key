import { TrendingUp, Building2, FileCheck, Globe, Home } from "lucide-react";

const WhyDubaiSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High ROI & Tax-Free Returns",
      description: "Enjoy exceptional rental yields and zero property taxes",
    },
    {
      icon: Building2,
      title: "World-Class Infrastructure",
      description: "Iconic developments and premium lifestyle amenities",
    },
    {
      icon: FileCheck,
      title: "Golden Visa Eligibility",
      description: "Secure long-term residency with property investment",
    },
    {
      icon: Globe,
      title: "Global Investor Friendly",
      description: "100% foreign ownership and easy transactions",
    },
    {
      icon: Home,
      title: "Strong Rental Demand",
      description: "High occupancy rates and growing expat population",
    },
  ];

  return (
    <section id="why-dubai" className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Why Dubai
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The World's Premier Investment Destination
          </h2>
          <p className="text-muted-foreground text-lg">
            Dubai isn't just real estate — it's a <span className="text-primary font-semibold">global wealth strategy</span>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-8 group hover-lift cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDubaiSection;
