import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-shrimpact.jpg";
import StatsSection from "@/components/StatsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
              <span className="text-accent-foreground font-semibold">Impact not Profit</span>
            </div>
            
            <h1 className="mb-6 text-white">
              Access India's Trusted Source for Best Quality, Safe, Traceable, Sustainable Shrimp
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              100% Antibiotic-Free | 95% Pathogen Reduction | Pond-to-Plate Traceability
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero">
                  Request Samples <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/seafood">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">About Shrimpact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shrimpact thrives on strategic partnerships driving innovation, sustainability, and quality in shrimp farming. 
              Rooted in NaCSA (MPEDA), we collaborate with Indian and global entities in tech, markets, finance, and government 
              to empower small farmers, deliver safe seafood, and support women-led enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl card-gradient hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl mb-4">Technology Innovators</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Nanobubble tech for cleaner ponds</li>
                <li>• High-efficiency BLDC motors</li>
                <li>• DO-sensor based aerators</li>
                <li>• 50% energy reduction</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl card-gradient hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl mb-4">Market & Finance Enablers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Global buyers/exporters network</li>
                <li>• QR code traceability</li>
                <li>• Financial support access</li>
                <li>• Premium pricing opportunities</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl card-gradient hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Leaf className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl mb-4">Sustainability Champions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Effluent standards compliance</li>
                <li>• Solar energy systems</li>
                <li>• Waste management solutions</li>
                <li>• Fair labor & worker safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">Why Partner with Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Impact-Driven Approach
              </h3>
              <p className="text-muted-foreground">
                Our motto is "Impact" not "Profit". We focus on verifiable outcomes like 100% antibiotic-free, 
                95% pathogen reduction, lower FCR (≤1.2), and zero rejection lots.
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-secondary" />
                Scalable Network
              </h3>
              <p className="text-muted-foreground">
                Deep relationships with shrimp communities across India, especially in Andhra Pradesh, 
                combined with tech and market alliances for global standards.
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border md:col-span-2">
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-accent" />
                Mutual Benefits
              </h3>
              <p className="text-muted-foreground">
                Partners gain access to trusted, traceable, and sustainable shrimp sources while contributing 
                to women empowerment and environmental goals. Together, we're building a resilient ecosystem 
                that uplifts farmers, reduces risks for buyers, and sets new benchmarks for the seafood industry.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/join">
              <Button size="lg" className="btn-primary">
                Explore Collaboration Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-ocean">
        <div className="container-custom text-center text-white">
          <h2 className="mb-6 text-white">Ready to Partner with Shrimpact?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join us in creating a sustainable, traceable, and high-quality seafood supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="btn-hero">
                Join Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
