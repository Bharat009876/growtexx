import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const stored = window.localStorage.getItem("theme");
    if (stored) {
      return stored === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-hero/95 backdrop-blur-xl border-b border-hero-foreground/10 shadow-lg shadow-black/20"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="inline-flex items-center">
          <img src={logo} alt="Growtex Project" className="h-12 md:h-14 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="rounded-lg" asChild>
            <a href="#contact">Register free</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-lg border-hero-foreground/20 bg-hero-foreground/5 text-hero-foreground hover:bg-hero-foreground/10"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
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
          <Button
            type="button"
            variant="outline"
            className="w-full rounded-lg border-hero-foreground/20 bg-hero-foreground/5 text-hero-foreground hover:bg-hero-foreground/10"
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
