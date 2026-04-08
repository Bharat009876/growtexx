import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "GrowTeX helped us break into the European market within 3 months. Their tender support was invaluable — we secured contracts worth ₹2.5 Cr in our first quarter of exporting.",
    name: "Rajesh Sharma",
    role: "MD, Sharma Textiles Pvt. Ltd.",
  },
  {
    quote: "As a first-time exporter, I was overwhelmed. GrowTeX handled everything from buyer discovery to documentation. Now we export to 8 countries and growing!",
    name: "Priya Nair",
    role: "Founder, NairSpice Exports",
  },
  {
    quote: "Their global network is unmatched. We got connected with verified buyers in the Middle East and Africa, leading to a 4x increase in our export revenue.",
    name: "Amit Patel",
    role: "CEO, Patel Engineering Components",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-hero">
    <div className="container mx-auto max-w-6xl text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-5">
        TESTIMONIALS
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-16 leading-tight">
        Trusted by <span className="gradient-text">Exporters Across India</span>
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-8 rounded-2xl border border-hero-foreground/10 bg-hero-foreground/[0.03] text-left hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-hero-foreground/70 text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-heading font-bold text-hero-foreground">{t.name}</p>
              <p className="text-hero-foreground/40 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
