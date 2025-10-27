import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
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
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="animate-fade-in text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Shrimpact. All rights reserved.
          </p>
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