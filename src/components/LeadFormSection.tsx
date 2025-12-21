import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LeadFormSection = () => {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);

    // Redirect to thank-you page with lead info preserved
    navigate("/thank-you", {
      state: {
        name: formData.fullName,
        leadData,
      },
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-card/30">
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
          Get <span className="gold-gradient-text">Exclusive</span> Property Deals
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 px-2">
          Fill the form below for a free consultation with our investment experts
        </p>

        <div className="glass-card rounded-xl p-5 sm:p-6 md:p-8 border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
            {/* Hidden tracking fields */}
            <input type="hidden" name="source" value={hiddenFields.source} />
            <input type="hidden" name="medium" value={hiddenFields.medium} />
            <input type="hidden" name="campaign" value={hiddenFields.campaign} />
            <input type="hidden" name="pageUrl" value={hiddenFields.pageUrl} />

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="fullName-home" className="text-foreground text-sm sm:text-base">
                Full Name
              </Label>
              <Input
                id="fullName-home"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="h-11 sm:h-12 text-base bg-background/50 border-border/50 focus:border-primary"
                autoComplete="name"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="mobile-home" className="text-foreground text-sm sm:text-base">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="mobile-home"
                name="mobile"
                type="tel"
                placeholder="+971 50 123 4567"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="h-11 sm:h-12 text-base bg-background/50 border-border/50 focus:border-primary"
                autoComplete="tel"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email-home" className="text-muted-foreground text-sm sm:text-base">
                Email <span className="text-muted-foreground/60">(optional)</span>
              </Label>
              <Input
                id="email-home"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="h-11 sm:h-12 text-base bg-background/50 border-border/50 focus:border-primary"
                autoComplete="email"
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="xl"
              className="w-full h-12 sm:h-14 text-base sm:text-lg mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Free Consultation"}
            </Button>
          </form>

          <p className="text-muted-foreground/60 text-xs text-center mt-3 sm:mt-4">
            Your information is secure and will never be shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
