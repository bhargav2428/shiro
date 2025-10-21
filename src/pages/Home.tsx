import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Users, TrendingUp, Sparkles, Globe, Award } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if user prefers reduced motion
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const isFeaturesInView = useInView(featuresRef, { 
    once: true, 
    margin: "-50px",
    amount: shouldReduceMotion ? 0.5 : 0.3
  });
  const isPartnersInView = useInView(partnersRef, { 
    once: true,
    amount: shouldReduceMotion ? 0.5 : 0.3
  });
  const isCtaInView = useInView(ctaRef, { 
    once: true,
    amount: shouldReduceMotion ? 0.5 : 0.3
  });

  const { scrollY } = useScroll();
  
  // Smoother parallax transforms with reduced motion support
  const heroY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 50 : 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 400], [1, shouldReduceMotion ? 1.02 : 1.1]);
  
  const featuresY = useTransform(scrollY, [200, 700], [shouldReduceMotion ? 20 : 80, shouldReduceMotion ? -20 : -80]);
  const featuresOpacity = useTransform(scrollY, [300, 600], [0, 1]);
  
  const partnersY = useTransform(scrollY, [800, 1200], [shouldReduceMotion ? 15 : 60, shouldReduceMotion ? -10 : -40]);
  const partnersScale = useTransform(scrollY, [800, 1200], [0.98, 1]);
  
  const ctaY = useTransform(scrollY, [1200, 1600], [shouldReduceMotion ? 15 : 50, shouldReduceMotion ? -15 : -50]);
  const ctaRotate = useTransform(scrollY, [1200, 1600], [-0.5, 0.5]);

  // Animation variants for consistent transitions
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.1 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { 
      scale: shouldReduceMotion ? 1 : 0.8, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

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

  // Smooth scroll function
  const smoothScrollTo = (element: HTMLElement) => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-900">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-center"
        >
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading Shrimpact...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen overflow-hidden">
        <AnimatedShrimpCursor />
        
        {/* Hero Section with Smoother Animations */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
          {/* Optimized Background Layers */}
          <motion.div 
            style={{ 
              y: heroY,
              scale: heroScale 
            }}
            className="absolute inset-0 transform-gpu"
          >
            {/* Base Image Layer */}
            <motion.div
              initial={{ scale: shouldReduceMotion ? 1 : 1.2, opacity: 0 }}
              animate={{ scale: shouldReduceMotion ? 1 : 1.1, opacity: 1 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.8 : 1.5, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="w-full h-full bg-cover bg-center bg-no-repeat transform-gpu"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            
            {/* Gradient Overlay Layer */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-cyan-900/70 transform-gpu"
              style={{ opacity: heroOpacity }}
            />
            
            {/* Subtle Animated Background */}
            {!shouldReduceMotion && (
              <motion.div 
                className="absolute inset-0 transform-gpu"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)
                  `,
                  backgroundSize: "200% 200%",
                }}
              />
            )}
          </motion.div>

          {/* Optimized Floating Particles */}
          {!shouldReduceMotion && <FloatingParticles count={15} /> }
          
          {/* Main Content */}
          <div className="container-custom relative z-10 text-center px-4 transform-gpu">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Glass Tagline Badge */}
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 mb-6 md:mb-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/20 transform-gpu"
              >
                <motion.div
                  animate={{ 
                    rotate: shouldReduceMotion ? 0 : [0, 10, -5, 0],
                    scale: shouldReduceMotion ? 1 : [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0 : 3, 
                    repeat: shouldReduceMotion ? 0 : Infinity 
                  }}
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
                </motion.div>
                <span className="font-semibold text-white text-sm md:text-lg tracking-wide">Impact not Profit</span>
              </motion.div>
              
              {/* Main Heading Container */}
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl shadow-blue-500/10 mb-6 md:mb-10 transform-gpu"
              >
                <motion.h1 
                  variants={staggerContainer}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight"
                >
                  <motion.span variants={fadeInUp} className="text-white drop-shadow-2xl block">Access India's</motion.span>
                  <motion.span 
                    variants={fadeInUp}
                    className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl block"
                  >
                    Trusted Source
                  </motion.span>
                  <motion.span variants={fadeInUp} className="text-white drop-shadow-2xl block">for Premium Shrimp</motion.span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 text-white/90 leading-relaxed font-normal max-w-4xl mx-auto"
                >
                  Safe, Traceable, Sustainable Shrimp with{" "}
                  <span className="font-semibold text-green-300">100% Antibiotic-Free</span> Guarantee
                </motion.p>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12"
              >
                {highlights.map((text, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg shadow-blue-500/10 hover:bg-white/15 transition-all duration-300 transform-gpu"
                    whileHover={{ 
                      scale: shouldReduceMotion ? 1 : 1.05,
                      y: shouldReduceMotion ? 0 : -2
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: shouldReduceMotion ? 1 : [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0 : 2, 
                        repeat: shouldReduceMotion ? 0 : Infinity, 
                        delay: i * 0.5 
                      }}
                      className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                    />
                    <span className="text-sm md:text-lg font-medium text-white whitespace-nowrap">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              >
                {/* Primary Button */}
                <Link to="/contact" className="block">
                  <motion.div 
                    whileHover={{ 
                      scale: shouldReduceMotion ? 1 : 1.02,
                      y: shouldReduceMotion ? 0 : -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }}
                    className="relative transform-gpu"
                  >
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-semibold rounded-2xl shadow-2xl shadow-blue-500/30 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 min-w-[160px] md:min-w-[200px] h-auto transform-gpu"
                    >
                      <span className="flex items-center justify-center gap-2 md:gap-3">
                        Request Samples
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>

                {/* Secondary Button */}
                <Link to="/seafood" className="block">
                  <motion.div 
                    whileHover={{ 
                      scale: shouldReduceMotion ? 1 : 1.02,
                      y: shouldReduceMotion ? 0 : -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }}
                    className="relative transform-gpu"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-semibold rounded-2xl backdrop-blur-lg shadow-2xl shadow-white/10 transition-all duration-300 min-w-[140px] md:min-w-[180px] h-auto transform-gpu"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transform-gpu"
          >
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [0, 8, 0] }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 2, 
                repeat: shouldReduceMotion ? 0 : Infinity 
              }}
              className="w-5 h-8 md:w-6 md:h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1 flex items-start justify-center transform-gpu cursor-pointer"
              onClick={() => featuresRef.current && smoothScrollTo(featuresRef.current)}
            >
              <motion.div
                animate={{ y: shouldReduceMotion ? 0 : [0, 12, 0] }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 2, 
                  repeat: shouldReduceMotion ? 0 : Infinity 
                }}
                className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.section
          style={{
            y: featuresY,
            opacity: featuresOpacity
          }}
          className="relative py-12 md:py-16 -mt-4 md:-mt-8 transform-gpu"
        >
          <div className="container-custom px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl shadow-blue-500/10 p-6 md:p-8 transform-gpu">
              <StatsSection />
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <section ref={featuresRef} className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 overflow-hidden">
          {/* Background Elements */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ y: featuresY }}
              className="absolute inset-0 transform-gpu"
            >
              <div className="absolute top-10 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-200/30 rounded-full blur-2xl md:blur-3xl" />
              <div className="absolute top-40 right-4 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-200/20 rounded-full blur-2xl md:blur-3xl" />
              <div className="absolute bottom-20 left-1/4 w-56 h-56 md:w-80 md:h-80 bg-purple-200/25 rounded-full blur-2xl md:blur-3xl" />
            </motion.div>
          )}

          <div className="container-custom relative z-10 px-4 transform-gpu">
            <motion.div
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/40 shadow-xl shadow-blue-500/5 mx-auto w-full transform-gpu">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-800 via-cyan-700 to-teal-800 bg-clip-text text-transparent">
                  About Shrimpact
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal max-w-3xl mx-auto">
                  Shrimpact thrives on strategic partnerships driving innovation, sustainability, and quality in shrimp farming. 
                  Rooted in NaCSA (MPEDA), we collaborate with Indian and global entities in tech, markets, finance, and government 
                  to empower small farmers, deliver safe seafood, and support women-led enterprises.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center transform-gpu"
                >
                  <AnimatedCard 
                    delay={index * 0.1} 
                    className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden transition-all duration-300 h-full w-full flex flex-col items-center transform-gpu"
                    whileHover={{ 
                      y: shouldReduceMotion ? 0 : -5,
                      scale: shouldReduceMotion ? 1 : 1.02
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        rotate: shouldReduceMotion ? 0 : 360, 
                        scale: shouldReduceMotion ? 1 : 1.1 
                      }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0 : 0.8, 
                        type: "spring" 
                      }}
                      className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg flex items-center justify-center relative z-10 mx-auto transform-gpu"
                    >
                      <feature.icon className={`h-6 w-6 md:h-8 md:w-8 ${feature.color} drop-shadow-lg`} />
                    </motion.div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 relative z-10 text-gray-900 text-center">{feature.title}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 relative z-10 leading-relaxed text-center flex-grow">{feature.description}</p>
                  </AnimatedCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section ref={partnersRef} className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
          {/* Background Elements */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ 
                y: partnersY,
                scale: partnersScale
              }}
              className="absolute inset-0 transform-gpu"
            >
              <div className="absolute top-0 left-4 md:left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-2xl md:blur-3xl" />
              <div className="absolute top-1/2 right-4 md:right-0 w-56 h-56 md:w-80 md:h-80 bg-cyan-500/15 rounded-full blur-2xl md:blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-2xl md:blur-3xl" />
            </motion.div>
          )}

          <div className="container-custom relative z-10 px-4 transform-gpu">
            <motion.div
              initial="hidden"
              animate={isPartnersInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl shadow-blue-500/20 mx-auto w-full transform-gpu">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
                  Why Partner with Shrimpact?
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
                  Our motto is <span className="font-semibold text-cyan-300">"Impact not Profit"</span> — we focus on verifiable outcomes and creating lasting value for all stakeholders.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isPartnersInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
            >
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center transform-gpu"
                >
                  <GlassCard 
                    delay={index * 0.1} 
                    className="p-6 md:p-8 text-center group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl shadow-2xl shadow-blue-500/10 hover:shadow-3xl hover:shadow-cyan-500/20 relative overflow-hidden transition-all duration-300 h-full w-full flex flex-col items-center transform-gpu"
                    whileHover={{ 
                      y: shouldReduceMotion ? 0 : -5,
                      scale: shouldReduceMotion ? 1 : 1.02
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: shouldReduceMotion ? 1 : 0, rotate: shouldReduceMotion ? 0 : -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0.3 : 0.8, 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex items-center justify-center relative transform-gpu"
                      whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    >
                      <benefit.icon className="h-8 w-8 md:h-10 md:w-10 text-white relative z-10 drop-shadow-lg" />
                    </motion.div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 group-hover:text-cyan-300 transition-colors duration-300 text-white text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed text-center flex-grow">
                      {benefit.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection speed={shouldReduceMotion ? 0.1 : 0.3}>
          <section ref={ctaRef} className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden">
            {/* Background */}
            {!shouldReduceMotion && (
              <motion.div
                style={{ 
                  y: ctaY,
                  rotate: ctaRotate
                }}
                className="absolute inset-0 transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-cyan-600/90" />
              </motion.div>
            )}

            {!shouldReduceMotion && <FloatingParticles count={10} /> }
            
            <div className="container-custom relative z-10 px-4 transform-gpu">
              <motion.div
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="max-w-4xl mx-auto text-center"
              >
                {/* CTA Container */}
                <div className="bg-white/15 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/30 shadow-3xl shadow-blue-500/30 mb-8 md:mb-12 mx-auto w-full transform-gpu">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white">
                    Ready to Partner with Us?
                  </h2>
                  <p className="text-lg md:text-2xl mb-8 md:mb-10 text-white/90 leading-relaxed font-normal max-w-2xl mx-auto">
                    Join our ecosystem of farmers, entrepreneurs, and partners building a sustainable seafood future.
                  </p>
                  
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
                  >
                    {/* Primary CTA Button */}
                    <Link to="/join" className="block">
                      <motion.div 
                        whileHover={{ 
                          scale: shouldReduceMotion ? 1 : 1.02,
                          y: shouldReduceMotion ? 0 : -2
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="relative transform-gpu"
                      >
                        <Button 
                          size="lg" 
                          className="bg-white text-blue-900 hover:bg-gray-100 px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-semibold rounded-2xl shadow-2xl shadow-white/20 border-2 border-white hover:border-gray-200 transition-all duration-300 min-w-[180px] md:min-w-[200px] h-auto transform-gpu"
                        >
                          <span className="flex items-center justify-center gap-2 md:gap-3">
                            Explore Opportunities
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </motion.div>
                    </Link>

                    {/* Secondary CTA Button */}
                    <Link to="/contact" className="block">
                      <motion.div 
                        whileHover={{ 
                          scale: shouldReduceMotion ? 1 : 1.02,
                          y: shouldReduceMotion ? 0 : -2
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="relative transform-gpu"
                      >
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-semibold rounded-2xl backdrop-blur-lg shadow-2xl shadow-white/10 transition-all duration-300 min-w-[140px] md:min-w-[160px] h-auto transform-gpu"
                        >
                          Contact Us
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                {/* Stats Footer */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center transform-gpu"
                      whileHover={{ 
                        scale: shouldReduceMotion ? 1 : 1.05,
                        y: shouldReduceMotion ? 0 : -2
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.number}</div>
                      <div className="text-white/70 text-xs md:text-sm font-medium text-center">{stat.label}</div>
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