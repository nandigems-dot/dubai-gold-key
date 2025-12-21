import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import propertyVilla from "@/assets/property-villa-1.jpg";
import propertyPenthouse from "@/assets/property-penthouse-1.jpg";
import propertyPalm from "@/assets/property-palm-villa.jpg";
import propertyBusinessBay from "@/assets/property-business-bay.jpg";

const PropertiesSection = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20learning%20more%20about%20your%20featured%20properties.";

  const properties = [
    {
      image: propertyVilla,
      title: "Modern Luxury Villa",
      location: "Emirates Hills",
      roi: "8-10%",
      price: "AED 15M - 25M",
    },
    {
      image: propertyPenthouse,
      title: "Sky Penthouse",
      location: "Dubai Marina",
      roi: "7-9%",
      price: "AED 8M - 18M",
    },
    {
      image: propertyPalm,
      title: "Beachfront Mansion",
      location: "Palm Jumeirah",
      roi: "6-8%",
      price: "AED 25M - 50M",
    },
    {
      image: propertyBusinessBay,
      title: "Premium Apartment",
      location: "Business Bay",
      roi: "9-12%",
      price: "AED 2M - 5M",
    },
  ];

  return (
    <section id="properties" className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
            Featured Properties
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Exclusive Investment Opportunities
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-2">
            Hand-picked properties offering exceptional value and returns
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                {/* Location */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-primary text-xs sm:text-sm mb-1.5 sm:mb-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{property.location}</span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {property.title}
                </h3>
                
                {/* Stats */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-xs sm:text-sm text-foreground">ROI: {property.roi}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {property.price}
                  </div>
                </div>
                
                {/* CTA */}
                <Button 
                  asChild
                  variant="goldOutline" 
                  size="sm"
                  className="group/btn text-xs sm:text-sm"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Request Details
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
