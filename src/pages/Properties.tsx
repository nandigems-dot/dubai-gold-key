import { MapPin, Building2, Home, Waves, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
import sobhaCentral from "@/assets/projects/sobha-central.jpg";
import sobhaSiniyaIsland from "@/assets/projects/sobha-siniya-island.png";
import beyondHado from "@/assets/projects/beyond-hado.jpg";
import imtiazSymphony from "@/assets/projects/imtiaz-symphony.jpg";
import imtiazLeblanc from "@/assets/projects/imtiaz-leblanc.jpg";
import dubaiIslandsAerial from "@/assets/dubai-islands-aerial.jpg";

interface ProjectDetails {
  location: string;
  overview: string[];
  description: string[];
  startingPrice: string;
  propertyTypes: string[];
  highlights: string[];
}

interface Project {
  name: string;
  location: string;
  summary: string;
  icon: string;
  image: string;
  details: ProjectDetails;
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
                    <span>{project.location}</span>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <p className="text-muted-foreground text-sm mt-3">
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
            <div className="pt-4 space-y-5">
              {/* Location */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📍</span> Location
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.location}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📌</span> Overview
                </h4>
                <ul className="space-y-1.5">
                  {project.details.overview.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>🏘️</span> Project Description
                </h4>
                <ul className="space-y-1.5">
                  {project.details.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Starting Prices */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📊</span> Starting Prices
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.startingPrice}
                </p>
              </div>

              {/* Property Types */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>🏡</span> Property Types
                </h4>
                <ul className="space-y-1.5">
                  {project.details.propertyTypes.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📌</span> Key Highlights
                </h4>
                <ul className="space-y-1.5">
                  {project.details.highlights.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Single CTA */}
              <div className="pt-2">
                <Button 
                  asChild
                  variant="default"
                  size="sm"
                  className="gap-2 w-full sm:w-auto"
                >
                  <a 
                    href={`https://wa.me/971529504782?text=Hi%20Zubair,%20I%20am%20interested%20in%20${encodeURIComponent(project.name)}%20by%20${encodeURIComponent(developer)}.%20Could%20you%20please%20share%20the%20price%20and%20availability%20details?%20Thank%20you.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get Price & Availability
                  </a>
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
  const developers: Developer[] = [
    {
      name: "Nakheel",
      projects: [
        {
          name: "Palm Jebel Ali Villas",
          location: "Palm Jebel Ali, Dubai, UAE",
          summary: "Ultra-luxury villa collection located on the fronds of Palm Jebel Ali. Developed by Nakheel, master developer of Palm Jumeirah.",
          icon: "villa",
          image: palmJebelAliVillas,
          details: {
            location: "Palm Jebel Ali, Dubai, UAE — iconic man-made island with direct beachfront living.",
            overview: [
              "Ultra-luxury villa collection located on the fronds of Palm Jebel Ali.",
              "Developed by Nakheel, master developer of Palm Jumeirah."
            ],
            description: [
              "Luxury beachfront villas offering privacy, expansive layouts, and premium coastal living.",
              "Designed as one of Dubai's most exclusive villa destinations."
            ],
            startingPrice: "From ~AED 18M (subject to availability)",
            propertyTypes: [
              "5 Bedroom Beach Villas",
              "6 Bedroom Beach Villas",
              "7 Bedroom Coral Villas"
            ],
            highlights: [
              "Private beach access",
              "Large villa plots",
              "Low-density ultra-luxury living",
              "Strong long-term capital appreciation potential"
            ]
          }
        },
        {
          name: "Palm Central Apartments",
          location: "Palm Jebel Ali – Central Spine, Dubai, UAE",
          summary: "Premium beachfront residential community located at the heart of Palm Jebel Ali. Developed by Nakheel.",
          icon: "apartment",
          image: palmCentral,
          details: {
            location: "Palm Jebel Ali – Central Spine, Dubai, UAE",
            overview: [
              "Premium beachfront residential community located at the heart of Palm Jebel Ali.",
              "Developed by Nakheel."
            ],
            description: [
              "Contemporary resort-style residences with direct beach access and panoramic sea views.",
              "Designed for both luxury end-users and investors."
            ],
            startingPrice: "From ~AED 3.2M",
            propertyTypes: [
              "1–5 Bedroom Apartments",
              "Townhouses",
              "Penthouses",
              "Beach House-style units"
            ],
            highlights: [
              "Central palm location",
              "Direct beach access",
              "High rental & resale demand",
              "Iconic island lifestyle"
            ]
          }
        },
        {
          name: "Dubai Islands",
          location: "Dubai Islands, Dubai, UAE",
          summary: "A new coastal master-planned destination by Nakheel offering waterfront living with city connectivity.",
          icon: "waterfront",
          image: dubaiIslandsAerial,
          details: {
            location: "Dubai Islands, Dubai, UAE — 15–20 min from Downtown Dubai, 10–15 min from DXB Airport",
            overview: [
              "A new coastal master-planned destination by Nakheel offering waterfront living with city connectivity."
            ],
            description: [
              "Large-scale island development featuring beaches, promenades, resorts, and residential communities.",
              "Designed as a next-generation waterfront lifestyle hub."
            ],
            startingPrice: "From ~AED 1.2M",
            propertyTypes: [
              "Waterfront Apartments",
              "Luxury Villas",
              "Mixed-use coastal residences"
            ],
            highlights: [
              "Beachfront & promenade living",
              "Direct road & bridge access",
              "High future growth corridor",
              "Palm alternative with lower entry pricing"
            ]
          }
        }
      ]
    },
    {
      name: "Emaar",
      projects: [
        {
          name: "The Oasis by Emaar",
          location: "Dubai–Al Ain Road, Dubai, UAE",
          summary: "Ultra-luxury villa community by Emaar focused on lagoon living and exclusivity.",
          icon: "villa",
          image: emaarOasisVillas,
          details: {
            location: "Dubai–Al Ain Road, Dubai, UAE",
            overview: [
              "Ultra-luxury villa community by Emaar focused on lagoon living and exclusivity."
            ],
            description: [
              "Standalone villas with private pools, large plots, and lush landscaped surroundings.",
              "Designed for ultra-high-net-worth end-users."
            ],
            startingPrice: "From ~AED 9.5M",
            propertyTypes: [
              "4 Bedroom Villas",
              "5 Bedroom Villas",
              "6 Bedroom Villas"
            ],
            highlights: [
              "Private pools & lagoons",
              "Premium Emaar master community",
              "Low-density luxury living",
              "Strong long-term appreciation"
            ]
          }
        },
        {
          name: "Grand Polo Club & Resort",
          location: "Near Dubai Investment Park, Dubai, UAE",
          summary: "A polo-themed lifestyle community by Emaar blending luxury living with open green spaces.",
          icon: "villa",
          image: emaarPolo,
          details: {
            location: "Near Dubai Investment Park, Dubai, UAE",
            overview: [
              "A polo-themed lifestyle community by Emaar blending luxury living with open green spaces."
            ],
            description: [
              "Villas and townhouses designed around equestrian facilities and resort-style amenities."
            ],
            startingPrice: "From ~AED 5.5M",
            propertyTypes: [
              "Luxury Villas",
              "Townhouses"
            ],
            highlights: [
              "Polo & equestrian lifestyle",
              "Large green open spaces",
              "Family-oriented community",
              "Resort-style living"
            ]
          }
        },
        {
          name: "The Heights Country Club & Wellness",
          location: "Near Expo City Dubai, UAE",
          summary: "Wellness-centric residential community focused on family living and open spaces.",
          icon: "villa",
          image: heightsWellness,
          details: {
            location: "Near Expo City Dubai, UAE",
            overview: [
              "Wellness-centric residential community focused on family living and open spaces."
            ],
            description: [
              "Thoughtfully designed villas and townhouses promoting healthy, balanced lifestyles."
            ],
            startingPrice: "From ~AED 3.6M",
            propertyTypes: [
              "3 Bedroom Villas",
              "4 Bedroom Villas",
              "5 Bedroom Villas",
              "Townhouses"
            ],
            highlights: [
              "Wellness-focused design",
              "Family-friendly layouts",
              "Strategic Expo City location",
              "Long-term end-user appeal"
            ]
          }
        }
      ]
    },
    {
      name: "Binghatti",
      projects: [
        {
          name: "Sky Terraces",
          location: "Motor City, Dubai, UAE",
          summary: "Premium residential tower offering urban living with panoramic skyline views. Developed by Binghatti Developers.",
          icon: "apartment",
          image: binghattiTerraces,
          details: {
            location: "Motor City, Dubai, UAE — centrally located with easy access to major highways, parks & city hotspots.",
            overview: [
              "Premium residential tower offering urban living with panoramic skyline views.",
              "Developed by Binghatti Developers."
            ],
            description: [
              "Ultra-luxury residential tower featuring Studio, 1, 2 & 3 BR apartments.",
              "Spacious terraces and modern lifestyle zones integrated into architectural design."
            ],
            startingPrice: "From ~AED 774K",
            propertyTypes: [
              "Studio Apartments",
              "1 Bedroom Apartments",
              "2 Bedroom Apartments",
              "3 Bedroom Apartments"
            ],
            highlights: [
              "Skyline terrace spaces",
              "Infinity pool & fitness center",
              "Smart home systems",
              "Expected handover ~2027"
            ]
          }
        },
        {
          name: "Binghatti Vintage",
          location: "Jumeirah Village Circle (JVC), Dubai, UAE",
          summary: "Residential development in one of Dubai's highest rental-demand communities.",
          icon: "apartment",
          image: binghattiVintage,
          details: {
            location: "Jumeirah Village Circle (JVC), Dubai, UAE",
            overview: [
              "Residential development in one of Dubai's highest rental-demand communities."
            ],
            description: [
              "Classic-meets-modern architectural design with smart layouts and balconies."
            ],
            startingPrice: "From ~AED 700K",
            propertyTypes: [
              "Studio Apartments",
              "1 Bedroom Apartments",
              "2 Bedroom Apartments"
            ],
            highlights: [
              "High rental yield location",
              "Modern design aesthetics",
              "Strong investor demand"
            ]
          }
        },
        {
          name: "Binghatti Cullinan",
          location: "Business Bay, Dubai, UAE",
          summary: "Luxury residential tower located minutes from Downtown Dubai.",
          icon: "apartment",
          image: binghattiCullinan,
          details: {
            location: "Business Bay, Dubai, UAE",
            overview: [
              "Luxury residential tower located minutes from Downtown Dubai."
            ],
            description: [
              "Signature Binghatti development offering premium finishes and city-centric living."
            ],
            startingPrice: "From ~AED 1.7M",
            propertyTypes: [
              "1 Bedroom Apartments",
              "2 Bedroom Apartments",
              "3 Bedroom Apartments"
            ],
            highlights: [
              "Prime Business Bay location",
              "Luxury urban lifestyle",
              "Strong resale demand"
            ]
          }
        }
      ]
    },
    {
      name: "Sobha",
      projects: [
        {
          name: "Sobha Elwood",
          location: "Dubailand, Dubai, UAE — along Al Ain Road / E311",
          summary: "Low-density luxury villa community by Sobha Realty.",
          icon: "villa",
          image: sobhaElwood,
          details: {
            location: "Dubailand, Dubai, UAE — along Al Ain Road / E311",
            overview: [
              "Low-density luxury villa community by Sobha Realty."
            ],
            description: [
              "Premium villas surrounded by greenery, designed for families and long-term living."
            ],
            startingPrice: "From ~AED 7.9M",
            propertyTypes: [
              "Luxury Villas"
            ],
            highlights: [
              "Sobha quality & craftsmanship",
              "Green, serene surroundings",
              "Family-focused master planning"
            ]
          }
        },
        {
          name: "Sobha Central",
          location: "Sheikh Zayed Road, Dubai, UAE",
          summary: "Luxury residential community by Sobha Realty, offering premium apartments with breathtaking urban and skyline views.",
          icon: "apartment",
          image: sobhaCentral,
          details: {
            location: "Sheikh Zayed Road, Dubai, UAE — a prime address with direct connectivity to the city's commercial hubs, skyline and metro links.",
            overview: [
              "Luxury residential community by Sobha Realty, offering premium apartments with breathtaking urban and skyline views."
            ],
            description: [
              "Sobha Central features multiple iconic residential towers with modern design, quality finishes and premium lifestyle amenities.",
              "Apartments range from 1 & 2 bedroom configurations.",
              "Designed for luxury urban living with scenic skyline & sea views."
            ],
            startingPrice: "1-Bedroom Apartments from approx AED 1.4M – AED 1.52M | 2-Bedroom Apartments from approx AED 2.48M",
            propertyTypes: [
              "1 BR Apartments",
              "2 BR Apartments",
              "Various towers: The Horizon, The Eden, The Serene, The Tranquil & The Mirage"
            ],
            highlights: [
              "Prime Sheikh Zayed Road location with excellent connectivity",
              "High-end finishes, modern design and scenic skyline views",
              "Rooftop leisure and lifestyle amenities",
              "Strong investment potential due to location demand"
            ]
          }
        },
        {
          name: "Sobha Siniya Island",
          location: "Siniya Island, Umm Al Quwain, UAE",
          summary: "Ultra-luxury island community by Sobha Realty, combining untouched natural beauty with resort-style living and world-class amenities.",
          icon: "waterfront",
          image: sobhaSiniyaIsland,
          details: {
            location: "Siniya Island, Umm Al Quwain, UAE — an exclusive island destination offering secluded luxury living amidst nature and crystal-clear waters.",
            overview: [
              "Ultra-luxury island community by Sobha Realty, combining untouched natural beauty with resort-style living and world-class amenities."
            ],
            description: [
              "Sobha Siniya Island is a masterplanned luxury island project featuring beachfront villas and marina residences.",
              "Premium waterfront homes with spacious layouts.",
              "Designed for nature-immersive, high-end lifestyle living and exclusivity."
            ],
            startingPrice: "Luxury villas & residences from approx AED 10.5M+ (~USD 2.6M+)",
            propertyTypes: [
              "Waterfront Villas (4–6 BR and larger configurations)",
              "Marina Residences & Beachfront Residences (1–4 BR options)"
            ],
            highlights: [
              "Secluded island living with nature views and privacy",
              "Private yacht docks, luxury resorts & 18-hole golf course in vicinity",
              "Premium lifestyle amenities with sustainable infrastructure",
              "Easy access to local transport routes while enjoying a retreat-like setting"
            ]
          }
        }
      ]
    },
    {
      name: "Beyond Developments",
      projects: [
        {
          name: "Hado by Beyond",
          location: "SIORA Community, Dubai Islands, UAE",
          summary: "Premium waterfront residential project by Beyond Developments.",
          icon: "waterfront",
          image: beyondHado,
          details: {
            location: "SIORA Community, Dubai Islands, UAE",
            overview: [
              "Premium waterfront residential project by Beyond Developments."
            ],
            description: [
              "Three residential towers designed for coastal airflow, sea views, and luxury beachfront living."
            ],
            startingPrice: "From ~AED 1.9M",
            propertyTypes: [
              "Premium Waterfront Apartments"
            ],
            highlights: [
              "Direct waterfront location",
              "Modern coastal architecture",
              "Strong investment appeal"
            ]
          }
        }
      ]
    },
    {
      name: "Imtiaz Developments",
      projects: [
        {
          name: "The Symphony by Imtiaz",
          location: "Jumeirah Village Triangle (JVT), Dubai, UAE",
          summary: "Boutique mid-rise residential development by Imtiaz Developments.",
          icon: "apartment",
          image: imtiazSymphony,
          details: {
            location: "Jumeirah Village Triangle (JVT), Dubai, UAE",
            overview: [
              "Boutique mid-rise residential development by Imtiaz Developments."
            ],
            description: [
              "Smartly designed apartments with balconies and excellent city connectivity."
            ],
            startingPrice: "From ~AED 700K",
            propertyTypes: [
              "Studio Apartments",
              "1 Bedroom Apartments",
              "2 Bedroom Apartments"
            ],
            highlights: [
              "Strong rental yields",
              "Central location",
              "Investor-friendly pricing"
            ]
          }
        },
        {
          name: "Le Blanc by Imtiaz",
          location: "Jumeirah Village Circle (JVC), Dubai, UAE",
          summary: "Elegant residential project with European-inspired design aesthetics.",
          icon: "apartment",
          image: imtiazLeblanc,
          details: {
            location: "Jumeirah Village Circle (JVC), Dubai, UAE",
            overview: [
              "Elegant residential project with European-inspired design aesthetics."
            ],
            description: [
              "Premium apartments featuring white-and-gold interiors, large windows, and refined finishes."
            ],
            startingPrice: "From ~AED 750K",
            propertyTypes: [
              "Studio Apartments",
              "1 Bedroom Apartments",
              "2 Bedroom Apartments"
            ],
            highlights: [
              "High-demand JVC location",
              "Premium interior finishes",
              "Ideal for investors & end-users"
            ]
          }
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

      <Footer />
    </main>
  );
};

export default Properties;
