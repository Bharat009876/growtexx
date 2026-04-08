import { MessageSquare, FileSearch, Globe2, FileText, Megaphone, Building2 } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Export consultation", desc: "1-on-1 sessions with certified export consultants who understand your industry.", gradient: "from-primary/20 to-primary/5", hover: "hover:border-primary/40", iconColor: "text-primary" },
  { icon: FileSearch, title: "Tender applications", desc: "Find, assess, and apply for the right international tenders with our guidance.", gradient: "from-secondary/20 to-secondary/5", hover: "hover:border-secondary/40", iconColor: "text-secondary" },
  { icon: Globe2, title: "New market channels", desc: "Discover which countries are actively sourcing your product right now.", gradient: "from-accent/20 to-accent/5", hover: "hover:border-accent/40", iconColor: "text-accent" },
  { icon: FileText, title: "Documentation support", desc: "Export licenses, compliance paperwork, and trade documentation — handled.", gradient: "from-purple-500/20 to-purple-500/5", hover: "hover:border-purple-500/40", iconColor: "text-purple-400" },
  { icon: Megaphone, title: "Export marketing", desc: "Pitch decks, product catalogs, and outreach material built for global buyers.", gradient: "from-orange-500/20 to-orange-500/5", hover: "hover:border-orange-500/40", iconColor: "text-orange-400" },
  { icon: Building2, title: "Business setup abroad", desc: "Partnerships, distributor networks, and entry into regulated foreign markets.", gradient: "from-cyan-500/20 to-cyan-500/5", hover: "hover:border-cyan-500/40", iconColor: "text-cyan-400" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-hero">
    <div className="container mx-auto max-w-6xl">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent border border-accent/25 mb-5">
        What we do
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4 leading-tight">
        Full-stack export support<br />
        <span className="gradient-text">for Indian businesses</span>
      </h2>
      <p className="text-hero-foreground/50 max-w-xl text-lg mb-12 leading-relaxed">
        From first discovery to signed contracts — GrowTeX covers every layer of your export journey.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className={`group relative p-8 rounded-2xl border border-hero-foreground/8 bg-hero-foreground/[0.03] ${s.hover} transition-all duration-500 overflow-hidden cursor-default`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative">
              <div className={`w-14 h-14 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/8 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${s.iconColor}`}>
                <s.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-hero-foreground text-[15px] mb-2">{s.title}</h3>
              <p className="text-hero-foreground/40 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-hero-foreground/30 group-hover:text-hero-foreground/60 transition-colors">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
