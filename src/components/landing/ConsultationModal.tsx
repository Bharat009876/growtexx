import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Globe } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

const ConsultationModal = ({ open, onOpenChange }: ConsultationModalProps) => {
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

      toast({
        title: "Request submitted! 🎉",
        description: "Our export specialist will reach out within 24 hours.",
      });
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
      onOpenChange(false);
    } catch (error) {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] bg-card border-border text-foreground p-0 gap-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-8 pb-2">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-secondary/15 text-secondary border border-secondary/25">
              <Globe size={12} /> FREE CONSULTATION
            </span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-heading font-extrabold text-foreground leading-tight">
            Book Your Free<br />Export Consultation
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            Tell us about your business and we'll help you explore international opportunities.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
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
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
