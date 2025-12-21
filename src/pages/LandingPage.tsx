import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle, Building2, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "971501234567"; // Replace with actual number
const PHONE_NUMBER = "+971501234567"; // Replace with actual number

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });
  
  const [hiddenFields, setHiddenFields] = useState({
    source: "",
    medium: "",
    campaign: "",
    pageUrl: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Capture UTM parameters and page URL on mount
  useEffect(() => {
    setHiddenFields({
      source: searchParams.get("utm_source") || "direct",
      medium: searchParams.get("utm_medium") || "none",
      campaign: searchParams.get("utm_campaign") || "",
      pageUrl: window.location.href,
    });
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.mobile.trim()) {
      toast({
        title: "Mobile number required",
        description: "Please enter your mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare lead data (for future backend integration)
    const leadData = {
      ...formData,
      ...hiddenFields,
      submittedAt: new Date().toISOString(),
    };

    // Log lead data for testing (remove in production)
    console.log("Lead submitted:", leadData);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 500));

    setIsSubmitting(false);

    // Redirect to thank-you page with lead info preserved
    navigate("/thank-you", { 
      state: { 
        name: formData.fullName,
        leadData 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Compact for Mobile */}
      <header className="relative py-8 px-4 text-center bg-gradient-to-b from-card to-background">
        <div className="max-w-lg mx-auto">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Invest in Dubai's Most Profitable Properties
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mb-2">
            Luxury Villas • Off-Plan Projects • High ROI • Golden Visa
          </p>
          <p className="text-primary font-medium text-xs">
            Trusted by 500+ International Investors
          </p>
        </div>
      </header>

      {/* Lead Form Section */}
      <main className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="glass-card rounded-xl p-6 border border-border/50">
            <h2 className="font-display text-xl font-semibold text-foreground mb-1 text-center">
              Get Exclusive Property Deals
            </h2>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Fill the form below for a free consultation
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden tracking fields */}
              <input type="hidden" name="source" value={hiddenFields.source} />
              <input type="hidden" name="medium" value={hiddenFields.medium} />
              <input type="hidden" name="campaign" value={hiddenFields.campaign} />
              <input type="hidden" name="pageUrl" value={hiddenFields.pageUrl} />

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-foreground">
                  Mobile Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground">
                  Email <span className="text-muted-foreground/60">(optional)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  autoComplete="email"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Free Consultation"}
              </Button>
            </form>

            <p className="text-muted-foreground/60 text-xs text-center mt-4">
              Your information is secure and will never be shared.
            </p>
          </div>

          {/* Mobile CTAs */}
          <div className="mt-6 space-y-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-card border border-border/50 text-foreground font-medium hover:bg-card/80 transition-colors"
              data-tracking="click-to-call"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call Now
            </a>
            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Dubai%20property%20investment`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#22c55e] transition-colors"
              data-tracking="whatsapp-click"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <section className="max-w-md mx-auto mt-10 px-2">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3">
              <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Premium Properties</p>
            </div>
            <div className="p-3">
              <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">High ROI</p>
            </div>
            <div className="p-3">
              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Trusted Advisor</p>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 px-4 text-center border-t border-border/30">
        <p className="text-muted-foreground/60 text-xs">
          Zubair Malik • Dubai Real Estate Investment Consultant
        </p>
        <p className="text-muted-foreground/40 text-xs mt-1">
          Business Village Tower B, Dubai
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
