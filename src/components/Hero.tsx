import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/noida-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover
              <span className="block text-accent">Noida's</span>
              Beauty
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Experience the perfect blend of modern infrastructure, lush green spaces, 
              and thriving technology hubs that make Noida a crown jewel of urban planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hero-gradient shadow-glow text-white border-0 hover:scale-105 transition-bounce">
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="glass-effect text-white border-white/30 hover:bg-white/20">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="hidden lg:block relative">
            <div className="absolute top-10 right-10 glass-effect rounded-2xl p-6 animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-white/80">IT Companies</div>
              </div>
            </div>
            <div className="absolute bottom-20 right-20 glass-effect rounded-2xl p-6 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-white/80">Green Parks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;