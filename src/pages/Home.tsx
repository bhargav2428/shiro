import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Users, TrendingUp, Sparkles, Globe, Award } from "lucide-react";
import { motion, useScroll, useTransform, useInView, easeOut } from "framer-motion"; // Added easeOut import
import { useRef, useMemo, useEffect } from "react";
import heroImage from "@/assets/hero-shrimpact.jpg";
import StatsSection from "@/components/StatsSection";
import PageTransition from "@/components/PageTransition";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingParticles from "@/components/FloatingParticles";
import GlassCard from "@/components/GlassCard";
import AnimatedShrimpCursor from "@/components/AnimatedShrimpCursor";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-50px" });
  const isPartnersInView = useInView(partnersRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const { scrollY } = useScroll();

  // Enhanced parallax transforms - using easeOut function for smooth easing
  const heroY = useTransform(scrollY, [0, 500], [0, 80], { ease: easeOut });
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95], { ease: easeOut });
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.03], { ease: easeOut });
  
  const featuresY = useTransform(scrollY, [200, 700], [20, -20], { ease: easeOut });
  const featuresOpacity = useTransform(scrollY, [300, 600], [0, 1], { ease: easeOut });
  
  const partnersY = useTransform(scrollY, [800, 1200], [15, -15], { ease: easeOut });
  const partnersScale = useTransform(scrollY, [800, 1200], [0.99, 1], { ease: easeOut });
  
  const ctaY = useTransform(scrollY, [1200, 1600], [10, -10], { ease: easeOut });
  const ctaRotate = useTransform(scrollY, [1200, 1600], [-0.2, 0.2], { ease: easeOut });

  // Memoized data for better performance
  const features = useMemo(() => [
    {
      icon: Shield,
      title: "100% Antibiotic-Free",
      description: "Pre-harvest testing ensures zero antibiotics, guaranteed quality, and zero rejection lots for global markets.",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "95% Pathogen Reduction",
      description: "Advanced technology and strict protocols deliver superior quality with minimal disease risk.",
      color: "text-green-600"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Nanobubble tech, BLDC motors, and DO sensors reduce energy use by 15-30% while improving yields.",
      color: "text-emerald-600"
    }
  ], []);

  const partnerBenefits = useMemo(() => [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Connect with verified international buyers and expand into premium markets with complete traceability."
    },
    {
      icon: Users,
      title: "Technology Innovation",
      description: "Access cutting-edge aquaculture solutions tested on 1000+ farms across India."
    },
    {
      icon: Award,
      title: "Impact-Driven",
      description: "Our motto 'Impact not Profit' ensures measurable outcomes benefiting farmers, women, and the environment."
    }
  ], []);

  const stats = useMemo(() => [
    { number: "1000+", label: "Farms" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Partners" }
  ], []);

  const highlights = useMemo(() => [
    "100% Antibiotic-Free", 
    "95% Pathogen Reduction", 
    "Pond-to-Plate Traceability"
  ], []);

  // Performance: Reduce particle count on mobile
  useEffect(() => {
    const handleResize = () => {
      // You can add logic here to dynamically adjust components like FloatingParticles
      // For now, we'll pass a responsive count prop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <PageTransition>
      <div className="min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll */}
        <AnimatedShrimpCursor />
        
        {/* Hero Section with Full Background Effects - Adjusted for mobile */}
        <section ref={heroRef} className="relative h-[calc(100vh-env(safe-area-inset-top))] md:h-screen flex items-center justify-center overflow-hidden">
          {/* Multi-layer Parallax Background - Simplified layers for perf, added more will-change */}
          <motion.div 
            style={{ 
              y: heroY,
              scale: heroScale 
            }}
            className="absolute inset-0 will-change-transform" // Hardware acceleration
          >
            {/* Base Image Layer - Optimized animation with smoother easing */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            
            {/* Gradient Overlay Layer */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-cyan-900/60"
              style={{ opacity: heroOpacity }}
            />
            
            {/* Simplified Ocean Waves - Reduced complexity, smoother transition */}
            {!isMobile && ( // Disable on mobile for perf
              <motion.div 
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 25, // Slower for smoothness
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
                  `,
                  backgroundSize: "200% 200%",
                }}
              />
            )}

            {/* Simplified Bubbles - Reduced on mobile, smoother */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20, // Slower
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundImage: isMobile 
                  ? `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1%, transparent 3%)` // Single bubble
                  : `
                    radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 2%, transparent 5%),
                    radial-gradient(circle at 90% 60%, rgba(255,255,255,0.1) 1%, transparent 4%)
                  `,
                backgroundSize: isMobile ? "300px 300px" : "500px 500px",
              }}
            />
          </motion.div>

          {/* Responsive Floating Particles - Reduced count for smoothness */}
          <FloatingParticles count={isMobile ? 5 : 15} />
          
          {/* Main Content with Glass Morphism - Adjusted padding for mobile */}
          <div className="container-custom relative z-10 text-center px-2 sm:px-4">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {/* Glass Tagline Badge - Smaller on mobile, smoother spring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 120, // Slightly higher for snappier but smooth
                  damping: 15 // Added damping for smoothness
                }}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slower rotation
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                </motion.div>
                <span className="font-semibold text-white text-xs md:text-sm tracking-wide">Impact not Profit</span>
              </motion.div>
              
              {/* Glass Main Heading Container - Responsive text sizes, smoother transitions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 60,
                  damping: 15
                }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 md:p-12 border border-white/10 shadow-2xl shadow-blue-500/10 mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-3 md:mb-4 leading-tight">
                  <span className="text-white drop-shadow-2xl">Access India's</span>
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Trusted Source
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-white drop-shadow-2xl">for Premium Shrimp</span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-white/90 leading-relaxed font-normal"
                >
                  Safe, Traceable, Sustainable Shrimp with{" "}
                  <span className="font-semibold text-green-300">100% Antibiotic-Free</span> Guarantee
                </motion.p>
              </motion.div>

              {/* Glass Feature Highlights - Better wrapping on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8"
              >
                {highlights.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.8, ease: "easeOut" }} // Shorter delay, easeOut
                    className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg shadow-blue-500/10 hover:bg-white/15 transition-all duration-300 w-full sm:w-auto"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm md:text-base font-medium text-white whitespace-normal text-center">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Fixed CTA Buttons - Responsive min-width, smoother hovers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
              >
                {/* Primary Button */}
                <Link to="/contact" className="block w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} // Higher damping for smoother
                    className="relative"
                  >
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-2xl shadow-2xl shadow-blue-500/30 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 w-full sm:w-auto min-w-[140px]"
                    >
                      <span className="flex items-center gap-1 md:gap-2">
                        Request Samples
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>

                {/* Secondary Button */}
                <Link to="/seafood" className="block w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-2xl backdrop-blur-lg shadow-2xl shadow-white/10 transition-all duration-300 w-full sm:w-auto min-w-[120px]"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Smaller on mobile, smoother bounce */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-6 md:w-5 md:h-8 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section with Glass Background - Adjusted margin, smoother parallax */}
        <motion.section
          style={{
            y: featuresY,
            opacity: featuresOpacity
          }}
          className="relative py-8 md:py-12 md:py-20 -mt-4 md:-mt-8 will-change-transform"
        >
          <div className="container-custom px-2 sm:px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl shadow-blue-500/10 p-4 md:p-6 md:p-12">
              <StatsSection />
            </div>
          </div>
        </motion.section>

        {/* About Section with Enhanced Background Effects - Adjusted for mobile */}
        <section ref={featuresRef} className="relative py-12 md:py-16 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 overflow-hidden">
          {/* Background Parallax Elements - Disabled on mobile, added will-change */}
          {!isMobile && (
            <motion.div
              style={{ y: featuresY }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute top-10 left-4 md:left-10 w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-blue-200/30 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
              <div className="absolute top-40 right-4 md:right-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-cyan-200/20 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
              <div className="absolute bottom-20 left-1/4 w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 bg-purple-200/25 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
            </motion.div>
          )}

          <div className="container-custom relative z-10 px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center mb-8 md:mb-12 lg:mb-20"
            >
              {/* Glass Title Container - Responsive padding */}
              <div className="bg-white/60 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/40 shadow-xl shadow-blue-500/5 mb-4 md:mb-6 lg:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-blue-800 via-cyan-700 to-teal-800 bg-clip-text text-transparent">
                  About Shrimpact
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
                  Shrimpact thrives on strategic partnerships driving innovation, sustainability, and quality in shrimp farming. 
                  Rooted in NaCSA (MPEDA), we collaborate with Indian and global entities in tech, markets, finance, and government 
                  to empower small farmers, deliver safe seafood, and support women-led enterprises.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  <AnimatedCard 
                    delay={index * 0.2} 
                    className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-3xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden transition-all duration-300"
                  >
                    {/* Glass Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon with Glass Effect - Responsive size, smoother rotate */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 1, type: "spring", stiffness: 200, damping: 15 }}
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 mb-3 md:mb-4 lg:mb-6 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg flex items-center justify-center relative z-10"
                    >
                      <feature.icon className={`h-5 w-5 md:h-6 md:w-6 lg:h-10 lg:w-10 ${feature.color} drop-shadow-lg`} />
                    </motion.div>
                    
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 lg:mb-4 relative z-10 text-gray-900">{feature.title}</h3>
                    <p className="text-xs md:text-sm lg:text-base text-gray-700 relative z-10 leading-relaxed">{feature.description}</p>
                    
                    {/* Animated Glass Corner - Smaller on mobile */}
                    <motion.div
                      className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-200/40 to-transparent rounded-bl-xl md:rounded-bl-3xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 100, damping: 12 }}
                    />
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner Section with Advanced Background Effects - Adjusted */}
        <section ref={partnersRef} className="relative py-12 md:py-16 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
          {/* Animated Background Elements - Responsive sizes, disabled on mobile, will-change */}
          {!isMobile && (
            <motion.div
              style={{ 
                y: partnersY,
                scale: partnersScale
              }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute top-0 left-4 md:left-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
              <div className="absolute top-1/2 right-4 md:right-0 w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 bg-cyan-500/15 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-xl md:blur-2xl lg:blur-3xl" />
            </motion.div>
          )}

          <div className="container-custom relative z-10 px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center mb-8 md:mb-12 lg:mb-20"
            >
              {/* Glass Title Container */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl shadow-blue-500/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-3 md:mb-4 lg:mb-6 text-white">
                  Why Partner with Shrimpact?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-normal">
                  Our motto is <span className="font-semibold text-cyan-300">"Impact not Profit"</span> — we focus on verifiable outcomes and creating lasting value for all stakeholders.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  <GlassCard 
                    delay={index * 0.15} 
                    className="p-4 md:p-6 lg:p-8 text-center group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl shadow-2xl shadow-blue-500/10 hover:shadow-3xl hover:shadow-cyan-500/20 relative overflow-hidden transition-all duration-300"
                  >
                    {/* Floating Icon with Glass Effect - Responsive, smoother spring */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 250,
                        damping: 18 // Higher damping
                      }}
                      className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-auto mb-4 md:mb-6 lg:mb-8 rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex items-center justify-center relative hover:scale-105 transition-transform duration-300"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-400/30 to-cyan-400/30"
                        animate={{
                          scale: [1, 1.05, 1], // Subtler scale
                          opacity: [0.6, 0.8, 0.6],
                        }}
                        transition={{
                          duration: 3, // Slower pulse
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <benefit.icon className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-white relative z-10 drop-shadow-lg" />
                    </motion.div>
                    
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 lg:mb-6 group-hover:text-cyan-300 transition-colors duration-500 text-white"> {/* Longer duration for smooth color change */}
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Hover Glass Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-3xl" />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Ultimate Background Effects - Adjusted, smoother */}
        <ParallaxSection speed={0.15}> {/* Even lower speed */}
          <section ref={ctaRef} className="relative py-12 md:py-16 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden">
            {/* Multi-layer Parallax Background - Simplified, will-change */}
            <motion.div
              style={{ 
                y: ctaY,
                rotate: ctaRotate
              }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-cyan-600/90" />
              
              {/* Animated Wave Pattern - Disabled on mobile, slower */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 30, // Much slower
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 2%, transparent 8%),
                      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 1%, transparent 6%)
                    `,
                    backgroundSize: "400px 400px",
                  }}
                />
              )}
            </motion.div>

            <FloatingParticles count={isMobile ? 4 : 12} />
            
            <div className="container-custom relative z-10 px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
              >
                {/* Ultimate Glass Container - Responsive padding */}
                <div className="bg-white/15 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 border border-white/30 shadow-3xl shadow-blue-500/30 mb-6 md:mb-8 lg:mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 md:mb-6 lg:mb-8 text-white">
                    Ready to Partner with Us?
                  </h2>
                  <p className="text-base md:text-lg lg:text-2xl mb-6 md:mb-8 lg:mb-12 text-white/90 leading-relaxed font-normal">
                    Join our ecosystem of farmers, entrepreneurs, and partners building a sustainable seafood future.
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center"
                  >
                    {/* Primary CTA Button */}
                    <Link to="/join" className="block w-full sm:w-auto">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="relative"
                      >
                        <Button 
                          size="lg" 
                          className="bg-white text-blue-900 hover:bg-gray-100 px-6 md:px-8 lg:px-12 py-5 md:py-6 lg:py-7 text-sm md:text-base lg:text-lg font-semibold rounded-2xl shadow-2xl shadow-white/20 border-2 border-white hover:border-gray-200 transition-all duration-300 w-full sm:w-auto min-w-[160px] md:min-w-[180px]"
                        >
                          <span className="flex items-center gap-1 md:gap-2 lg:gap-4">
                            Explore Opportunities
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </motion.div>
                    </Link>

                    {/* Secondary CTA Button */}
                    <Link to="/contact" className="block w-full sm:w-auto">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="relative"
                      >
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 px-6 md:px-8 lg:px-12 py-5 md:py-6 lg:py-7 text-sm md:text-base lg:text-lg font-semibold rounded-2xl backdrop-blur-lg shadow-2xl shadow-white/10 transition-all duration-300 w-full sm:w-auto min-w-[120px] md:min-w-[140px]"
                        >
                          Contact Us
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                {/* Glass Stats Footer - Responsive grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-8"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer text-center"
                    >
                      <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-1">{stat.number}</div>
                      <div className="text-white/70 text-xs md:text-sm lg:text-base font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </div>
    </PageTransition>
  );
};

export default Home;