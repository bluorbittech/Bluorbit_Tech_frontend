import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Use Cases", "Pricing"],
  Company: ["About", "Blog", "Contact", "FAQ"],
  Resources: ["Docs (Coming Soon)"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const Footer = () => (
  <footer className="section-dark border-t border-white/10 pt-2 px-4 md:px-8 pb-8">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-5 gap-10 mb-12">
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-4">
            <img src="/images/logo.svg" alt="BluOrbit Go Logo" className="h-24 w-auto object-contain" />
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A connected mobility solution designed to unify vehicles, drivers, and real-time data empowering safer journeys and smarter transportation.
          </p>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="pt-12 md:pt-24 md:pl-8">
            <h4 className="font-play font-bold text-white text-sm mb-4">{group}</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => {
                const sectionMap: Record<string, string> = {
                  "Features": "#features",
                  "Use Cases": "#use-cases",
                  "Pricing": "#pricing",
                  "Blog": "#blog",
                  "Contact": "#contact",
                  "FAQ": "#faq",
                };

                const href = sectionMap[link] || "#";

                if (link === "Privacy Policy") {
                  return (
                    <li key={link}>
                      <Link
                        to="/privacy-policy"
                        className="font-play text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                }
                if (link === "Terms of Service") {
                  return (
                    <li key={link}>
                      <Link
                        to="/terms-and-conditions"
                        className="font-play text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={link}>
                    <a href={href} className="font-play text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <div>
          <p>© 2023-2026 BluOrbit Tech Inc. All rights reserved.</p>
          <p className="text-xs mt-2">845 S Windsor Blvd, Los Angeles, CA 90005 United States</p>
          <p className="text-xs">Phone: <a href="tel:+18633587493" className="hover:text-foreground transition-colors">+1 (863) 358-7493</a></p>
        </div>
        <div className="flex gap-4">
          {[
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Youtube, href: "#", label: "YouTube" },
          ].map((s) => (
            <a key={s.label} href={s.href} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300">
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
