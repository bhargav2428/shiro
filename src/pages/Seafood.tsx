import { CheckCircle, FileText, QrCode, Droplets, Thermometer, ShieldCheck, Microscope, Zap, Leaf, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

// Web images for seafood and quality themes
const WEB_IMAGES = {
  hero: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  quality: "https://images.unsplash.com/photo-1507991426709-5bbee2c6a189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  sustainability: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  technology: "https://images.unsplash.com/photo-1723134085909-19da487ac9bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  shrimp: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  seabass: "https://images.unsplash.com/photo-1576330383200-2bf325cfec52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};
const Seafood = () => {
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

  const buyerPromises = [
    {
      icon: CheckCircle,
      title: "Pond Health & Water Quality",
      description: "Advanced monitoring and technology for optimal shrimp health",
      items: [
        "DO-first program with sensors & real-time alerts",
        "Nanobubble technology for cleaner ponds",
        "Lower FCR (≤1.2) & better growth rates",
        "Reduced carbon footprint operations"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      stats: "95% Success Rate"
    },
    {
      icon: ShieldCheck,
      title: "100% Antibiotic-Free Guarantee",
      description: "Comprehensive testing and verification protocols",
      items: [
        "Rapid screening 24-48h pre-harvest",
        "Tests for chloramphenicol, nitrofurans & more",
        "Results linked to mobile app instantly",
        "Zero rejection target for exports"
      ],
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      stats: "100% Clean"
    },
    {
      icon: QrCode,
      title: "Pond-to-Plate Traceability",
      description: "Complete transparency from farm to table",
      items: [
        "QR code with pond ID & inputs log",
        "Pre-harvest COA & harvest video documentation",
        "Digital chain of custody tracking",
        "Fast recalls if needed"
      ],
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      stats: "Full Traceability"
    },
    {
      icon: Thermometer,
      title: "Cold Chain Excellence",
      description: "Maintaining quality through temperature control",
      items: [
        "Hygienic harvest practices & protocols",
        "Temperature-controlled transport systems",
        "GMP/SSOP/HACCP compliance certified",
        "Real-time temperature monitoring"
      ],
      gradient: "from-orange-500 to-red-500",
      bg: "bg-orange-50",
      stats: "24/7 Monitoring"
    }
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
              alt="Premium quality seafood and shrimp"
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
                    Safe & Sustainable
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Seafood
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
                    <ShieldCheck className="h-6 w-6 text-yellow-300" />
                  </motion.div>
                  <span className="text-lg font-semibold text-white">
                    Verified Before Harvest | Protected in Cold Chain | Delivered to Spec
                  </span>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 mb-12 leading-relaxed font-light"
              >
                Safer, traceable shrimp at lower risk—verified before harvest, protected in cold chain, 
                and delivered to your specifications with complete transparency and quality assurance.
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/samples">
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
                        Request Samples
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

                <Link to="/quality">
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
                      View Quality Standards
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

        {/* Buyer Promise Section */}
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
                Our Buyer Promise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Zero Rejection Target | Pre-Harvest Testing | Complete Traceability | Cold Chain Excellence
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {buyerPromises.map((promise, index) => (
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
                  className={`p-8 rounded-3xl ${promise.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={WEB_IMAGES.quality} 
                      alt={promise.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
                  >
                    {promise.stats}
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
                    <promise.icon className="h-8 w-8 text-blue-600" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 relative z-10">{promise.title}</h3>
                  <p className="text-gray-600 mb-6 relative z-10">{promise.description}</p>
                  
                  <ul className="space-y-3 relative z-10">
                    {promise.items.map((item, idx) => (
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
                        <span className="text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${promise.gradient}`}
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

        {/* Quality & Food Safety Section */}
        <section 
          ref={el => sectionRefs.current[2] = el}
          className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring" }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6"
                >
                  <ShieldCheck className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">
                  Quality & Food Safety
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Pre-harvest verification and transparent quality assurance protocols ensuring the highest standards of food safety.
                </p>

                <div className="space-y-6">
                  {[
                    { 
                      icon: CheckCircle, 
                      title: "Antibiotic-Free Guarantee", 
                      description: "Pre-harvest tests synced to mobile app for complete transparency and real-time verification." 
                    },
                    { 
                      icon: Microscope, 
                      title: "Microbial Testing", 
                      description: "Comprehensive pre-harvest tests for critical microbes including Salmonella and Vibrio species." 
                    },
                    { 
                      icon: Zap, 
                      title: "Clean Harvest Protocols", 
                      description: "Hygienic harvesting and packing protocols following international food safety standards." 
                    },
                    { 
                      icon: FileText, 
                      title: "Organoleptic Tests", 
                      description: "Professional quality checks and documentation for every container shipment." 
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="flex gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm"
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6 }
                        }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-green-600" />
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
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
                    src={WEB_IMAGES.quality}
                    alt="Quality assurance and food safety standards"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Quality Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { number: "100%", label: "Antibiotic Free" },
                        { number: "24h", label: "Test Results" },
                        { number: "0", label: "Rejections" },
                        { number: "ISO", label: "Certified" }
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
                  <ShieldCheck className="h-4 w-4 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
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
                Our Premium Products
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Export-grade seafood with complete traceability and quality assurance
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  image: WEB_IMAGES.shrimp,
                  title: "Premium Shrimp",
                  species: "Litopenaeus vannamei",
                  details: [
                    "Size ranges: 10/20 … 100/120",
                    "Format: Frozen, IQF",
                    "Certifications: 100% Antibiotic-free",
                    "Traceability: QR code enabled",
                    "Quality: Export grade, Sushi grade available"
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-50"
                },
                {
                  image: WEB_IMAGES.seabass,
                  title: "Premium Seabass", 
                  species: "Lates Calcarifer",
                  details: [
                    "Sizes: 1-2 kg, 2 kg+",
                    "Format: Frozen, Whole & Fillets",
                    "Quality: Export grade",
                    "Traceability: Complete documentation",
                    "Certifications: HACCP, GMP compliant"
                  ],
                  gradient: "from-green-500 to-emerald-500",
                  bg: "bg-green-50"
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -10,
                    transition: { duration: 0.4, type: "spring" }
                  }}
                  className={`rounded-3xl ${product.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Product Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.title}</h3>
                    <p className="text-gray-600 mb-4 font-semibold">{product.species}</p>
                    
                    <div className="space-y-2">
                      {product.details.map((detail, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + index * 0.2 }}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3 }}
                            className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                          />
                          <span className="text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="mt-6"
                    >
                      <Link to="/samples">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group"
                        >
                          <Button 
                            className={`w-full bg-gradient-to-r ${product.gradient} text-white border-0 hover:shadow-lg transition-all duration-300`}
                          >
                            Request Samples
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${product.gradient}`}
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
              src={WEB_IMAGES.technology}
              alt="Seafood technology and innovation"
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
                Ready to Experience Premium Quality?
              </motion.h2>
              
              <motion.p
                className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                24-hour response to RFQs | 7-day sample dispatch | Complete documentation and traceability
              </motion.p>

              {/* Action Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
              >
                {[
                  { icon: FileText, label: "Download Specifications", desc: "Complete product specs" },
                  { icon: QrCode, label: "Request Samples", desc: "7-day dispatch" },
                  { icon: Users, label: "Book Plant Tour", desc: "Virtual or in-person" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group"
                  >
                    <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6 }
                        }}
                        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-white mb-2">{item.label}</h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

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
                      <span className="relative z-10">Request Samples / RFQ</span>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/sales">
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
                      Contact Sales Team
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Quality Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
              >
                {[
                  { number: "100%", label: "Antibiotic Free" },
                  { number: "24h", label: "Response Time" },
                  { number: "7 Days", label: "Sample Dispatch" },
                  { number: "0", label: "Rejection Rate" }
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

export default Seafood;