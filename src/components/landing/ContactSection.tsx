import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry sent! 🎉", description: "Our trade experts will reach out within 24 hours." });
    setForm({ name: "", email: "", phone: "", business: "" });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const whatsappUrl = "https://wa.me/917999866007";

  return (
    <section id="contact" className="section-padding bg-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-5">
              CONTACT US
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground mb-4 leading-tight">
              Let's Start Your <span className="gradient-text">Export Journey</span>
            </h2>
            <p className="text-hero-foreground/50 text-lg mb-8 leading-relaxed">
              Fill in your details and our trade experts will reach out within 24 hours. No obligations — just a free consultation to explore your global potential.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/25"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-hero-foreground/[0.03] border border-hero-foreground/10 shadow-xl space-y-4">
            <Input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
              className="bg-hero-foreground/[0.05] border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/40"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="bg-hero-foreground/[0.05] border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/40"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              className="bg-hero-foreground/[0.05] border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/40"
            />
            <Input
              placeholder="Business Type (e.g., Manufacturer, MSME)"
              value={form.business}
              onChange={(e) => update("business", e.target.value)}
              className="bg-hero-foreground/[0.05] border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/40"
            />
            <Button variant="hero" type="submit" className="w-full py-6 text-base font-bold rounded-xl">
              <Send size={18} />
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
