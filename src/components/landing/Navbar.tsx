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
    <nav className="fixed z-50 transition-all top-0 left-0 right-0 w-full rounded-none bg-black/60 border-b border-white/5 backdrop-blur-xl md:top-6 md:left-1/2 md:-translate-x-1/2 md:max-w-[95vw] md:w-max md:bg-white/[0.08] md:border md:border-white/10 md:rounded-full md:shadow-2xl">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8 gap-4 md:gap-12 w-full">
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
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-4 space-y-2">
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
