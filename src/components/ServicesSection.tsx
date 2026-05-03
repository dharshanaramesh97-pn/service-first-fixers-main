import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceFridge from "@/assets/service-fridge.jpg";
import serviceWashing from "@/assets/service-washing.jpg";
import serviceRo from "@/assets/service-ro.jpg";

const services = [
  {
    title: "Refrigerator Repair",
    image: serviceFridge,
    description:
      "From cooling issues to compressor failures, our experts handle all refrigerator problems across every brand — Samsung, LG, Whirlpool, Godrej, and more. Fast diagnosis, genuine parts, and a 1-year service warranty.",
    features: ["Gas Charging", "Compressor Repair", "Thermostat Fix", "Door Seal Replacement"],
  },
  {
    title: "Washing Machine Repair",
    image: serviceWashing,
    description:
      "Whether it's a top-load, front-load, or semi-automatic machine, we fix all types. From drum issues to motor problems, we handle it all with precision and care.",
    features: ["Drum Repair", "Motor Replacement", "Water Inlet Fix", "PCB Board Repair"],
  },
  {
    title: "RO Water Purifier Service",
    image: serviceRo,
    description:
      "Complete RO service including filter replacement, membrane cleaning, and annual maintenance. We service all RO brands to ensure clean, safe drinking water for your family.",
    features: ["Filter Change", "Membrane Cleaning", "UV Lamp Replacement", "Annual Maintenance"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-trust">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          What We Repair
        </h2>
        <p className="text-muted-foreground">
          Expert repair and maintenance for your essential home appliances.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((f) => (
                  <span key={f} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
              <a href="#home">
                <Button variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
