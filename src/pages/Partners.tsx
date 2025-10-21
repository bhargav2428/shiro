import { Building2, Handshake, Globe, Zap, ArrowRight, Users, Target, Star, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

// Web images for partnership themes
const WEB_IMAGES = {
  hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  technology: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  market: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  finance: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
  community: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  partnership: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

const Partners = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  
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
        staggerChildren: 0.2,
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

  const partnerCategories = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Technology Partners",
      description: "Innovators driving sustainable aquaculture with cutting-edge solutions",
      partners: [
        "Nanobubble Technology Providers",
        "BLDC Motor Manufacturers",
        "DO Sensor & Automation Systems",
        "Solar Energy Solutions",
        "Digital Traceability Platforms",
      ],
      bg: "bg-yellow-50",
      gradient: "from-yellow-500 to-amber-500",
      image: WEB_IMAGES.technology,
      stats: "15+ Tech Partners"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Market Partners",
      description: "Connecting Indian seafood to international markets with premium quality",
      partners: [
        "International Seafood Buyers",
        "Export Agencies & Distributors",
        "Quality Certification Bodies",
        "Logistics & Cold Chain Partners",
        "E-commerce Platforms",
      ],
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
      image: WEB_IMAGES.market,
      stats: "20+ Countries"
    },
    {
      icon: <Building2 className="h-8 w-8 text-green-600" />,
      title: "Financial & Institutional",
      description: "Supporting sustainable growth through strategic funding and partnerships",
      partners: [
        "Banking & Financial Institutions",
        "Insurance Providers",
        "Government Bodies (MPEDA, NaCSA)",
        "NABARD & PMMSY Programs",
        "Impact Investors & VCs",
      ],
      bg: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
      image: WEB_IMAGES.finance,
      stats: "₹50Cr+ Funding"
    },
    {
      icon: <Handshake className="h-8 w-8 text-purple-600" />,
      title: "Community Partners",
      description: "Building grassroots impact through collaborative community engagement",
      partners: [
        "Self-Help Groups (SHGs)",
        "Farmer Cooperatives & Clusters",
        "Training & Skill Development Orgs",
        "Research & Academic Institutions",
        "NGOs & Social Enterprises",
      ],
      bg: "bg-purple-50",
      gradient: "from-purple-500 to-pink-500",
      image: WEB_IMAGES.community,
      stats: "1000+ Farmers"
    },
  ];

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
              alt="Strategic business partnerships"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/70 to-cyan-600/80" />
          </div>

          {/* Animated Background Layers */}
          <motion.div 
            style={{ y: parallaxY, scale: scaleProgress, opacity }}
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

          <FloatingParticles count={25} />
          
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
                    Strategic
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Partnerships
                  </span>
                </motion.h1>
                
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Users className="h-6 w-6 text-yellow-300" />
                  </motion.div>
                  <span className="text-lg font-semibold text-white">
                    Building a Sustainable Seafood Ecosystem Through Collaboration
                  </span>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 mb-12 leading-relaxed font-light"
              >
                Shrimpact thrives on strategic partnerships that drive innovation, sustainability, and quality in shrimp farming. 
                We collaborate with Indian and global entities across technology, markets, finance, and government to create lasting impact.
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
                        Join Our Network
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

                <Link to="/contact">
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
                      Contact Partnership Team
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

        {/* Partner Categories Section */}
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
                <Handshake className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Our Partner Ecosystem
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Building comprehensive partnerships across technology, markets, finance, and communities to drive sustainable impact in the seafood industry.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {partnerCategories.map((category, index) => (
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
                  className={`p-8 rounded-3xl ${category.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
                  >
                    {category.stats}
                  </motion.div>

                  {/* Icon with Animation */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.8 }
                    }}
                    className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 relative z-10"
                  >
                    {category.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 relative z-10">{category.title}</h3>
                  <p className="text-gray-600 mb-6 relative z-10">{category.description}</p>
                  
                  <ul className="space-y-3 relative z-10">
                    {category.partners.map((partner, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 + index * 0.2 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0"
                        />
                        <span className="text-sm leading-relaxed">{partner}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.gradient}`}
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

        {/* Partnership Benefits Section */}
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
                <TrendingUp className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Creating mutual value and driving sustainable growth through strategic collaborations
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
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "Global Market Access",
                  description: "Connect with verified international buyers and expand into premium markets with our established distribution network and quality certifications.",
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-50",
                  stats: "20+ Countries"
                },
                {
                  icon: <Zap className="h-10 w-10 text-yellow-600" />,
                  title: "Innovation Platform",
                  description: "Test, validate, and scale cutting-edge technologies in real-world aquaculture conditions with access to 1000+ farms across India.",
                  gradient: "from-yellow-500 to-amber-500",
                  bg: "bg-yellow-50",
                  stats: "15+ Tech Solutions"
                },
                {
                  icon: <Shield className="h-10 w-10 text-purple-600" />,
                  title: "Social Impact Amplification",
                  description: "Contribute to meaningful change through women empowerment, farmer livelihoods, and sustainable community development initiatives.",
                  gradient: "from-purple-500 to-pink-500",
                  bg: "bg-purple-50",
                  stats: "1000+ Women"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    transition: { duration: 0.4, type: "spring" }
                  }}
                  className={`text-center p-8 rounded-3xl ${benefit.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
                  >
                    {benefit.stats}
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3,
                      transition: { duration: 0.8 }
                    }}
                    className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 relative z-10"
                  >
                    {benefit.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">{benefit.title}</h3>
                  <p className="text-gray-600 relative z-10 leading-relaxed">{benefit.description}</p>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-current rounded-full opacity-20"
                        animate={{
                          y: [0, -20, 0],
                          x: [0, Math.sin(i) * 15, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${10 + i * 15}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partnership Approach Section */}
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
                Our Partnership Approach
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Building lasting relationships based on shared values, mutual benefit, and measurable impact
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto space-y-8"
            >
              {[
                {
                  icon: <Target className="h-8 w-8 text-blue-600" />,
                  title: "Shared Vision & Values",
                  description: "We partner with organizations that share our commitment to sustainability, quality, and social impact. Our motto 'Impact not Profit' guides every collaboration and decision.",
                  gradient: "from-blue-50 to-cyan-50"
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                  title: "Mutual Benefit & Growth",
                  description: "Partnerships are designed for win-win outcomes. Whether it's technology validation, market access, or financial support, we ensure value creation for all stakeholders involved.",
                  gradient: "from-green-50 to-emerald-50"
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600" />,
                  title: "Transparency & Accountability",
                  description: "We maintain open communication, share real-time data through our traceability systems, and hold ourselves accountable to measurable impact metrics and KPIs.",
                  gradient: "from-purple-50 to-pink-50"
                },
                {
                  icon: <Star className="h-8 w-8 text-yellow-600" />,
                  title: "Long-Term Commitment",
                  description: "We're building lasting relationships, not transactional agreements. Our partnerships are designed to scale and evolve as we grow together toward shared sustainability goals.",
                  gradient: "from-yellow-50 to-amber-50"
                }
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`p-8 rounded-3xl ${approach.gradient} border border-gray-200/50 shadow-lg relative overflow-hidden group`}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                      className="flex-shrink-0"
                    >
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
                        {approach.icon}
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{approach.description}</p>
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
        </section>

        {/* Enhanced CTA Section */}
        <section 
          ref={el => sectionRefs.current[4] = el}
          className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={WEB_IMAGES.partnership}
              alt="Business partnership collaboration"
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
                Ready to Partner with Us?
              </motion.h2>
              
              <motion.p
                className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Join our ecosystem of innovators, market leaders, and impact-makers transforming the seafood industry through sustainable partnerships.
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
                    transition={{ type: "spring", stiffness: 400 }}
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
                      <span className="relative z-10">Explore Partnership Opportunities</span>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/contact">
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
                      Schedule a Meeting
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Partnership Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
              >
                {[
                  { number: "50+", label: "Partners" },
                  { number: "20+", label: "Countries" },
                  { number: "1000+", label: "Farmers" },
                  { number: "₹50Cr+", label: "Investment" }
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

export default Partners;