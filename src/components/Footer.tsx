import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>
      
      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 hover:scale-105 transition-transform inline-block">
              Shrimpact
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Impact not Profit. Delivering safe, sustainable, and traceable seafood while empowering communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-all hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/seafood" className="text-primary-foreground/80 hover:text-primary-foreground transition-all hover:translate-x-1 inline-block">
                  Safe & Sustainable Seafood
                </Link>
              </li>
              <li>
                <Link to="/women-empowerment" className="text-primary-foreground/80 hover:text-primary-foreground transition-all hover:translate-x-1 inline-block">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-primary-foreground/80 hover:text-primary-foreground transition-all hover:translate-x-1 inline-block">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors">Litopenaeus vannamei (Shrimp)</li>
              <li className="hover:text-primary-foreground transition-colors">Lates Calcarifer (Seabass)</li>
              <li className="hover:text-primary-foreground transition-colors">100% Antibiotic-Free</li>
              <li className="hover:text-primary-foreground transition-colors">Fully Traceable</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                  Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-start gap-2 group">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:info@shrimpact.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@shrimpact.com
                </a>
              </li>
              <li className="flex items-start gap-2 group">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:+911234567890" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p className="animate-fade-in">&copy; {new Date().getFullYear()} Shrimpact. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce-in hover:shadow-2xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
