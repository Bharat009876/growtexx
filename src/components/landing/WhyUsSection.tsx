import { Award, Globe2, Headphones, Users } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "High Success Rate",
    desc: "Our proven track record speaks for itself — 92% tender success rate for our clients.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Connected with 500+ verified buyers and trade bodies across 50+ countries worldwide.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    desc: "From strategy to shipment, we're with you at every step of your export journey.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our trade specialists bring decades of combined experience in international commerce.",
  },
];

const WhyUsSection = () => (
  <section id="whyus" className="section-padding bg-hero">
    <div className="container mx-auto max-w-6xl text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-5">
        WHY CHOOSE US
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-12 leading-tight">
        The GrowTeX <span className="gradient-text">Advantage</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {advantages.map((a) => (
          <div
            key={a.title}
            className="group p-8 rounded-2xl border border-hero-foreground/10 bg-hero-foreground/[0.03] hover:border-primary/30 hover:bg-hero-foreground/[0.06] transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <a.icon size={28} className="text-hero-foreground/80" />
            </div>
            <h3 className="font-heading font-bold text-hero-foreground text-[15px] mb-3">{a.title}</h3>
            <p className="text-hero-foreground/40 text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
