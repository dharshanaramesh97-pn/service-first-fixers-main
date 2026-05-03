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
        <a href="tel:+916369680511" className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow group">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Phone className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-1">Call Us</h3>
          <p className="text-muted-foreground text-sm">+91 63696 80511</p>
        </a>

        <a href="mailto:mmrefrigeration2025@gmail.com" className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow group">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
            <Mail className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-bold text-foreground mb-1">Email Us</h3>
          <p className="text-muted-foreground text-sm">mmrefrigeration2025@gmail.com</p>
        </a>

        <div className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-7 h-7 text-gold" />
          </div>
          <h3 className="font-bold text-foreground mb-1">Office Address</h3>
          <p className="text-muted-foreground text-sm">No 12, Kasthuri Complex, Ganapathy, Coimbatore, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border">
        <iframe
          title="Business Location - Ganapathy, Coimbatore"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.9558!3d11.0268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGanapathy%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
