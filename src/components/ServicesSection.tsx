import { Home, Building, TrendingUp, FileCheck, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Luxury Villas",
      description: "Premium villas in Palm Jumeirah, Emirates Hills, and exclusive communities",
    },
    {
      icon: Building,
      title: "Off-Plan Projects",
      description: "Early access to developments from top Dubai builders",
    },
    {
      icon: TrendingUp,
      title: "High ROI Properties",
      description: "Carefully selected investments for maximum returns",
    },
    {
      icon: FileCheck,
      title: "Golden Visa Consultation",
      description: "Expert guidance on visa eligibility through property investment",
    },
    {
      icon: BarChart3,
      title: "Investment Advisory",
      description: "Strategic advice on buying, holding, and exit strategies",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end support for your Dubai property investment journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-card p-8 h-full transition-all duration-300 group-hover:border-primary/50 hover-lift">
                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-primary/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
