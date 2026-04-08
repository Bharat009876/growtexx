import { Button } from "@/components/ui/button";
import heroGlobe from "@/assets/hero-globe.jpg";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
}

const StatItem = ({ end, suffix, label }: StatItemProps) => {
  const { count, ref } = useCountUp(end, 2200);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="py-6 px-6 border-t border-l border-hero-foreground/10 first:border-l-0 md:border-t-0">
      <span className="text-2xl md:text-3xl font-heading font-bold gradient-text">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="block text-xs text-hero-foreground/50 mt-1.5 tracking-wide">{label}</span>
    </div>
  );
};

const stats: StatItemProps[] = [
  { end: 10000, suffix: "+", label: "Live tenders tracked" },
  { end: 100, suffix: "+", label: "Countries covered" },
  { end: 500, suffix: "+", label: "Indian businesses served" },
  { end: 0, suffix: "Free", label: "To get started" },
];

interface HeroSectionProps {
  onBookConsult?: () => void;
}

const HeroSection = ({ onBookConsult }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <img
      src={heroGlobe}
      alt="Global trade network visualization"
      className="absolute inset-0 w-full h-full object-cover scale-105"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/62 to-background/40 dark:from-[hsl(220,50%,5%,0.75)] dark:via-[hsl(220,50%,8%,0.85)] dark:to-[hsl(220,50%,8%,0.95)]" />

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-secondary/30 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
    </div>

    <div className="relative z-10 container mx-auto px-4 max-w-5xl">
      <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-accent/10 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          India's #1 Export Growth Platform
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground dark:text-hero-foreground leading-[1.1] mb-7 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Your business deserves<br />to go <span className="gradient-text">beyond India.</span><br />We make it happen.
      </h1>
      <p className="text-lg md:text-xl text-foreground/75 dark:text-hero-foreground/60 max-w-2xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        Thousands of global tenders. 100+ countries. One dashboard. GrowTeX connects Indian businesses to international opportunities — and guides you every step of the way.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
        <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl" asChild>
          <a href="#contact">Register free — explore your market</a>
        </Button>
        <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 rounded-xl" onClick={onBookConsult}>
          Book a consultation call
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl border border-hero-foreground/10 backdrop-blur-sm bg-hero-foreground/[0.03] overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
        {stats.map((s, i) =>
          s.end === 0 ? (
            <div key={i} className="py-6 px-6 border-t border-l border-hero-foreground/10 first:border-l-0 md:border-t-0">
              <span className="text-2xl md:text-3xl font-heading font-bold gradient-text">Free</span>
              <span className="block text-xs text-hero-foreground/50 mt-1.5 tracking-wide">{s.label}</span>
            </div>
          ) : (
            <StatItem key={i} {...s} />
          )
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
