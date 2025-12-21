import { Quote, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Zubair made my first Dubai investment seamless. His knowledge of the market and transparent approach gave me complete confidence.",
      author: "Rajesh K.",
      location: "Mumbai, India",
    },
    {
      quote: "Exceptional service! Got early access to an off-plan project that's already appreciated 15%. Highly recommend Zubair for Dubai investments.",
      author: "Sarah M.",
      location: "London, UK",
    },
    {
      quote: "Professional, knowledgeable, and always available. Zubair helped me secure my Golden Visa through a smart property investment.",
      author: "Ahmed H.",
      location: "Riyadh, Saudi Arabia",
    },
  ];

  const developers = [
    "EMAAR",
    "NAKHEEL",
    "MERAAS",
    "DAMAC",
    "SOBHA",
  ];

  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Global Investors
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-lift"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Logos */}
        <div className="border-t border-b border-border/50 py-12">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
            Partnering with Dubai's Premier Developers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {developers.map((developer, index) => (
              <span 
                key={index}
                className="text-xl md:text-2xl font-serif font-bold text-muted-foreground/50 hover:text-primary transition-colors"
              >
                {developer}
              </span>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Follow for daily updates & exclusive deals</p>
          <Button 
            asChild
            variant="goldOutline"
            size="lg"
          >
            <a 
              href="https://www.instagram.com/zubair_realtor_dxb/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              @zubair_realtor_dxb
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
