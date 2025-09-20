import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Noida</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Discover the beauty and innovation of India's most planned city. 
              Where technology meets nature and dreams become reality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-smooth" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-smooth" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-smooth">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">About Noida</a></li>
              <li><a href="#attractions" className="text-primary-foreground/80 hover:text-accent transition-smooth">Attractions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Tourism Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Business Hub</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">City Tours</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Business Setup</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Real Estate</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Investment Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">Event Planning</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+91 120 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@noidacity.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Noida City Beauty. All rights reserved. Made with ❤️ for the beautiful city of Noida.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;