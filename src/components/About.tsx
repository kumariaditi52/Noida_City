import { Card, CardContent } from "@/components/ui/card";
import { Building2, Leaf, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description: "State-of-the-art buildings, wide roads, and planned urban development that sets the standard for modern living."
    },
    {
      icon: Leaf,
      title: "Green Spaces",
      description: "Over 30 parks and gardens providing a perfect balance between urban development and natural beauty."
    },
    {
      icon: Zap,
      title: "Tech Hub",
      description: "Home to 200+ IT companies and startups, making it the Silicon Valley of Northern India."
    },
    {
      icon: Users,
      title: "Quality Living",
      description: "Excellent educational institutions, healthcare facilities, and recreational amenities for families."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Noida Stands Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A meticulously planned city that represents the future of urban living, 
            where technology meets nature and ambition meets opportunity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 border-0"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 grid lg:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-up">
            <div className="text-4xl font-bold text-primary mb-2">6.4M+</div>
            <div className="text-muted-foreground">Population</div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">310km²</div>
            <div className="text-muted-foreground">Total Area</div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-accent mb-2">#1</div>
            <div className="text-muted-foreground">Planned City</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;