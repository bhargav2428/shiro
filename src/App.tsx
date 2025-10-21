import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Seafood from "./pages/Seafood";
import WomenEmpowerment from "./pages/WomenEmpowerment";
import Partners from "./pages/Partners";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AnimatedBackground from "@/components/AnimatedBackground";
import TopLoadingBar from "@/components/TopLoadingBar";
import ShrimpLoader from "@/components/ShrimpLoader";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/women-empowerment" element={<WomenEmpowerment />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all assets to load
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      // If page already loaded, show content immediately
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      
      // Fallback: hide loader after 4 seconds max
      const fallbackTimer = setTimeout(() => {
        setLoading(false);
      }, 4000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (loading) {
    return <ShrimpLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TopLoadingBar />
          <AnimatedBackground />
          <Navigation />
          <AnimatedRoutes />
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;