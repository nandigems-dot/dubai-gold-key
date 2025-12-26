// Inline SVG to avoid loading lucide-react
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/971529504782?text=Hi%20Zubair,%20I'm%20interested%20in%20Dubai%20real%20estate%20investment.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="font-medium hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
