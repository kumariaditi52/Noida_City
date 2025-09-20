import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import techImage from "@/assets/noida-tech.jpg";
import parkImage from "@/assets/noida-park.jpg";
import commercialImage from "@/assets/noida-commercial.jpg";

const Attractions = () => {
  const attractions = [
    {
      title: "Sector 62 IT Hub",
      description: "The heart of Noida's technology sector, housing major IT companies, corporate offices, and innovation centers.",
      image: techImage,
      category: "Technology",
      highlights: ["200+ IT Companies", "Modern Office Spaces", "Tech Innovation"]
    },
    {
      title: "Central Park",
      description: "A sprawling green oasis in the city center, perfect for recreation, morning walks, and family gatherings.",
      image: parkImage,
      category: "Recreation",
      highlights: ["25 Acres", "Lake & Fountains", "Family Friendly"]
    },
    {
      title: "The Great India Place",
      description: "Premier shopping and entertainment destination with international brands, restaurants, and cinema.",
      image: commercialImage,
      category: "Shopping",
      highlights: ["200+ Stores", "Entertainment Zone", "Fine Dining"]
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Must-Visit Attractions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the diverse facets of Noida, from cutting-edge technology parks 
            to serene green spaces and vibrant commercial centers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 group border-0"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="hero-gradient text-white px-3 py-1 rounded-full text-sm font-medium">
                    {attraction.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {attraction.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {attraction.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MapPin className="mr-2 h-4 w-4" />
                    Location
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
            View All Attractions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Attractions;