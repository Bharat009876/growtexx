import { TrendingUp, Users, Zap } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const ResultCard = ({ icon: Icon, value, suffix, title, desc }: { icon: React.ElementType; value: number; suffix: string; title: string; desc: string }) => {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
      <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-5">
        <Icon size={28} className="text-primary-foreground" />
      </div>
      <span className="text-4xl md:text-5xl font-heading font-extrabold gradient-text">{count}{suffix}</span>
      <h3 className="font-heading font-bold text-foreground text-lg mt-3 mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const ResultsSection = () => (
  <section id="results" className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-6xl text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-5">
        RESULTS & BENEFITS
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-16 leading-tight">
        Real Impact, <span className="gradient-text">Real Growth</span>
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <ResultCard icon={TrendingUp} value={3} suffix="X" title="Increase in Global Sales" desc="Our clients see an average 3x growth in international revenue within the first year." />
        <ResultCard icon={Users} value={500} suffix="+" title="Verified Buyers" desc="Access a curated network of international buyers actively seeking Indian exports." />
        <ResultCard icon={Zap} value={60} suffix="%" title="Faster Deal Closures" desc="Streamlined processes and expert negotiation cut your deal timeline dramatically." />
      </div>
    </div>
  </section>
);

export default ResultsSection;
