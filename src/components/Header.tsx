import { Button } from "@/components/ui/button";
import { MapPin, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Noida</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#attractions" className="text-foreground hover:text-primary transition-smooth">
              Attractions
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Visit Guide
            </Button>
            <Button className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;