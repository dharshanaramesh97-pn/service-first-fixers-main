import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendFormEmail } from "@/lib/emailService";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    service: "",
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service || !form.name || !form.phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendFormEmail(form);
      toast({ title: "Request Submitted!", description: "We'll call you back within 30 minutes." });
      setForm({ service: "", name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({ 
        title: "Failed to submit request", 
        description: "Please try again or call us directly.",
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Expert appliance repair technician" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.92)] via-[hsl(var(--hero-overlay)/0.8)] to-[hsl(var(--hero-overlay)/0.5)]" />
      </div>

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16 px-4">
        {/* Left: Headline */}
        <div className="animate-fade-up">
          <span className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Available 24/7 — All Brands
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[hsl(0,0%,100%)]">
            24/7 Expert<br />
            <span className="text-accent">Repair Services</span><br />
            At Your Doorstep
          </h1>
          <p className="text-lg text-[hsl(218, 4%, 58%)] max-w-lg mb-8">
            Trusted by thousands of households. We repair Refrigerators, Washing Machines &amp; RO Water Purifiers with a 1-Year Service Warranty.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-[hsl(215,20%,75%)]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              10 + Expert Technicians
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gold" />
              1 Year Warranty
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              All Brands Covered
            </div>
          </div>
        </div>

        {/* Right: Lead Form */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto lg:ml-auto">
            <h2 className="text-xl font-bold text-foreground mb-1">Book a Repair</h2>
            <p className="text-sm text-muted-foreground mb-6">Get a callback within 30 minutes</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="">Select Service *</option>
                  <option value="fridge">Refrigerator Repair</option>
                  <option value="washing">Washing Machine Repair</option>
                  <option value="ro">RO Water Purifier Service</option>
                </select>
              </div>
              <Input
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="py-3"
              />
              <Input
                placeholder="Contact Number *"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="py-3"
              />
              <Textarea
                placeholder="Describe your issue (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base font-semibold gap-2" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
