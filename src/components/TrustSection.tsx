import { Shield, Award, Handshake } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    title: "All Brands Covered",
    description: "We service every major appliance brand — Samsung, LG, Whirlpool, Godrej, Bosch, Haier, and many more.",
  },
  {
    icon: Award,
    title: "1 Year Service Warranty",
    description: "Every repair comes backed with a full 1-year warranty. Your satisfaction and peace of mind are guaranteed.",
  },
  {
    icon: Handshake,
    title: "No Sales, Only Service",
    description: "We're a pure service company. No upselling, no product push — just honest, reliable repair work.",
  },
];

const TrustSection = () => (
  <section className="section-padding bg-primary">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          Why Choose Us?
        </h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto">
          Trusted by thousands of families for reliable, warranty-backed repairs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {indicators.map((item) => (
          <div key={item.title} className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
