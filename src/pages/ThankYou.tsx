import { useLocation } from "react-router-dom";
import { CheckCircle, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "971529504782";
const PHONE_NUMBER = "+971529504782";

const ThankYou = () => {
  const location = useLocation();
  const name = location.state?.name || "";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Confirmation Message */}
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Thank You{name ? `, ${name.split(" ")[0]}` : ""}!
          </h1>
          <p className="text-muted-foreground text-base mb-2">
            Your inquiry has been received successfully.
          </p>
          <p className="text-muted-foreground/80 text-sm mb-8">
            Our team will contact you within <span className="text-primary font-medium">24 hours</span> with exclusive property deals.
          </p>

          {/* Next Step CTAs */}
          <div className="space-y-3 mb-8">
            <p className="text-foreground font-medium text-sm mb-4">
              Want faster response? Connect with us now:
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-card border border-border/50 text-foreground font-medium hover:bg-card/80 transition-colors"
              data-tracking="thankyou-call"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20just%20submitted%20my%20inquiry%20for%20Dubai%20property%20investment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#22c55e] transition-colors"
              data-tracking="thankyou-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Back to Home */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 px-4 text-center border-t border-border/30">
        <p className="text-muted-foreground/60 text-xs">
          Zubair Malik • Dubai Real Estate Investment Advisor
        </p>
      </footer>
    </div>
  );
};

export default ThankYou;
