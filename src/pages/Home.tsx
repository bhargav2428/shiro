import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Users, TrendingUp, Sparkles, Globe, Award, Heart, Target, Eye, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useInView, easeOut } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";
import heroImage from "@/assets/Hero.jpg";
import PageTransition from "@/components/PageTransition";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingParticles from "@/components/FloatingParticles";

// Import partner logos
import futurefishLogo from "@/assets/future.jpg";
import zfcLogo from "@/assets/ropar.jpg";
import partlySunnyLogo from "@/assets/Awuarium.jpg";
import aboutImage from "@/assets/image.png";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const isAboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const isVisionInView = useInView(visionRef, { once: true });
  const isClientsInView = useInView(clientsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const { scrollY } = useScroll();

  // Enhanced parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, 80], { ease: easeOut });
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95], { ease: easeOut });
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.03], { ease: easeOut });
  
  const aboutY = useTransform(scrollY, [200, 700], [20, -20], { ease: easeOut });
  const aboutOpacity = useTransform(scrollY, [300, 600], [0, 1], { ease: easeOut });
  
  const visionY = useTransform(scrollY, [800, 1200], [15, -15], { ease: easeOut });
  const visionScale = useTransform(scrollY, [800, 1200], [0.99, 1], { ease: easeOut });
  
  const ctaY = useTransform(scrollY, [1200, 1600], [10, -10], { ease: easeOut });
  const ctaRotate = useTransform(scrollY, [1200, 1600], [-0.2, 0.2], { ease: easeOut });

  useEffect(() => {
    setIsLoaded(true);
    const handleResize = () => {
      // Dynamic adjustments can be added here
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <PageTransition>
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
        
        {/* Premium Hero Section - Adjusted to start below navigation */}
        <section ref={heroRef} className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Animated Background Layers */}
          <motion.div 
            style={{ 
              y: heroY,
              scale: heroScale 
            }}
            className="absolute inset-0 will-change-transform"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            
            {/* Enhanced Gradient Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-cyan-900/60"
              style={{ opacity: heroOpacity }}
            />
            
            {/* Animated Light Effects */}
            {!isMobile && (
              <motion.div 
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
                  `,
                  backgroundSize: "200% 200%",
                }}
              />
            )}

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wMiIvPjwvc3ZnPg==')] opacity-20" />
          </motion.div>

          {/* Enhanced Floating Particles */}
          <FloatingParticles count={isMobile ? 8 : 15} />
          
          {/* Hero Content - Adjusted margin-top to account for fixed navigation */}
          <div className="container-custom relative z-10 text-center px-4 sm:px-6">
            <motion.div 
              className="max-w-6xl mx-auto mt-56" // Increased to mt-56 for more space down
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-500 group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <Sparkles className="w-5 h-5 text-yellow-300 drop-shadow-lg" />
                  <motion.div
                    className="absolute inset-0 w-5 h-5 text-yellow-200 blur-sm"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </motion.div>
                <span className="font-semibold text-white text-sm tracking-wider group-hover:tracking-widest transition-all duration-500">
                  Impact not Profit
                </span>
              </motion.div>

              {/* Main Hero Text - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 60,
                  damping: 15
                }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl shadow-blue-500/20 mb-6 relative overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
                  <span className="text-white drop-shadow-2xl font-normal">Delivering safe,</span>
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl font-medium">
                    sustainable and traceable seafood while 
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-white drop-shadow-2xl font-normal"> empowering communities.</span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-white/90 leading-relaxed font-light max-w-4xl mx-auto"
                >
                  Safe, Traceable, 100% Antibiotic-Free Sustainable Shrimp
                </motion.p>

                {/* CTA Buttons - Removed */}
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <span className="text-white/70 text-sm font-light tracking-wider group-hover:text-white transition-colors duration-300">
                Scroll to explore
              </span>
              <div className="w-6 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1 group-hover:bg-white/20 transition-all duration-300">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-4 h-4 bg-white rounded-full group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Premium About Section */}
        <section ref={aboutRef} className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
          {/* Background Elements */}
          {!isMobile && (
            <motion.div
              style={{ y: aboutY }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
              <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
            </motion.div>
          )}

          <div className="container-custom relative z-10 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isAboutInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg mb-8"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700 tracking-wider">ABOUT SHRIMPACT</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
                  Redefining Shrimp
                  <br />
                  <span className="font-medium">Sustainability</span>
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-5xl mx-auto">
                  At Shrimpact, we see shrimp not just as a product, but as a symbol of health, 
                  livelihood, and sustainability. We're committed to empowering farmers and 
                  delivering fresh, traceable, and responsibly produced shrimp.
                </p>
              </motion.div>

              {/* Image and Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-4xl blur-2xl transition-all duration-500 group-hover:blur-3xl" />
                    <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 border border-white/40 shadow-2xl shadow-blue-500/10 overflow-hidden">
                      <img 
                        src={aboutImage} 
                        alt="About Shrimpact" 
                        className="w-full h-auto rounded-2xl object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/10 rounded-full border border-blue-500/20" />
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-cyan-500/10 rounded-full border border-cyan-500/20" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                    Our Commitment to{" "}
                    <span className="font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Excellence
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                    Through a smart, ethical, and tech-enabled ecosystem, we ensure every shrimp 
                    meets the highest standards of quality and sustainability.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Advanced technology integration",
                      "Ethical farming practices",
                      "Transparent supply chains",
                      "Farmer empowerment programs"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="font-light">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Vision, Mission & Values Section */}
        <section ref={visionRef} className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
          {/* Background Elements */}
          {!isMobile && (
            <motion.div
              style={{ 
                y: visionY,
                scale: visionScale
              }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
            </motion.div>
          )}

          <div className="container-custom relative z-10 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
                  Our Guiding
                  <span className="font-medium"> Principles</span>
                </h2>
                <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                  The foundation of everything we do at Shrimpact
                </p>
              </motion.div>

              {/* Three Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* VISION */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-6 md:p-8 text-center border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-lg border border-yellow-300/30 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-yellow-500/30 transition-all duration-300"
                  >
                    <Eye className="h-8 w-8 text-yellow-600 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    VISION
                  </h3>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10 space-y-3"
                  >
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      Making India the most
                    </p>
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      trusted global source for
                    </p>
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      Sustainable, Safe and
                    </p>
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      Superior Shrimp.
                    </p>
                  </motion.div>
                </motion.div>

                {/* MISSION */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-6 md:p-8 text-center border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2
                    }}
                    className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-lg border border-blue-300/30 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <Target className="h-8 w-8 text-blue-600 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    MISSION
                  </h3>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-10"
                  >
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      Our mission is to equip Indian shrimp farmers with technology driven solutions
                      that lower production costs and produce top-Quality shrimp, securing India's
                      prominence in the global shrimp market via transparent supply chains and strategic
                      collaborations that uplift farmers, consumers, and stakeholders alike.
                    </p>
                  </motion.div>
                </motion.div>

                {/* VALUES */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-6 md:p-8 text-center border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.4
                    }}
                    className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400/20 to-green-400/20 backdrop-blur-lg border border-emerald-300/30 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-emerald-500/30 transition-all duration-300"
                  >
                    <Heart className="h-8 w-8 text-emerald-600 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    VALUES
                  </h3>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 space-y-4"
                  >
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      Integrity, Innovation,
                    </p>
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      and Inclusivity are the
                    </p>
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      pillars that guide every
                    </p>
                    <p className="text-xl font-light text-gray-800 leading-tight">
                      decision we make.
                    </p>
                  </motion.div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Partners Section */}
        <section ref={clientsRef} className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
          <div className="container-custom px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isClientsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isClientsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
                  Trusted by
                  <span className="font-medium"> Sustainability Leaders</span>
                </h2>
                <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                  Collaborating with forward-thinking organizations dedicated to sustainable shrimp farming
                </p>
              </motion.div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { logo: futurefishLogo, },
                  { logo: zfcLogo,  },
                  { logo: partlySunnyLogo, }
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isClientsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 text-center border border-white/40 shadow-lg hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center overflow-hidden p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} Logo`} 
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-gray-800">{partner.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium CTA Section */}
        
        
      </div>
    </PageTransition>
  );
};

export default Home;