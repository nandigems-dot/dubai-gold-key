import { MapPin, Building2, Home, Waves, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Properties = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20learning%20more%20about%20Dubai%20property%20investments.";

  const developers = [
    {
      name: "Palm Jebel Ali",
      projects: [
        {
          name: "Palm Jebel Ali Villas",
          location: "Premium fronds of Palm Jebel Ali – direct beachfront and waterfront living",
          typology: [
            "5-6 Bedroom Beach Villas",
            "7-Bedroom Coral Villas (premium)",
            "Large Plots Available for custom design"
          ],
          summary: "Exclusive beachfront villas on Dubai's iconic Palm Jebel Ali, offering unparalleled waterfront lifestyle with private beach access.",
          icon: "villa"
        },
        {
          name: "Palm Central Private Residences",
          location: "Between Fronds M & N on Palm Jebel Ali's central spine",
          typology: [
            "1–5 Bedroom Apartments",
            "Townhouses",
            "Penthouses",
            "Beach House Style Units (4-bed + direct beach access)"
          ],
          summary: "Contemporary resort-style residences across three mid-rise buildings with direct beach access and premium amenities.",
          icon: "apartment"
        }
      ]
    },
    {
      name: "Emaar",
      projects: [
        {
          name: "The Oasis by Emaar",
          location: "Along Dubai–Al Ain Road – 20 mins from Downtown Dubai",
          typology: [
            "4, 5 & 6-bedroom ultra-luxury standalone villas",
            "Large plots with private pools & lagoons"
          ],
          summary: "Ultra-luxury standalone villas positioned along future growth corridors, offering expansive plots with private pools and lagoon views.",
          icon: "villa"
        },
        {
          name: "Grand Polo Club & Resort",
          location: "Near Dubai Investment Park – Strategic access to Expo City & Al Maktoum Airport",
          typology: [
            "Luxury villas & townhouses",
            "Polo-themed lifestyle community",
            "Green open spaces + equestrian facilities"
          ],
          summary: "A prestigious polo-themed lifestyle community featuring luxury villas and townhouses with equestrian facilities and expansive green spaces.",
          icon: "villa"
        },
        {
          name: "The Heights Country Club & Wellness",
          location: "Near Expo City Dubai – Close to E611 & E77 highways",
          typology: [
            "3–5 bedroom villas & townhouses",
            "Wellness-centric layouts",
            "Family-oriented community"
          ],
          summary: "A wellness-focused family community offering villas and townhouses with health-centric designs and country club amenities.",
          icon: "villa"
        }
      ]
    },
    {
      name: "Binghatti",
      projects: [
        {
          name: "Binghatti Terraces",
          location: "Meydan / Nad Al Sheba – Close to Downtown Dubai & Business Bay",
          typology: [
            "Studio, 1 & 2 Bedroom Apartments",
            "Mid-rise residential tower",
            "Contemporary Binghatti design language"
          ],
          summary: "A mid-rise residential tower featuring Binghatti's signature contemporary design with excellent connectivity to Downtown Dubai.",
          icon: "apartment"
        },
        {
          name: "Binghatti Vintage",
          location: "Jumeirah Village Circle (JVC) – One of Dubai's highest rental-demand zones",
          typology: [
            "Studios, 1 & 2 Bedroom Apartments",
            "Classic + modern architectural blend",
            "Smart layouts with balconies"
          ],
          summary: "Classic meets modern in this JVC development, located in one of Dubai's most sought-after rental communities.",
          icon: "apartment"
        },
        {
          name: "Binghatti Cullinan",
          location: "Business Bay – Minutes from Downtown & Dubai Mall",
          typology: [
            "Luxury 1, 2 & 3 Bedroom Apartments",
            "Signature architectural landmark",
            "High-end finishes & amenities"
          ],
          summary: "A signature architectural landmark in Business Bay offering luxury apartments with premium finishes and world-class amenities.",
          icon: "apartment"
        }
      ]
    },
    {
      name: "Sobha",
      projects: [
        {
          name: "Sobha Elwood",
          location: "Dubailand, along Al Ain Road / Sheikh Mohammed Bin Zayed Road (E311)",
          typology: [
            "Luxury villa community",
            "Strategic access to Downtown Dubai, Dubai Silicon Oasis",
            "Close to Dubai Academic City & Dubai International Airport"
          ],
          summary: "A luxury villa community in Dubailand with strategic connectivity to key Dubai destinations and a focus on premium living.",
          icon: "villa"
        }
      ]
    },
    {
      name: "Beyond (SIORA)",
      projects: [
        {
          name: "Hado by Beyond",
          location: "SIORA, Dubai Islands (formerly Deira Islands) – North Beach with direct waterfront access",
          typology: [
            "Premium apartments across three residential towers",
            "Coastal design language",
            "Direct beach and waterfront access",
            "Open promenades, parks, and landscaped zones"
          ],
          summary: "Premium coastal residences on Dubai Islands featuring three towers with beach access, open promenades, and landscaped waterfront living.",
          icon: "waterfront"
        }
      ]
    },
    {
      name: "Imtiaz Developments",
      projects: [
        {
          name: "The Symphony by Imtiaz",
          location: "Jumeirah Village Triangle (JVT) – Easy access to Sheikh Mohammed Bin Zayed Road",
          typology: [
            "Studio, 1 & 2 Bedroom Apartments",
            "Boutique mid-rise residential building",
            "Balconies + smart layouts"
          ],
          summary: "A boutique mid-rise development in JVT offering smart apartment layouts close to Dubai Marina and Internet City.",
          icon: "apartment"
        },
        {
          name: "Le Blanc by Imtiaz",
          location: "Jumeirah Village Circle (JVC) – One of Dubai's highest rental-demand communities",
          typology: [
            "Studios, 1 & 2 Bedroom Apartments",
            "European-inspired white & gold interiors",
            "Premium finishes, large windows"
          ],
          summary: "European-inspired residences with elegant white and gold interiors, featuring premium finishes in high-demand JVC.",
          icon: "apartment"
        }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "villa":
        return <Home className="w-4 h-4" />;
      case "waterfront":
        return <Waves className="w-4 h-4" />;
      default:
        return <Building2 className="w-4 h-4" />;
    }
  };

  const scrollToForm = () => {
    window.location.href = "/#contact";
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="container-luxury">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
              Exclusive Opportunities
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Curated Property Investments in Dubai
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              As your trusted property investment advisor, I bring you hand-selected developments 
              from Dubai's most prestigious developers. Each project has been carefully vetted 
              for investment potential, build quality, and long-term value appreciation.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Sections */}
      <section className="pb-32 sm:pb-36 lg:pb-40">
        <div className="container-luxury">
          <div className="space-y-12 sm:space-y-16">
            {developers.map((developer, devIndex) => (
              <div key={devIndex} className="border-t border-border/50 pt-10 sm:pt-12 first:border-t-0 first:pt-0">
                {/* Developer Header */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    {developer.name}
                  </h2>
                  <div className="w-16 h-0.5 bg-primary mt-3" />
                </div>

                {/* Projects */}
                <div className="space-y-4 sm:space-y-6">
                  {developer.projects.map((project, projIndex) => (
                    <div 
                      key={projIndex}
                      className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
                    >
                      <Accordion type="single" collapsible>
                        <AccordionItem value={`item-${devIndex}-${projIndex}`} className="border-none">
                          <AccordionTrigger className="px-5 py-4 sm:px-6 sm:py-5 hover:no-underline">
                            <div className="flex items-start gap-3 sm:gap-4 text-left w-full pr-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                {getIcon(project.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1">
                                  {project.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                                  <span className="line-clamp-1">{project.location}</span>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                            <div className="pl-0 sm:pl-16 space-y-4">
                              {/* Summary */}
                              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                {project.summary}
                              </p>

                              {/* Typology */}
                              <div>
                                <h4 className="text-sm font-semibold text-foreground mb-2">Available Units</h4>
                                <ul className="space-y-1.5">
                                  {project.typology.map((type, typeIndex) => (
                                    <li key={typeIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                      {type}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTAs */}
                              <div className="flex flex-wrap gap-3 pt-2">
                                <Button 
                                  asChild
                                  variant="default"
                                  size="sm"
                                  className="gap-2"
                                >
                                  <a 
                                    href={`https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20${encodeURIComponent(project.name)}%20by%20${encodeURIComponent(developer.name)}.%20Please%20share%20price%20and%20availability.`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                  >
                                    <MessageCircle className="w-4 h-4" />
                                    Get Price & Availability
                                  </a>
                                </Button>
                                <Button 
                                  variant="outline"
                                  size="sm"
                                  className="gap-2"
                                  onClick={scrollToForm}
                                >
                                  <FileText className="w-4 h-4" />
                                  Talk to Property Advisor
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-40">
        <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg max-w-md mx-auto sm:mx-0 sm:ml-auto">
          <p className="text-sm sm:text-base text-foreground font-medium mb-3">
            Looking for the right Dubai investment?
          </p>
          <Button 
            asChild
            variant="default"
            className="w-full gap-2"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Talk to an Expert
            </a>
          </Button>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Properties;
