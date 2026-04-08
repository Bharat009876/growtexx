import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#whyus" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#" className="inline-flex items-center">
          <img src={logo} alt="Growtex Project" className="h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.45)]" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-hero-foreground/75 hover:text-hero-foreground transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="rounded-lg text-base" asChild>
            <a href="#contact">Register free</a>
          </Button>
        </div>
        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-hero/95 backdrop-blur-xl border-t border-hero-foreground/10 px-4 pb-4 space-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-hero-foreground/70 hover:text-hero-foreground border-b border-hero-foreground/5">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2 rounded-lg" asChild>
            <a href="#contact">Register free</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
