import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bluorbit-cookie-consent-v2");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("bluorbit-cookie-consent-v2", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("bluorbit-cookie-consent-v2", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-[420px] z-[100]"
        >
          <div className="glass-card p-6 border-blue-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden group">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />
            
            <div className="flex items-start gap-4 h-full relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                <Cookie size={24} className="animate-pulse" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-play font-bold text-white text-base">Cookie Consent</h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <p className="font-play text-white/50 text-sm leading-relaxed mb-5">
                  We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <div className="flex items-center gap-3">
                  <Button 
                    onClick={handleAccept}
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  >
                    Accept All
                  </Button>
                  <Button 
                    onClick={handleDecline}
                    variant="ghost" 
                    size="sm"
                    className="text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
