const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SR</span>
            </div>
            <span className="font-bold text-lg text-background">STAR Refrigeration</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner for 24/7 appliance repair — Refrigerators, Washing Machines &amp; RO Water Purifiers. All brands, 1-year warranty.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-background mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-background transition-colors">Home</a>
            <a href="#about" className="hover:text-background transition-colors">About Us</a>
            <a href="#services" className="hover:text-background transition-colors">Services</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} STAR Refrigeration. All rights reserved. | No 12, Kasthuri Complex, Ganapathy, Coimbatore, Tamil Nadu, India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
