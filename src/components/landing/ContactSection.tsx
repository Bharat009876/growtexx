import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

const industries = [
  "Pharmaceuticals & APIs",
  "Textiles & Garments",
  "Steel & Metals",
  "Chemicals",
  "Agriculture & Food Products",
  "IT & Software Services",
  "Auto Components",
  "Gems & Jewellery",
  "Leather Products",
  "Engineering Goods",
  "Other",
];

const annualRevenueOptions = ["0-50L", "50L-2Cr", "2Cr-10Cr", "10Cr+"];
const exportStatusOptions = ["Yes", "No"];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    product: "",
    industry: "",
    annualRevenue: "",
    currentlyExporting: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "ee3db098-4d57-4121-ac94-ed52460b83f5");
      formPayload.append("subject", "New Consultation Request - Growtex Project");
      formPayload.append("from_name", "Growtex Project Website");
      formPayload.append("name", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append(
        "message",
        [
          `Name: ${formData.fullName}`,
          `Phone: ${formData.phone}`,
          `Email: ${formData.email}`,
          `Company: ${formData.company}`,
          `Product/Service: ${formData.product}`,
          `Industry: ${formData.industry || "Not selected"}`,
          `Annual Revenue: ${formData.annualRevenue || "Not selected"}`,
          `Currently Exporting: ${formData.currentlyExporting || "Not selected"}`,
        ].join("\n"),
      );
      formPayload.append("phone", formData.phone);
      formPayload.append("company", formData.company);
      formPayload.append("product", formData.product);
      formPayload.append("industry", formData.industry || "Not selected");
      formPayload.append("annual_revenue", formData.annualRevenue || "Not selected");
      formPayload.append("currently_exporting", formData.currentlyExporting || "Not selected");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast({ title: "Enquiry sent! 🎉", description: "Our trade experts will reach out within 24 hours." });
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        product: "",
        industry: "",
        annualRevenue: "",
        currentlyExporting: "",
      });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

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
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-hero-foreground/[0.03] border border-hero-foreground/10 shadow-xl space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Full Name</Label>
                <Input placeholder="Your Name" value={formData.fullName} onChange={(e) => update("fullName", e.target.value)} required className="bg-background/80 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Phone</Label>
                <Input placeholder="+91 79998 66007" value={formData.phone} onChange={(e) => update("phone", e.target.value)} required className="bg-background/80 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Email</Label>
                <Input type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => update("email", e.target.value)} required className="bg-background/80 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Company</Label>
                <Input placeholder="Company Name" value={formData.company} onChange={(e) => update("company", e.target.value)} required className="bg-background/80 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">What Do You Sell?</Label>
              <Input placeholder="e.g. Textiles, Steel, Pharmaceuticals..." value={formData.product} onChange={(e) => update("product", e.target.value)} required className="bg-background/80 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Industry</Label>
              <Select value={formData.industry} onValueChange={(v) => update("industry", v)}>
                <SelectTrigger className="bg-background/80 border-border text-foreground">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {industries.map((i) => (
                    <SelectItem key={i} value={i} className="text-foreground hover:bg-muted">
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Annual Revenue</Label>
                <Select value={formData.annualRevenue} onValueChange={(v) => update("annualRevenue", v)}>
                  <SelectTrigger className="bg-background/80 border-border text-foreground">
                    <SelectValue placeholder="Select annual revenue" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {annualRevenueOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-foreground hover:bg-muted">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Do You Currently Export?</Label>
                <Select value={formData.currentlyExporting} onValueChange={(v) => update("currentlyExporting", v)}>
                  <SelectTrigger className="bg-background/80 border-border text-foreground">
                    <SelectValue placeholder="Select yes or no" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {exportStatusOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-foreground hover:bg-muted">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button variant="hero" type="submit" className="w-full py-6 text-base font-bold rounded-xl mt-2" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Enquiry →"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
