import { MapPin, Building2, Home, Waves, MessageCircle, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

// Project Images
import palmJebelAliVillas from "@/assets/projects/palm-jebel-ali-villas.jpg";
import palmCentral from "@/assets/projects/palm-central.jpg";
import emaarOasisVillas from "@/assets/projects/emaar-oasis-villas.jpg";
import emaarPolo from "@/assets/projects/emaar-polo.jpg";
import heightsWellness from "@/assets/projects/heights-wellness.jpg";
import binghattiTerraces from "@/assets/projects/binghatti-terraces-motorcity.jpg";
import binghattiVintage from "@/assets/projects/binghatti-vintage.jpg";
import binghattiCullinan from "@/assets/projects/binghatti-cullinan.jpg";
import sobhaElwood from "@/assets/projects/sobha-elwood.jpg";
import beyondHado from "@/assets/projects/beyond-hado.jpg";
import imtiazSymphony from "@/assets/projects/imtiaz-symphony.jpg";
import imtiazLeblanc from "@/assets/projects/imtiaz-leblanc.jpg";
import dubaiIslandsAerial from "@/assets/dubai-islands-aerial.jpg";

interface Project {
  name: string;
  location: string;
  typology: string[];
  summary: string;
  icon: string;
  image: string;
}

interface Developer {
  name: string;
  projects: Project[];
}

const ProjectCard = ({ project, developer }: { project: Project; developer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
        <CollapsibleTrigger className="w-full text-left">
          <div className="flex flex-col md:flex-row">
            {/* Project Image */}
            <div className="w-full md:w-52 lg:w-64 flex-shrink-0 bg-secondary/50">
              <div className="aspect-[4/3] md:aspect-[4/3] overflow-hidden flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Project Info */}
            <div className="flex-1 p-4 md:p-5 lg:p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {getIcon(project.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1">
                    {project.name}
                  </h3>
                  <div className="flex items-start gap-1.5 text-muted-foreground text-xs md:text-sm">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.location}</span>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                {project.summary}
              </p>
              
              <div className="mt-3 text-xs text-primary font-medium">
                {isOpen ? 'Click to collapse' : 'Click to view details'} →
              </div>
            </div>
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="px-4 pb-5 md:px-6 md:pb-6 border-t border-border/30">
            <div className="pt-4 space-y-4">
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
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  asChild
                  variant="default"
                  size="sm"
                  className="gap-2"
                >
                  <a 
                    href={`https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20${encodeURIComponent(project.name)}%20by%20${encodeURIComponent(developer)}.%20Please%20share%20price%20and%20availability.`}
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
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

const Properties = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20learning%20more%20about%20Dubai%20property%20investments.";

  const developers: Developer[] = [
    {
      name: "Dubai Islands (Nakheel Masterplan)",
      projects: [
        {
          name: "Dubai Islands Overview",
          location: "Dubai Islands, Dubai, UAE – 15-20 min from Downtown, 10-15 min from DXB Airport",
          typology: [
            "Waterfront, beaches, promenades, islands",
            "Direct road & bridge access",
            "Master Developer: Nakheel"
          ],
          summary: "Dubai Islands is a new coastal destination offering waterfront living with city connectivity. A prime investment location with excellent infrastructure.",
          icon: "waterfront",
          image: dubaiIslandsAerial
        }
      ]
    },
    {
      name: "Palm Jebel Ali (Nakheel)",
      projects: [
        {
          name: "Palm Jebel Ali Villas",
          location: "Offshore Dubai, Jebel Ali – between Port Jebel Ali & Jebel Ali Marine Sanctuary, via Sheikh Zayed Road (E11)",
          typology: [
            "5-6 Bedroom Beach Villas",
            "7-Bedroom Coral Villas (premium)",
            "Large Plots Available for custom design"
          ],
          summary: "Exclusive beachfront villas on Dubai's iconic Palm Jebel Ali, offering unparalleled waterfront lifestyle with private beach access.",
          icon: "villa",
          image: palmJebelAliVillas
        },
        {
          name: "Palm Central Private Residences",
          location: "Palm Jebel Ali (Palm Spine), positioned between Fronds M & N",
          typology: [
            "1–5 Bedroom Apartments",
            "Townhouses",
            "Penthouses",
            "Beach House Style Units (4-bed + direct beach access)"
          ],
          summary: "Contemporary resort-style residences across three mid-rise buildings with direct beach access and premium amenities.",
          icon: "apartment",
          image: palmCentral
        }
      ]
    },
    {
      name: "Emaar",
      projects: [
        {
          name: "The Oasis by Emaar",
          location: "DubaiLand master community, near Dubai Investment Park & Jumeirah Golf Estates connectivity zone",
          typology: [
            "4, 5 & 6-bedroom ultra-luxury standalone villas",
            "Large plots with private pools & lagoons"
          ],
          summary: "Ultra-luxury standalone villas positioned along future growth corridors, offering expansive plots with private pools and lagoon views.",
          icon: "villa",
          image: emaarOasisVillas
        },
        {
          name: "Grand Polo Club & Resort",
          location: "Near Expo Road (E77) & Emirates Road (E611) junction, Dubai South / Al Yalayis-side",
          typology: [
            "Luxury villas & townhouses",
            "Polo-themed lifestyle community",
            "Green open spaces + equestrian facilities"
          ],
          summary: "A prestigious polo-themed lifestyle community featuring luxury villas and townhouses with equestrian facilities and expansive green spaces.",
          icon: "villa",
          image: emaarPolo
        },
        {
          name: "The Heights Country Club & Wellness",
          location: "Emirates Road (E611) in Dubailand, Al Yalayis 5, bordered by E611 & Jebel Ali–Lehbab Road (E77)",
          typology: [
            "3–5 bedroom villas & townhouses",
            "Wellness-centric layouts",
            "Family-oriented community"
          ],
          summary: "A wellness-focused family community offering villas and townhouses with health-centric designs and country club amenities.",
          icon: "villa",
          image: heightsWellness
        }
      ]
    },
    {
      name: "Binghatti",
      projects: [
        {
          name: "Binghatti Terraces",
          location: "Motor City, Dubai – prime motorsport lifestyle community",
          typology: [
            "Studio, 1 & 2 Bedroom Apartments",
            "Mid-rise residential tower",
            "Contemporary Binghatti design language"
          ],
          summary: "A mid-rise residential tower featuring Binghatti's signature contemporary design in the vibrant Motor City community.",
          icon: "apartment",
          image: binghattiTerraces
        },
        {
          name: "Binghatti Vintage",
          location: "Majan, Dubailand – emerging residential community",
          typology: [
            "Studios, 1 & 2 Bedroom Apartments",
            "Classic + modern architectural blend",
            "Smart layouts with balconies"
          ],
          summary: "Classic meets modern in this Majan development, located in one of Dubailand's emerging residential communities.",
          icon: "apartment",
          image: binghattiVintage
        },
        {
          name: "Binghatti Cullinan",
          location: "Al Jaddaf, Dubai – Dubai Creek-side area with cultural district access",
          typology: [
            "Luxury 1, 2 & 3 Bedroom Apartments",
            "Signature architectural landmark",
            "High-end finishes & amenities"
          ],
          summary: "A signature architectural landmark in Al Jaddaf offering luxury apartments with premium finishes and Dubai Creek views.",
          icon: "apartment",
          image: binghattiCullinan
        }
      ]
    },
    {
      name: "Sobha",
      projects: [
        {
          name: "Sobha Elwood",
          location: "Dubailand, near Dubai–Al Ain Road corridor, IMG Worlds of Adventure & Sheikh Mohammed Bin Zayed Road (E311)",
          typology: [
            "Luxury villa community",
            "Strategic access to Downtown Dubai, Dubai Silicon Oasis",
            "Close to Dubai Academic City & Dubai International Airport"
          ],
          summary: "A luxury villa community in Dubailand with strategic connectivity to key Dubai destinations and a focus on premium living.",
          icon: "villa",
          image: sobhaElwood
        }
      ]
    },
    {
      name: "Beyond (SIORA)",
      projects: [
        {
          name: "Hado by Beyond",
          location: "SIORA district (Island B), Dubai Islands – direct waterfront access",
          typology: [
            "Premium apartments across three residential towers",
            "Coastal design language",
            "Direct beach and waterfront access",
            "Open promenades, parks, and landscaped zones"
          ],
          summary: "Premium coastal residences on Dubai Islands featuring three towers with beach access, open promenades, and landscaped waterfront living.",
          icon: "waterfront",
          image: beyondHado
        }
      ]
    },
    {
      name: "Imtiaz Developments",
      projects: [
        {
          name: "The Symphony by Imtiaz",
          location: "Meydan Horizon, MBR City (Meydan), Dubai",
          typology: [
            "Studio, 1 & 2 Bedroom Apartments",
            "Boutique mid-rise residential building",
            "Balconies + smart layouts"
          ],
          summary: "A boutique mid-rise development in Meydan Horizon offering smart apartment layouts in the prestigious MBR City.",
          icon: "apartment",
          image: imtiazSymphony
        },
        {
          name: "Le Blanc by Imtiaz",
          location: "DubaiLand Residence Complex (DLRC), Wadi Al Safa 5, Dubailand",
          typology: [
            "Studios, 1 & 2 Bedroom Apartments",
            "European-inspired white & gold interiors",
            "Premium finishes, large windows"
          ],
          summary: "European-inspired residences with elegant white and gold interiors, featuring premium finishes in DLRC Dubailand.",
          icon: "apartment",
          image: imtiazLeblanc
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16">
        <div className="container-luxury">
          <div className="text-center max-w-4xl mx-auto px-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4 font-medium">
              Exclusive Opportunities
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Curated Property Investments in Dubai
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
              As your trusted property investment advisor, I bring you hand-selected developments 
              from Dubai's most prestigious developers.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Sections */}
      <section className="pb-32 sm:pb-36 lg:pb-40">
        <div className="container-luxury px-4 sm:px-6">
          <div className="space-y-10 sm:space-y-14">
            {developers.map((developer, devIndex) => (
              <div key={devIndex} className="border-t border-border/50 pt-8 sm:pt-10 first:border-t-0 first:pt-0">
                {/* Developer Header */}
                <div className="mb-5 sm:mb-6">
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                    {developer.name}
                  </h2>
                  <div className="w-12 h-0.5 bg-primary mt-2" />
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  {developer.projects.map((project, projIndex) => (
                    <ProjectCard 
                      key={projIndex} 
                      project={project} 
                      developer={developer.name} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-40">
        <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg max-w-sm mx-auto sm:mx-0 sm:ml-auto">
          <p className="text-sm text-foreground font-medium mb-3">
            Looking for the right Dubai investment?
          </p>
          <Button 
            asChild
            variant="default"
            className="w-full gap-2"
            size="sm"
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
