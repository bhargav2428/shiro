// src/components/Navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Logo Image
import logoImage from "@/assets/1-removebg-preview.png"; // 40x40px PNG

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Safe & Sustainable", path: "/seafood" },
    { name: "Women Empowerment", path: "/women-empowerment" },
    { name: "Partners", path: "/partners" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-border transition-all duration-300 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-md shadow-lg" 
        : "bg-background/95 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}>
          
          {/* LOGO ONLY - NO BORDER REMOVED */}
          <Link to="/" className="group transition-all duration-300 flex items-center">
            <motion.img
              src={logoImage}
              alt="Shrimpact Logo"
              className={`
                object-contain transition-all duration-300 group-hover:scale-110
                ${isScrolled 
                  ? "w-20 h-20 md:w-40 md:h-40" 
                  : "w-20 h-20 md:w-40 md:h-40"
                }
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                  after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                  ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground after:w-full"
                    : "text-foreground hover:bg-muted/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`lg:hidden bg-background border-t border-border overflow-hidden`}
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container-custom py-4 space-y-2">
          {links.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;