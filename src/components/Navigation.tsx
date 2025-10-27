// src/components/Navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Logo Image
import logoImage from "@/assets/logo.png"; // 40x40px PNG

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Tech", path: "/tech" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
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
        {/* Logo Section - Full Width */}
        <div className={`flex items-center justify-center transition-all duration-300 ${
          isScrolled ? "py-1" : "py-2"
        }`}>
          <Link to="/" className="group transition-all duration-300 flex items-center w-100 justify-center">
            <motion.img
              src={logoImage}
              alt="Shrimpact Logo"
              className={`
                object-contain transition-all duration-300 group-hover:scale-105
                ${isScrolled 
                  ? "w-full h-16" 
                  : "w-full h-20"
                }
              `}
              style={{
                backgroundColor: 'transparent', // Remove background
                mixBlendMode: 'multiply' // Better blending with background
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>
        </div>

        {/* Navigation Section - Below Logo */}
        <div className={`border-t border-border/50 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-2"
        }`}>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-md text-xl font-medium transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                   after:transition-all after:duration-300 hover:after:w-full
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
          <div className="lg:hidden flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
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
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all text-center ${
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