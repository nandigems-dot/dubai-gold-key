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
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
            Why Dubai
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            The World's Premier Investment Destination
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-2">
            Dubai isn't just real estate — it's a <span className="text-primary font-semibold">global wealth strategy</span>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-5 sm:p-6 lg:p-8 group hover-lift cursor-default"
            >
              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
