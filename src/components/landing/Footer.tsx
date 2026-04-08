import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-hero text-hero-foreground border-t border-hero-foreground/5">
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#" className="mb-4 inline-flex items-center">
            <img src={logo} alt="Growtex Project" className="h-14 md:h-16 w-auto object-contain" />
          </a>
          <p className="text-hero-foreground/50 text-sm leading-relaxed">
            Helping Indian exporters scale globally through expert trade support, buyer discovery, and tender assistance.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-hero-foreground/50 hover:text-hero-foreground/80 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Connect</h4>
          <div className="flex gap-3 mb-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Mail, href: "mailto:info@growtex.in" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full border border-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/10 transition-colors"
              >
                <social.icon size={18} className="text-hero-foreground/60" />
              </a>
            ))}
          </div>
          <p className="text-hero-foreground/50 text-sm">info@growtex.in</p>
        </div>
      </div>
      <div className="border-t border-hero-foreground/10 pt-8 text-center">
        <p className="text-xs text-hero-foreground/30">© {new Date().getFullYear()} GrowTeX. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
