import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Attractions from "@/components/Attractions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Attractions />
      <Footer />
    </div>
  );
};

export default Index;
