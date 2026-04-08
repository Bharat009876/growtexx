import { UserPlus, LayoutDashboard, FileCheck, Phone } from "lucide-react";

const steps = [
  { num: "01", title: "Register free", desc: "Create your GrowTeX account in minutes. No credit card. No commitment.", icon: UserPlus },
  { num: "02", title: "Explore your dashboard", desc: "See live tenders, market demand, and export opportunities filtered for your industry.", icon: LayoutDashboard },
  { num: "03", title: "Apply for bids", desc: "Select the right tenders. We walk you through every step of the application.", icon: FileCheck },
  { num: "04", title: "Talk to a consultant", desc: "Book a 1-on-1 with an export specialist. Get a winning strategy built for your business.", icon: Phone },
];

const ProcessSection = () => (
  <section id="how" className="section-padding bg-hero">
    <div className="container mx-auto max-w-6xl">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary/15 text-secondary border border-secondary/25 mb-5">
        The solution
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4 leading-tight">
        One platform. Every step<br />
        <span className="gradient-text">from India to the world.</span>
      </h2>
      <p className="text-hero-foreground/50 max-w-xl text-lg mb-12 leading-relaxed">
        GrowTeX brings live global tender data, expert consultants, and full export support — so you focus on winning, not figuring it out.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <div
            key={s.num}
            className="group relative p-8 rounded-2xl border border-hero-foreground/8 bg-hero-foreground/[0.03] hover:border-primary/40 hover:bg-primary/[0.06] transition-all duration-500 cursor-default overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <s.icon size={18} className="text-primary" />
              </div>
              <span className="text-[10px] font-bold text-primary/60 tracking-[0.2em] group-hover:text-primary transition-colors">STEP {s.num}</span>
            </div>
            <h3 className="font-heading font-semibold text-hero-foreground text-[15px] mb-2 group-hover:text-hero-foreground transition-colors">{s.title}</h3>
            <p className="text-hero-foreground/40 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
