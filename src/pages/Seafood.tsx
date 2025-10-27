import { CheckCircle, FileText, QrCode, Droplets, Thermometer, ShieldCheck, Microscope, Zap, Leaf, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

// Import images from assets
import awqurim from "@/assets/Awuarium.jpg";
import podplate from "@/assets/prawnss.jpg";
import coldchain from "@/assets/coldchain.jpg";
import ropar from "@/assets/ropar.jpg";
import  promise from "@/assets/promise.jpg";
import recognation from "@/assets/recogniation.jpg";
import pondhealt from "@/assets/3.jpg";
import seabase from "@/assets/4.jpg";

import shrmp from "@/assets/2.jpg";

const IMAGES = {
  awqurim: awqurim,
  podplate: podplate,
  coldchain: coldchain,
  ropar: ropar,
  promise: promise,
  recognation: recognation,
  pondhealth: pondhealt,
  shrmp : shrmp,
  seabase : seabase
};

const Seafood = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);

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
      stats: "95% Success Rate",
      image: IMAGES.recognation
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
      stats: "100% Clean",
      image: IMAGES.pondhealth
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
      stats: "Full Traceability",
      image: IMAGES.podplate
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
      stats: "24/7 Monitoring",
      image: IMAGES.coldchain
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
              src={IMAGES.shrmp}  
              alt="Premium quality seafood and shrimp"
              className="w-full h-full object-cover object-center"
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
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight">
                  <span className="text-white drop-shadow-2xl font-normal">Access India's</span>
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl font-medium">
                    Trusted Source
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-white drop-shadow-2xl font-normal">for Premium Shrimp</span>
                </h1>
              </div>
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
                  className={`p-8 rounded-3xl ${promise.bg} border border-gray-200/50 shadow-xl relative overflow-hidden group cursor-pointer min-h-[500px]`}
                >
                  {/* Background Image - Fixed Size */}
                  <div className="absolute inset-0">
                    <img 
                      src={promise.image} 
                      alt={promise.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-white/30" />
                  </div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Content Container with Background */}
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.3 }}
                      className="absolute -top-3 -right-3 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 shadow-lg"
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
                      className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6"
                    >
                      <promise.icon className="h-8 w-8 text-blue-600" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{promise.title}</h3>
                    <p className="text-gray-600 mb-6">{promise.description}</p>
                    
                    <ul className="space-y-3">
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
                  </div>

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

              {/* Image Card - Fixed Size */}
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
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-white h-[500px]"
                >
                  <img 
                    src={IMAGES.shrmp}
                    alt="Quality assurance and food safety standards"
                    className="w-full h-full object-cover object-center"
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

        {/* Products Section - Titles ON TOP of Images */}
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
              className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            >
              {[
                {
                  image: IMAGES.shrmp,
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
                  image: IMAGES.seabase,
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
                 
                  className={`rounded-3xl ${product.bg} border border-gray-200/50 shadow-2xl relative overflow-hidden group cursor-pointer h-full flex flex-col`}
                >
                  {/* Product Image with Title OVERLAY */}
                  <div className="h-[550px] overflow-hidden relative flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700"
                    />
                    {/* Strong Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Product Title Overlay - ON TOP OF IMAGE */}
                    <div className="absolute top-0 left-0 right-0 p-4 
                bg-white/20 backdrop-blur-[4px]  w-25">
  <h3 className="text-4xl font-bold mb-2 italic 
                 drop-shadow-2xl bg-gradient-to-r text-blue-900 
                 bg-clip-text ">
    {product.title}
  </h3>
  <p className="font-semibold text-lg italic drop-shadow-lg text-blue-900">
    {product.species}
  </p>
</div>


                    {/* Floating Quality Badge */}
                    
                  </div>

                  {/* Product Content - BELOW THE IMAGE */}
                  <div className="p-8 flex-grow">
                    <div className="space-y-4">
                      {product.details.map((detail, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + index * 0.2 }}
                          className="flex items-center gap-4 text-gray-700"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3 }}
                            className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"
                          />
                          <span className="text-lg font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="mt-8"
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg">
                        Get Quote
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${product.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Source Premium Seafood?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Connect with us to get access to India's finest shrimp and seabass with complete traceability and quality assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Certifications
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        </section>
      </div>
    </PageTransition>
  );
};

export default Seafood;