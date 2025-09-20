import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Heart, MessageCircle, Star, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  rating: number;
}

interface AttractionData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  highlights: string[];
  location: string;
  coordinates: { lat: number; lng: number };
  reviews: Comment[];
  averageRating: number;
  totalLikes: number;
}

const AttractionDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [attraction, setAttraction] = useState<AttractionData | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  // Mock data - in real app this would come from API/database
  const attractionsData: { [key: string]: AttractionData } = {
    "sector-62": {
      id: "sector-62",
      title: "Sector 62 IT Hub",
      description: "The heart of Noida's technology sector, housing major IT companies, corporate offices, and innovation centers.",
      fullDescription: "Sector 62 stands as the crown jewel of Noida's technological advancement, representing India's rapid digital transformation. This sprawling IT hub spans over 200 acres and houses more than 300 companies, from Fortune 500 corporations to innovative startups. The sector features state-of-the-art infrastructure, world-class facilities, and a vibrant ecosystem that fosters innovation and collaboration. With its modern architecture, green spaces, and excellent connectivity, Sector 62 has become a symbol of India's emergence as a global technology powerhouse.",
      image: "/src/assets/noida-tech.jpg",
      category: "Technology",
      highlights: ["200+ IT Companies", "Modern Office Spaces", "Tech Innovation", "24/7 Security", "Food Courts", "Metro Connectivity"],
      location: "Sector 62, Noida, Uttar Pradesh",
      coordinates: { lat: 28.6247, lng: 77.3647 },
      reviews: [
        { id: "1", author: "Rahul Sharma", text: "Amazing place to work! Great infrastructure and connectivity.", date: "2024-01-15", rating: 5 },
        { id: "2", author: "Priya Singh", text: "The tech hub is well-maintained with excellent facilities.", date: "2024-01-10", rating: 4 }
      ],
      averageRating: 4.5,
      totalLikes: 156
    },
    "central-park": {
      id: "central-park",
      title: "Central Park",
      description: "A sprawling green oasis in the city center, perfect for recreation, morning walks, and family gatherings.",
      fullDescription: "Central Park Noida is a magnificent 25-acre green sanctuary that serves as the city's lungs, providing a peaceful retreat from urban life. This beautifully landscaped park features pristine walking trails, serene water bodies, musical fountains, and diverse flora that attracts both residents and visitors. The park's design incorporates modern amenities while preserving natural beauty, making it an ideal destination for morning joggers, families, couples, and nature enthusiasts. With its well-maintained gardens, children's play areas, and outdoor fitness equipment, Central Park represents Noida's commitment to sustainable urban development.",
      image: "/src/assets/noida-park.jpg",
      category: "Recreation",
      highlights: ["25 Acres", "Lake & Fountains", "Family Friendly", "Jogging Track", "Musical Fountain", "Bird Watching"],
      location: "Sector 32, Noida, Uttar Pradesh",
      coordinates: { lat: 28.5821, lng: 77.3267 },
      reviews: [
        { id: "1", author: "Amit Kumar", text: "Perfect place for morning walks and family time!", date: "2024-01-12", rating: 5 },
        { id: "2", author: "Sunita Devi", text: "Beautiful park with great facilities for children.", date: "2024-01-08", rating: 4 }
      ],
      averageRating: 4.7,
      totalLikes: 203
    },
    "great-india-place": {
      id: "great-india-place",
      title: "The Great India Place",
      description: "Premier shopping and entertainment destination with international brands, restaurants, and cinema.",
      fullDescription: "The Great India Place stands as North India's premier shopping and entertainment destination, spanning over 1.2 million square feet of retail paradise. This architectural marvel houses more than 200 national and international brands, making it a shopper's heaven. Beyond shopping, the mall offers world-class dining experiences, multiplex cinemas, entertainment zones, and family-friendly activities. The mall's modern design, air-conditioned comfort, and strategic location make it a perfect destination for families, friends, and couples looking for a complete entertainment experience under one roof.",
      image: "/src/assets/noida-commercial.jpg",
      category: "Shopping",
      highlights: ["200+ Stores", "Entertainment Zone", "Fine Dining", "Multiplex Cinema", "Food Court", "Kids Zone"],
      location: "Sector 38A, Noida, Uttar Pradesh",
      coordinates: { lat: 28.5677, lng: 77.3210 },
      reviews: [
        { id: "1", author: "Neha Gupta", text: "Great shopping experience with excellent food options!", date: "2024-01-14", rating: 4 },
        { id: "2", author: "Vikash Yadav", text: "One-stop destination for shopping and entertainment.", date: "2024-01-09", rating: 5 }
      ],
      averageRating: 4.3,
      totalLikes: 189
    }
  };

  useEffect(() => {
    if (id) {
      const data = attractionsData[id];
      if (data) {
        setAttraction(data);
      }
    }
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (attraction) {
      setAttraction({
        ...attraction,
        totalLikes: isLiked ? attraction.totalLikes - 1 : attraction.totalLikes + 1
      });
    }
    toast({
      title: isLiked ? "Removed from favorites" : "Added to favorites",
      description: isLiked ? "You unliked this attraction" : "You liked this attraction"
    });
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: "You",
      text: newComment,
      date: new Date().toISOString().split('T')[0],
      rating: newRating
    };

    if (attraction) {
      const updatedReviews = [...attraction.reviews, comment];
      const newAverage = updatedReviews.reduce((acc, review) => acc + review.rating, 0) / updatedReviews.length;
      
      setAttraction({
        ...attraction,
        reviews: updatedReviews,
        averageRating: Math.round(newAverage * 10) / 10
      });
    }

    setNewComment("");
    setNewRating(5);
    toast({
      title: "Review added",
      description: "Thank you for your feedback!"
    });
  };

  const handleEditComment = (commentId: string) => {
    const comment = attraction?.reviews.find(r => r.id === commentId);
    if (comment) {
      setEditingComment(commentId);
      setEditText(comment.text);
    }
  };

  const handleUpdateComment = (commentId: string) => {
    if (!attraction) return;
    
    const updatedReviews = attraction.reviews.map(review =>
      review.id === commentId ? { ...review, text: editText } : review
    );
    
    setAttraction({
      ...attraction,
      reviews: updatedReviews
    });
    
    setEditingComment(null);
    setEditText("");
    toast({
      title: "Review updated",
      description: "Your review has been updated successfully!"
    });
  };

  if (!attraction) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={attraction.image} 
            alt={attraction.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <Badge className="mb-2">{attraction.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{attraction.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{attraction.averageRating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{attraction.totalLikes}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About This Place</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {attraction.fullDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleLike}
                      variant={isLiked ? "default" : "outline"}
                      className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
                    >
                      <Heart className={`mr-2 h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                      {isLiked ? 'Liked' : 'Like'}
                    </Button>
                    <Button 
                      onClick={() => setShowComments(!showComments)}
                      variant="outline"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Reviews ({attraction.reviews.length})
                    </Button>
                    <Link to={`/location/${attraction.id}`}>
                      <Button>
                        <MapPin className="mr-2 h-4 w-4" />
                        Explore Location
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              {showComments && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Reviews & Comments</h3>
                    
                    {/* Add Review Form */}
                    <div className="border rounded-lg p-4 mb-6">
                      <h4 className="font-semibold mb-3">Add Your Review</h4>
                      <div className="flex items-center gap-1 mb-3">
                        <span className="text-sm">Rating:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 cursor-pointer ${
                              star <= newRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                            onClick={() => setNewRating(star)}
                          />
                        ))}
                      </div>
                      <Textarea
                        placeholder="Share your experience..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3"
                      />
                      <Button onClick={handleAddComment} size="sm">
                        <Send className="mr-2 h-4 w-4" />
                        Add Review
                      </Button>
                    </div>

                    {/* Reviews List */}
                    <div className="space-y-4">
                      {attraction.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{review.author}</span>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                              {review.author === "You" && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleEditComment(review.id)}
                                >
                                  Edit
                                </Button>
                              )}
                            </div>
                          </div>
                          
                          {editingComment === review.id ? (
                            <div className="space-y-2">
                              <Textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                              />
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleUpdateComment(review.id)}
                                >
                                  Update
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setEditingComment(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <p className="text-muted-foreground">{review.text}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Location Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{attraction.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Average Rating</span>
                      <span className="font-semibold">{attraction.averageRating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Likes</span>
                      <span className="font-semibold">{attraction.totalLikes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reviews</span>
                      <span className="font-semibold">{attraction.reviews.length}</span>
                    </div>
                  </div>
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

export default AttractionDetail;