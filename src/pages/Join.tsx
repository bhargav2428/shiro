import { Users, Briefcase, Store, TrendingUp, CheckCircle, ArrowRight, Target, Shield, Zap, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

// Web images for partnership and collaboration themes
const WEB_IMAGES = {
  hero: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  entrepreneur: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  farmer: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  technology: "https://plus.unsplash.com/premium_photo-1667511056107-41311df83c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  partnership: "https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

const Join = () => {
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

  const opportunities = [
    {
      icon: <Store className="h-8 w-8 text-blue-600" />,
      title: "Women Entrepreneurs",
      description: "Start your own sustainable seafood retail business with comprehensive support",
      benefits: [
        "BLDC freezer & infrastructure support",
        "FSSAI training & certification",
        "Access to premium quality shrimp supply",
        "Working capital assistance",
        "Digital traceability tools",
        "Women of Quality Shrimp brand",
        "Market linkage support",
        "Business insurance facilitation"
      ],
      cta: "Apply as Entrepreneur",
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      stats: "1000+ Women",
      image: WEB_IMAGES.entrepreneur
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Small Farmers",
      description: "Join our sustainable farming network with technology and market access",
      benefits: [
        "Technology support (nanobubble, BLDC)",
        "Pre-harvest testing services",
        "Fair pricing & quality premium",
        "Training on sustainable practices",
        "Access to global markets",
        "Financial linkage support",
        "Risk mitigation strategies",
        "Community knowledge sharing"
      ],
      cta: "Join Farmer Network",
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      stats: "500+ Farms",
      image: WEB_IMAGES.farmer
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Technology Partners",
      description: "Innovate with us in sustainable aquaculture solutions",
      benefits: [
        "Real-world testing platform across 1000+ farms",
        "Access to farming communities and data",
        "Co-development and innovation opportunities",
        "Market validation & scale-up support",
        "Joint sustainability initiatives",
        "Impact measurement and reporting",
        "Technology demonstration sites",
        "Research collaboration opportunities"
      ],
      cta: "Partner with Us",
      gradient: "from-yellow-500 to-amber-500",
      bg: "bg-yellow-50",
      stats: "15+ Technologies",
      image: WEB_IMAGES.technology
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Buyers & Exporters",
      description: "Source premium traceable seafood with complete quality assurance",
      benefits: [
        "100% antibiotic-free guarantee",
        "Complete QR traceability from pond to plate",
        "Pre-harvest quality assurance",
        "Zero rejection target commitment",
        "Flexible supply arrangements",
        "Global compliance (US/EU/JP standards)",
        "Consistent quality and supply",
        "Sustainable sourcing certification"
      ],
      cta: "Become a Buyer",
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      stats: "20+ Countries",
      image: WEB_IMAGES.partnership
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
              alt="Join our sustainable seafood movement"
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
                    Join the
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Shrimpact
                  </span>
                  <br />
                  <span className="text-white">Movement</span>
                </motion.h1>
                
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <HeartHandshake className="h-6 w-6 text-yellow-300" />
                  </motion.div>
                  <span className="text-lg font-semibold text-white">
                    Building a Sustainable, Traceable, and Impact-Driven Seafood Ecosystem
                  </span>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 mb-12 leading-relaxed font-light"
              >
                Whether you're an entrepreneur, farmer, technology partner, or buyer, there's a place for you 
                in our ecosystem. Together, we're transforming the seafood industry through innovation, 
                sustainability, and shared success.
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/contact">
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
                        Get Started Today
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

                <Link to="/opportunities">
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
                      Explore Opportunities
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

        {/* Opportunities Section */}
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
                Opportunities to Collaborate
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join our ecosystem as an entrepreneur, farmer, technology partner, or buyer. 
                Together, we're building a sustainable seafood future.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {opportunities.map((opportunity, index) => (
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
                  className={`p-8 rounded-3xl ${opportunity.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={opportunity.image} 
                      alt={opportunity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
                  >
                    {opportunity.stats}
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
                    {opportunity.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 relative z-10">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6 relative z-10">{opportunity.description}</p>
                  
                  <div className="mb-6 relative z-10">
                    <h4 className="font-semibold mb-4 text-gray-800 text-lg">What You Get:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <motion.div 
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
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${opportunity.gradient} text-white border-0 hover:shadow-lg transition-all duration-300`}
                      >
                        {opportunity.cta}
                      </Button>
                    </motion.div>
                  </Link>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${opportunity.gradient}`}
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

        {/* Why Join Section */}
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
                Why Join Shrimpact?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're building more than a business - we're creating a movement for sustainable change
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
                  icon: <Target className="h-12 w-12 text-blue-600" />,
                  value: "Impact",
                  title: "Not Profit",
                  description: "We prioritize measurable social and environmental impact over short-term profits. Every partnership is designed to create lasting positive change.",
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-50"
                },
                {
                  icon: <HeartHandshake className="h-12 w-12 text-green-600" />,
                  value: "Trust",
                  title: "Through Transparency",
                  description: "Complete traceability, open communication, and shared data build the foundation for lasting, trustworthy partnerships.",
                  gradient: "from-green-500 to-emerald-500",
                  bg: "bg-green-50"
                },
                {
                  icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
                  value: "Growth",
                  title: "Together",
                  description: "We believe in mutual success. Your growth is our growth, and we're committed to helping every partner achieve their goals.",
                  gradient: "from-purple-500 to-pink-500",
                  bg: "bg-purple-50"
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    transition: { duration: 0.4, type: "spring" }
                  }}
                  className={`text-center p-8 rounded-3xl ${reason.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
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
                    {reason.icon}
                  </motion.div>

                  <div className="text-4xl font-black text-gray-800 mb-2 relative z-10">{reason.value}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">{reason.title}</h3>
                  <p className="text-gray-600 relative z-10 leading-relaxed">{reason.description}</p>

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

        {/* Enhanced CTA Section */}
        <section 
          ref={el => sectionRefs.current[3] = el}
          className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={WEB_IMAGES.partnership}
              alt="Join our partnership network"
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
                Join hundreds of farmers, entrepreneurs, and partners building a sustainable seafood future through innovation and collaboration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/contact">
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
                      <span className="relative z-10">Get Started Today</span>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/learn-more">
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
                      Learn More
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
                  { number: "1000+", label: "Women Entrepreneurs" },
                  { number: "500+", label: "Farmers" },
                  { number: "50+", label: "Partners" },
                  { number: "20+", label: "Countries" }
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

export default Join;