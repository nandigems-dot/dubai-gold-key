import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-luxury py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">
              Zubair Malik
            </h3>
            <p className="text-primary font-medium text-sm sm:text-base mb-3 sm:mb-4">
              Dubai Real Estate | Luxury & Investment
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
              Your trusted partner for premium Dubai real estate investments. 
              Helping global investors build wealth through strategic property acquisitions.
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="tel:+971529504782"
                  className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 52 950 4782</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:zubimalik836@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4" />
                  <span className="break-all">zubimalik836@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>208, M2-Building 2020 Sheikh Zayed Rd - Al Quoz 3</span>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Follow</h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start flex-wrap">
              <a 
                href="https://www.instagram.com/zubair_realtor_dxb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/17vy7Ke1W7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mzubairrealtor?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@ZubairRealtorDxB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@zubair.realtor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border/50 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © {currentYear} Zubair Malik. All rights reserved. Dubai Real Estate Investment Advisor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
