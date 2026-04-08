import { ArrowRight, AlertTriangle, Target, Rocket } from "lucide-react";

const JourneySection = () => (
  <section className="section-padding bg-hero">
    <div className="container mx-auto max-w-6xl">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/25 mb-5">
        Your journey with GrowTeX
      </span>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-12 leading-tight">
        Where you are. Where you want<br />
        <span className="gradient-text">to be. What you'll get.</span>
      </h2>
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-6">
        {/* Where you are */}
        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-red-100/90 to-red-50 border border-red-300/60 hover:border-red-400/70 dark:from-red-950/40 dark:to-red-950/10 dark:border-red-500/15 dark:hover:border-red-500/30 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-red-500/15 dark:bg-red-500/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle size={22} className="text-red-600 dark:text-red-400" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-700/80 dark:text-red-400/70 block mb-3">Where you are</span>
            <h3 className="font-heading font-bold text-xl text-red-800 dark:text-red-300 mb-3">Selling only in India</h3>
            <p className="text-red-900/70 dark:text-red-200/40 text-sm leading-relaxed">Unsure how to reach foreign buyers. Missing tenders. No export roadmap.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["No leads", "Complex docs", "Zero visibility"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-medium bg-red-500/10 text-red-700 dark:text-red-400/70 border border-red-500/20 dark:border-red-500/10">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-hero-foreground/5 border border-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/10 transition-colors">
            <ArrowRight size={20} className="text-hero-foreground/30" />
          </div>
        </div>

        {/* What you want */}
        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-100/90 to-amber-50 border border-amber-300/60 hover:border-amber-400/70 dark:from-amber-950/40 dark:to-amber-950/10 dark:border-accent/15 dark:hover:border-accent/30 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Target size={22} className="text-accent" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700/80 dark:text-accent/70 block mb-3">What you want</span>
            <h3 className="font-heading font-bold text-xl text-amber-800 dark:text-amber-300 mb-3">Global revenue streams</h3>
            <p className="text-amber-900/70 dark:text-amber-200/40 text-sm leading-relaxed">Win international contracts. Expand into new markets. Grow without borders.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Export revenue", "New markets", "Scale globally"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-medium bg-accent/10 text-amber-700 dark:text-accent/70 border border-accent/20 dark:border-accent/10">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-hero-foreground/5 border border-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/10 transition-colors">
            <ArrowRight size={20} className="text-hero-foreground/30" />
          </div>
        </div>

        {/* What you get */}
        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-emerald-100/90 to-emerald-50 border border-emerald-300/60 hover:border-emerald-400/70 dark:from-emerald-950/40 dark:to-emerald-950/10 dark:border-secondary/15 dark:hover:border-secondary/30 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Rocket size={22} className="text-secondary" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-700/80 dark:text-secondary/70 block mb-3">What you get</span>
            <h3 className="font-heading font-bold text-xl text-emerald-800 dark:text-emerald-300 mb-3">End-to-end export support</h3>
            <p className="text-emerald-900/70 dark:text-emerald-200/40 text-sm leading-relaxed">From live tenders to buyer connections to compliance — GrowTeX handles it all.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Live tenders", "Expert team", "Full support"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-medium bg-secondary/10 text-emerald-700 dark:text-secondary/70 border border-secondary/20 dark:border-secondary/10">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default JourneySection;
