import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Navigation, Camera, Clock, Phone, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LocationData {
  id: string;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  description: string;
  openingHours: string;
  contact: string;
  website: string;
  nearbyPlaces: string[];
  images: string[];
  amenities: string[];
  tips: string[];
}

const LocationExplorer = () => {
  const { id } = useParams();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock location data - in real app this would come from API/database
  const locationsData: { [key: string]: LocationData } = {
    "sector-62": {
      id: "sector-62",
      name: "Sector 62 IT Hub",
      address: "Sector 62, Noida, Uttar Pradesh 201301",
      coordinates: { lat: 28.6247, lng: 77.3647 },
      description: "Experience the bustling energy of India's premier IT destination. Walk through corporate campuses, modern office complexes, and innovation centers that house the country's leading technology companies.",
      openingHours: "24/7 Access (Office hours: 9 AM - 6 PM)",
      contact: "+91-120-4567890",
      website: "www.sector62noida.com",
      nearbyPlaces: ["Wave Mall", "Sector 61 Metro Station", "Worlds of Wonder", "Amity University"],
      images: [
        "/src/assets/noida-tech.jpg",
        "/src/assets/noida-hero.jpg"
      ],
      amenities: ["Metro Connectivity", "Food Courts", "ATMs", "Parking", "Security", "WiFi Zones"],
      tips: [
        "Best time to visit: Morning hours (9-11 AM) for less crowd",
        "Use Noida Metro for easy access",
        "Many cafes and restaurants available",
        "Photography allowed in public areas"
      ]
    },
    "central-park": {
      id: "central-park",
      name: "Central Park Noida",
      address: "Sector 32, Noida, Uttar Pradesh 201301",
      coordinates: { lat: 28.5821, lng: 77.3267 },
      description: "Immerse yourself in 25 acres of lush greenery, peaceful walking trails, and beautiful water features. Perfect for morning walks, picnics, and connecting with nature in the heart of the city.",
      openingHours: "5:00 AM - 9:00 PM (Daily)",
      contact: "+91-120-2345678",
      website: "www.noidaparks.gov.in",
      nearbyPlaces: ["Botanical Garden Metro", "Sector 34 Market", "DLF Mall of India", "Okhla Bird Sanctuary"],
      images: [
        "/src/assets/noida-park.jpg",
        "/src/assets/noida-hero.jpg"
      ],
      amenities: ["Walking Tracks", "Children's Play Area", "Fountain", "Benches", "Security", "Restrooms"],
      tips: [
        "Early morning (5-7 AM) is ideal for jogging",
        "Carry water bottle during summer",
        "Great spot for photography",
        "Pet-friendly environment"
      ]
    },
    "great-india-place": {
      id: "great-india-place",
      name: "The Great India Place",
      address: "Sector 38A, Noida, Uttar Pradesh 201301",
      coordinates: { lat: 28.5677, lng: 77.3210 },
      description: "Explore North India's largest shopping and entertainment destination. With over 200 stores, restaurants, cinema, and entertainment zones, it's a complete lifestyle experience.",
      openingHours: "10:00 AM - 10:00 PM (Daily)",
      contact: "+91-120-6789012",
      website: "www.greatindiaplace.com",
      nearbyPlaces: ["Noida Golf Course", "Sector 37 Metro Station", "Jaypee Greens", "India Expo Centre"],
      images: [
        "/src/assets/noida-commercial.jpg",
        "/src/assets/noida-hero.jpg"
      ],
      amenities: ["Shopping", "Food Court", "Cinema", "Gaming Zone", "Valet Parking", "ATMs"],
      tips: [
        "Visit during weekdays for less crowd",
        "Multiple dining options available",
        "Free parking available",
        "Great for family outings"
      ]
    }
  };

  useEffect(() => {
    if (id) {
      const data = locationsData[id];
      if (data) {
        setLocation(data);
      }
    }
  }, [id]);

  const openInMaps = () => {
    if (location) {
      const url = `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`;
      window.open(url, '_blank');
    }
  };

  if (!location) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={location.images[selectedImage]} 
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <Link to={`/attraction/${location.id}`} className="flex items-center gap-2 mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Details
            </Link>
            <h1 className="text-4xl font-bold mb-2">{location.name}</h1>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{location.address}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Camera className="h-6 w-6" />
                    Photo Gallery
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {location.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${location.name} ${idx + 1}`}
                        className={`w-full h-32 object-cover rounded-lg cursor-pointer transition-all ${
                          selectedImage === idx ? 'ring-2 ring-primary' : 'hover:opacity-80'
                        }`}
                        onClick={() => setSelectedImage(idx)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Explore This Location</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {location.description}
                  </p>
                  
                  <Button onClick={openInMaps} size="lg" className="w-full">
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions on Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Visitor Tips */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Visitor Tips</h3>
                  <div className="space-y-3">
                    {location.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Places */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Nearby Attractions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {location.nearbyPlaces.map((place, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{place}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Location Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Opening Hours</p>
                        <p className="text-sm text-muted-foreground">{location.openingHours}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-sm text-muted-foreground">{location.contact}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Website</p>
                        <p className="text-sm text-muted-foreground">{location.website}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Available Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.amenities.map((amenity, idx) => (
                      <span 
                        key={idx}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map Placeholder */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Location Map</h3>
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Interactive map would be here</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Lat: {location.coordinates.lat}, Lng: {location.coordinates.lng}
                      </p>
                    </div>
                  </div>
                  <Button onClick={openInMaps} variant="outline" size="sm" className="w-full mt-3">
                    View in Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocationExplorer;