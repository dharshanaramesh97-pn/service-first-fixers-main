import { Users, Award, Clock, Wrench } from "lucide-react";

const stats = [
  { icon: Users, value: "8+", label: "Expert Technicians" },
  { icon: Award, value: "1 Year", label: "Service Warranty" },
  { icon: Clock, value: "24/7", label: "Availability" },
  { icon: Wrench, value: "5000+", label: "Repairs Completed" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Your Trusted Repair Partner
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We are a dedicated team of 8 highly skilled technicians committed to providing the best appliance repair services in town. With years of experience across all major brands, we ensure your appliances are back to working condition — fast, reliable, and with a 1-year warranty on every service.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
