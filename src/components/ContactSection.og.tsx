import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Contact Us</h2>
        <p className="text-muted-foreground">Reach out anytime — we're here to help 24/7.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Call Us Card */}
        <a href="tel:+919894159805" className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow group">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Phone className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-1">Call Us</h3>
          <p className="text-muted-foreground text-sm">+91 98941 59805</p>
        </a>

        {/* Email Us Card */}
        <a href="mailto:mmrefrigeration2025@gmail.com" className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow group">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
            <Mail className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-bold text-foreground mb-1">Email Us</h3>
          <p className="text-muted-foreground text-sm">mmrefrigeration2025@gmail.com</p>
        </a>

        {/* Office Address Card - Click panna Map open aagum */}
        <a 
          href="https://maps.app.goo.gl/jKYCwCQPLgSPgouF9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
            <MapPin className="w-7 h-7 text-gold" />
          </div>
          <h3 className="font-bold text-foreground mb-1">Office Address</h3>
          <p className="text-muted-foreground text-sm">No.1, Kasthuribai street, Old Sathy Rd, Ganapathy, Coimbatore - 641006</p>
          <p className="text-gold text-xs mt-3 font-medium group-hover:underline">Click to view location</p>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;