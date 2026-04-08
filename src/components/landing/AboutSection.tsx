import { MapPin, FileText, Compass, Handshake } from "lucide-react";

const painPoints = [
  { icon: MapPin, title: "Don't know which market to enter", desc: "No clear view of which countries need your product or service right now." },
  { icon: FileText, title: "Missing live tender opportunities", desc: "International tenders get issued daily — most Indian businesses never see them." },
  { icon: Compass, title: "No clarity on the export process", desc: "Documentation, compliance, pricing for foreign buyers — all unclear and confusing." },
  { icon: Handshake, title: "No expert to guide you", desc: "Without a seasoned advisor, you risk time, money, and missed contracts worth crores." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-hero">
    <div className="container mx-auto max-w-6xl">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-destructive/15 text-destructive border border-destructive/25 mb-5">
        The problem
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4 leading-tight">
        Most Indian businesses are<br />
        <span className="gradient-text">stuck at the border</span>
      </h2>
      <p className="text-hero-foreground/50 max-w-xl text-lg mb-12 leading-relaxed">
        The global demand for Indian products is real. The tenders are out there. But the path is invisible — buried in complexity, language barriers, and unfamiliar processes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {painPoints.map((p, i) => (
          <div
            key={p.title}
            className="group relative p-8 rounded-2xl bg-hero-foreground/[0.03] border border-hero-foreground/8 hover:border-destructive/30 hover:bg-hero-foreground/[0.06] transition-all duration-500 overflow-hidden"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-destructive/60 via-destructive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-destructive">
              <p.icon size={22} />
            </div>
            <h3 className="font-heading font-semibold text-hero-foreground text-[15px] mb-3 group-hover:text-destructive/90 transition-colors duration-300">{p.title}</h3>
            <p className="text-hero-foreground/40 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
