import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Users, TrendingUp, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-shrimpact.jpg";
import StatsSection from "@/components/StatsSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  const aboutRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const whyPartnerRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[scale-in_1s_ease-out]"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 animate-bounce-in">
              <span className="text-accent-foreground font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Impact not Profit
              </span>
            </div>
            
            <h1 className="mb-6 text-white animate-fade-in-up">
              Access India's Trusted Source for Best Quality, Safe, Traceable, Sustainable Shrimp
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              100% Antibiotic-Free | 95% Pathogen Reduction | Pond-to-Plate Traceability
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button size="lg" className="btn-hero shine-effect group">
                  Request Samples 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/seafood">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm hover-lift">
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
          <div 
            ref={aboutRef.ref}
            className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
              aboutRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-6">About Shrimpact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shrimpact thrives on strategic partnerships driving innovation, sustainability, and quality in shrimp farming. 
              Rooted in NaCSA (MPEDA), we collaborate with Indian and global entities in tech, markets, finance, and government 
              to empower small farmers, deliver safe seafood, and support women-led enterprises.
            </p>
          </div>

          <div 
            ref={featuresRef.ref}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className={`p-8 rounded-xl card-gradient hover-lift group transition-all duration-700 ${
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: '0.1s' }}>
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl mb-4">Technology Innovators</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors">• Nanobubble tech for cleaner ponds</li>
                <li className="hover:text-primary transition-colors">• High-efficiency BLDC motors</li>
                <li className="hover:text-primary transition-colors">• DO-sensor based aerators</li>
                <li className="hover:text-primary transition-colors">• 50% energy reduction</li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl card-gradient hover-lift group transition-all duration-700 ${
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: '0.2s' }}>
              <div className="w-14 h-14 mb-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                <TrendingUp className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl mb-4">Market & Finance Enablers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-secondary transition-colors">• Global buyers/exporters network</li>
                <li className="hover:text-secondary transition-colors">• QR code traceability</li>
                <li className="hover:text-secondary transition-colors">• Financial support access</li>
                <li className="hover:text-secondary transition-colors">• Premium pricing opportunities</li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl card-gradient hover-lift group transition-all duration-700 ${
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: '0.3s' }}>
              <div className="w-14 h-14 mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-glow">
                <Leaf className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl mb-4">Sustainability Champions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-accent transition-colors">• Effluent standards compliance</li>
                <li className="hover:text-accent transition-colors">• Solar energy systems</li>
                <li className="hover:text-accent transition-colors">• Waste management solutions</li>
                <li className="hover:text-accent transition-colors">• Fair labor & worker safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div 
            ref={whyPartnerRef.ref}
            className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
              whyPartnerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-6">Why Partner with Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`p-6 bg-background rounded-lg border border-border hover-lift group transition-all duration-700 ${
              whyPartnerRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`} style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                Impact-Driven Approach
              </h3>
              <p className="text-muted-foreground">
                Our motto is "Impact" not "Profit". We focus on verifiable outcomes like 100% antibiotic-free, 
                95% pathogen reduction, lower FCR (≤1.2), and zero rejection lots.
              </p>
            </div>

            <div className={`p-6 bg-background rounded-lg border border-border hover-lift group transition-all duration-700 ${
              whyPartnerRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`} style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                Scalable Network
              </h3>
              <p className="text-muted-foreground">
                Deep relationships with shrimp communities across India, especially in Andhra Pradesh, 
                combined with tech and market alliances for global standards.
              </p>
            </div>

            <div className={`p-6 bg-background rounded-lg border border-border md:col-span-2 hover-lift group transition-all duration-700 ${
              whyPartnerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                Mutual Benefits
              </h3>
              <p className="text-muted-foreground">
                Partners gain access to trusted, traceable, and sustainable shrimp sources while contributing 
                to women empowerment and environmental goals. Together, we're building a resilient ecosystem 
                that uplifts farmers, reduces risks for buyers, and sets new benchmarks for the seafood industry.
              </p>
            </div>
          </div>

          <div className={`text-center mt-12 transition-all duration-700 ${
            whyPartnerRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`} style={{ transitionDelay: '0.4s' }}>
            <Link to="/join">
              <Button size="lg" className="btn-primary shine-effect scale-on-hover">
                Explore Collaboration Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-ocean relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div 
          ref={ctaRef.ref}
          className="container-custom text-center text-white relative z-10"
        >
          <h2 className={`mb-6 text-white transition-all duration-700 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Ready to Partner with Shrimpact?
          </h2>
          <p className={`text-xl mb-8 text-white/90 max-w-2xl mx-auto transition-all duration-700 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{ transitionDelay: '0.2s' }}>
            Join us in creating a sustainable, traceable, and high-quality seafood supply chain.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{ transitionDelay: '0.4s' }}>
            <Link to="/join">
              <Button size="lg" className="btn-hero shine-effect group">
                Join Us
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm hover-lift">
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
