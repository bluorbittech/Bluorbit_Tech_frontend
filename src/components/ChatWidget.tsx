import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const ChatWidget = () => {
  useEffect(() => {
    (function(d, t) {
      const BASE_URL = "https://app.chatwoot.com";
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      g.onload = function() {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: 'uyVzMn2fiAM8tr8tdg813aMC',
            baseUrl: BASE_URL
          });
        }
      };
    })(document, "script");
  }, []);

  return null; // This component only handles the script injection
};

export default ChatWidget;
