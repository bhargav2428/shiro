import { Users, Briefcase, TrendingUp, Award, Heart, Target, Star, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

// Web images for women empowerment in seafood industry
const WEB_IMAGES = {
  hero: "https://plus.unsplash.com/premium_photo-1681505292307-bf740b6d7682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  entrepreneur: "https://plus.unsplash.com/premium_photo-1682432239007-42aa47cf65ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  community: "https://plus.unsplash.com/premium_photo-1681484213764-8a608699ce73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  quality: "https://plus.unsplash.com/premium_photo-1664297975847-1fef18e5b2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  brand: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  seafood: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  womenGroup: "https://plus.unsplash.com/premium_photo-1683120652162-d10f453a4bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  coastal: "https://images.unsplash.com/photo-1760212357806-b37a88f5fbbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

const WomenEmpowerment = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Magnetic effect for buttons
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      } 
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.6)",
        "0 0 20px rgba(59, 130, 246, 0.3)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Enhanced Hero Section */}
        <section 
          ref={el => sectionRefs.current[0] = el}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={WEB_IMAGES.hero}
              alt="Women entrepreneurs in seafood industry"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/70 to-cyan-600/80" />
          </div>

          {/* Animated Background Layers */}
          <motion.div 
            style={{ y: parallaxY, scale: scaleProgress }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent" />
            
            {/* Animated Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <FloatingParticles count={30} />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto"
            >
              {/* Main Title with Staggered Animation */}
              <div className="mb-8">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Empowering
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Women
                  </span>
                  <br />
                  <span className="text-white">in Seafood</span>
                </motion.h1>
                
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="h-6 w-6 text-yellow-300" />
                  </motion.div>
                  <span className="text-lg font-semibold text-white">
                    Transforming coastal communities through entrepreneurship
                  </span>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 mb-12 leading-relaxed font-light"
              >
                Building a network of women-led, hygienic seafood micro-enterprises across 
                <span className="font-semibold text-cyan-200"> Andhra Pradesh, Odisha, and West Bengal</span>
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/join">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                    }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="relative group"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left - rect.width / 2;
                      const y = e.clientY - rect.top - rect.height / 2;
                      mouseX.set(x * 0.2);
                      mouseY.set(y * 0.2);
                    }}
                    onMouseLeave={() => {
                      mouseX.set(0);
                      mouseY.set(0);
                    }}
                    style={{ x: springX, y: springY }}
                  >
                    <motion.div
                      variants={glowVariants}
                      animate="animate"
                      className="absolute inset-0 rounded-2xl"
                    />
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-12 py-6 rounded-2xl relative z-10 group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        Join the Movement
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </Link>

                <Link to="/stories">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/60 font-semibold text-lg px-10 py-6 rounded-2xl backdrop-blur-lg"
                    >
                      View Success Stories
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
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/70 text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1"
              >
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-white rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Vision Section with Enhanced Layout */}
        <section 
          ref={el => sectionRefs.current[1] = el}
          className="py-24 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.1)_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Target className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Creating India's first network of <span className="font-semibold text-blue-600">women-led, hygienic, and traceable</span> seafood micro-enterprises that deliver premium-quality shrimp while empowering coastal communities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={WEB_IMAGES.womenGroup}
                    alt="Women entrepreneurs group in seafood industry"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Floating Stats Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { number: "1K+", label: "Entrepreneurs" },
                        { number: "3", label: "States" },
                        { number: "100%", label: "Women-Led" }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          className="text-center p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                        >
                          <div className="text-white font-bold text-lg">{stat.number}</div>
                          <div className="text-white/80 text-xs">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="h-4 w-4 text-white" />
                </motion.div>
              </motion.div>

              {/* Focus Areas */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-3xl font-bold text-gray-900 mb-8"
                >
                  Our Focus Areas
                </motion.h3>

                {[
                  {
                    icon: <Users className="h-8 w-8 text-blue-600" />,
                    title: "Coastal Community Upliftment",
                    description: "Empowering women across Andhra Pradesh, Odisha, and West Bengal through sustainable seafood enterprises and skill development.",
                    gradient: "from-blue-50 to-cyan-50"
                  },
                  {
                    icon: <Briefcase className="h-8 w-8 text-green-600" />,
                    title: "Micro-Enterprise Development",
                    description: "Establishing hygienic, FSSAI-compliant retail outlets with complete traceability and quality assurance.",
                    gradient: "from-green-50 to-emerald-50"
                  },
                  {
                    icon: <Award className="h-8 w-8 text-purple-600" />,
                    title: "Quality Ambassadors Program",
                    description: "Training rural women as India's Seafood Quality Ambassadors, creating brand value and market differentiation.",
                    gradient: "from-purple-50 to-pink-50"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${item.gradient} border border-gray-200/50 shadow-lg relative overflow-hidden group cursor-pointer`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6 }
                        }}
                        className="flex-shrink-0"
                      >
                        <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
                          {item.icon}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Strategic Support Section */}
        <section 
          ref={el => sectionRefs.current[2] = el}
          className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">
                Strategic Support Framework
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive support system designed for sustainable women entrepreneurship in seafood
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Briefcase className="h-10 w-10 text-blue-600" />,
                  title: "Infrastructure & Quality",
                  items: [
                    "BLDC freezers & clean display counters",
                    "Direct quality shrimp from small farmers",
                    "FSSAI-compliant hygiene training",
                    "Quality assurance protocols"
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-50",
                  stats: "100% Compliance",
                  image: WEB_IMAGES.quality
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-green-600" />,
                  title: "Finance & Access",
                  items: [
                    "Working capital assistance",
                    "Business insurance support",
                    "Bank loan facilitation",
                    "SHG formation support",
                    "Higher subsidy access"
                  ],
                  gradient: "from-green-500 to-emerald-500",
                  bg: "bg-green-50",
                  stats: "₹50K+ Capital",
                  image: WEB_IMAGES.community
                },
                {
                  icon: <Users className="h-10 w-10 text-purple-600" />,
                  title: "Market & Technology",
                  items: [
                    "Digital traceability apps",
                    "Farm-to-plate journey tracking",
                    "Women of Quality Shrimp brand",
                    "Premium pricing opportunities",
                    "Market linkage support"
                  ],
                  gradient: "from-purple-500 to-pink-500",
                  bg: "bg-purple-50",
                  stats: "30% Premium",
                  image: WEB_IMAGES.seafood
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -15,
                    transition: { duration: 0.4, type: "spring" }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`p-8 rounded-3xl ${card.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon with Animation */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.8 }
                    }}
                    className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 relative z-10"
                  >
                    {card.icon}
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
                  >
                    {card.stats}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">{card.title}</h3>
                  
                  <ul className="space-y-3 relative z-10">
                    {card.items.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + index * 0.2 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0"
                        />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Goals with Enhanced Visuals */}
        <section 
          ref={el => sectionRefs.current[3] = el}
          className="py-24 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Impact Goals 2027
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to measurable, sustainable impact across coastal communities
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: <Users className="h-12 w-12 text-blue-600" />,
                  value: "1,000+",
                  title: "Women Entrepreneurs",
                  description: "Empowered with sustainable livelihoods",
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-50",
                  delay: 0,
                  image: WEB_IMAGES.entrepreneur
                },
                {
                  icon: <Award className="h-12 w-12 text-yellow-600" />,
                  value: "100%",
                  title: "Quality Assurance",
                  description: "Safer, traceable shrimp for households",
                  gradient: "from-yellow-500 to-orange-500",
                  bg: "bg-yellow-50",
                  delay: 0.2,
                  image: WEB_IMAGES.quality
                },
                {
                  icon: <Heart className="h-12 w-12 text-pink-600" />,
                  value: "10K+",
                  title: "Lives Impacted",
                  description: "Across families and communities",
                  gradient: "from-pink-500 to-rose-500",
                  bg: "bg-pink-50",
                  delay: 0.4,
                  image: WEB_IMAGES.coastal
                }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    transition: { duration: 0.4, type: "spring" }
                  }}
                  className={`text-center p-8 rounded-3xl ${goal.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5">
                    <img 
                      src={goal.image} 
                      alt={goal.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3,
                      transition: { duration: 0.8 }
                    }}
                    className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 relative z-10"
                  >
                    {goal.icon}
                  </motion.div>

                  {/* Value with Counting Animation */}
                  <motion.div 
                    className="text-5xl font-black text-gray-800 mb-2 relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100,
                      delay: goal.delay 
                    }}
                  >
                    {goal.value}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">{goal.title}</h3>
                  <p className="text-gray-600 relative z-10">{goal.description}</p>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-current rounded-full opacity-20"
                        animate={{
                          y: [0, -30, 0],
                          x: [0, Math.sin(i) * 20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + i * 10}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Women of Quality Shrimp Brand Section */}
        <section 
          ref={el => sectionRefs.current[4] = el}
          className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Women of Quality Shrimp
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A unified brand representing trust, quality, and women empowerment in the seafood industry
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Brand Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={WEB_IMAGES.brand} 
                    alt="Women of Quality Shrimp Brand"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                  
                  {/* Brand Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-6 left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-purple-900">WQS</div>
                    <div className="text-xs text-purple-600 font-semibold">Premium Brand</div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Brand Features */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    title: "Brand Promise",
                    features: [
                      "100% women-owned and operated",
                      "Fully traceable supply chain",
                      "Premium quality standards",
                      "FSSAI certified operations"
                    ],
                    color: "purple"
                  },
                  {
                    title: "Customer Benefits", 
                    features: [
                      "Fresh, safe seafood guaranteed",
                      "Supporting women entrepreneurs",
                      "Transparent pricing",
                      "Local community impact"
                    ],
                    color: "pink"
                  }
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200/50 relative overflow-hidden group"
                  >
                    <h3 className="font-bold text-xl mb-4 text-gray-900 relative z-10">
                      {section.title}
                    </h3>
                    <ul className="space-y-3 relative z-10">
                      {section.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 + index * 0.2 }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 180 }}
                            transition={{ duration: 0.4 }}
                            className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section 
          ref={el => sectionRefs.current[5] = el}
          className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={WEB_IMAGES.coastal}
              alt="Coastal community empowerment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/70 to-cyan-600/80" />
          </div>

          {/* Animated Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)
              `,
              backgroundSize: "50% 50%",
            }}
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Make an Impact?
              </motion.h2>
              
              <motion.p
                className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Join us in creating sustainable livelihoods and transforming coastal communities through women-led seafood enterprises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/partner">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                    }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="relative group"
                  >
                    <motion.div
                      variants={glowVariants}
                      animate="animate"
                      className="absolute inset-0 rounded-2xl"
                    />
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-12 py-6 rounded-2xl relative z-10"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10">Become a Partner</span>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/invest">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60 font-semibold text-lg px-10 py-6 rounded-2xl backdrop-blur-lg"
                    >
                      Invest in Change
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
              >
                {[
                  { number: "15K+", label: "Lives Touched" },
                  { number: "3", label: "States" },
                  { number: "₹2Cr+", label: "Investment" },
                  { number: "100%", label: "Women-Led" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                  >
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default WomenEmpowerment;