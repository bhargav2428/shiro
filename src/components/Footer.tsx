import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shrimpact</h3>
            <p className="text-primary-foreground/80 mb-4">
              Impact not Profit. Delivering safe, sustainable, and traceable seafood while empowering communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/seafood" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Safe & Sustainable Seafood
                </Link>
              </li>
              <li>
                <Link to="/women-empowerment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Litopenaeus vannamei (Shrimp)</li>
              <li>Lates Calcarifer (Seabass)</li>
              <li>100% Antibiotic-Free</li>
              <li>Fully Traceable</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Andhra Pradesh, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@shrimpact.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@shrimpact.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Shrimpact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
