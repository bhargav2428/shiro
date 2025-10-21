import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Users, TrendingUp, Sparkles, Globe, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: Shield,
      title: "100% Antibiotic-Free",
      description: "Pre-harvest testing ensures zero antibiotics, guaranteed quality, and zero rejection lots for global markets.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "95% Pathogen Reduction",
      description: "Advanced technology and strict protocols deliver superior quality with minimal disease risk.",
      color: "secondary"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Nanobubble tech, BLDC motors, and DO sensors reduce energy use by 15-30% while improving yields.",
      color: "accent"
    }
  ];

  const partnerBenefits = [
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
  ];

  return (
    <PageTransition>
      <div className="min-h-screen overflow-hidden">
        <AnimatedShrimpCursor />
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Parallax Background with Enhanced Effects */}
          <motion.div 
            style={{ y: heroY }}
            className="absolute inset-0 scale-110"
          >
            <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <motion.div 
              className="absolute inset-0 gradient-hero"
              style={{ opacity: heroOpacity }}
            />
            
            {/* Animated Ocean Waves Overlay */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)",
                backgroundSize: "200% 200%",
              }}
            />
          </motion.div>

          <FloatingParticles />
          
          <div className="container-custom relative z-10 text-center text-white">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-2 mb-6 rounded-full glass-card"
              >
                <motion.span 
                  className="text-white font-semibold flex items-center gap-2"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 10px rgba(255,255,255,0.5)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 animate-pulse-glow" />
                  Impact not Profit
                </motion.span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 50
                }}
                className="mb-6 text-white drop-shadow-2xl"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.5)"
                }}
              >
                Access India's Trusted Source for Best Quality, Safe, Traceable, Sustainable Shrimp
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
              >
                {["100% Antibiotic-Free", "95% Pathogen Reduction", "Pond-to-Plate Traceability"].map((text, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.2 }}
                    className="inline-block mx-2"
                  >
                    {text}
                    {i < 2 && " | "}
                  </motion.span>
                ))}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.08, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button size="lg" className="btn-hero shine-effect group relative overflow-hidden">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                        animate={{
                          x: ["-200%", "200%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <span className="relative z-10">Request Samples</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/seafood">
                  <motion.div 
                    whileHover={{ scale: 1.08, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button size="lg" variant="outline" className="glass-card text-white border-white/30 hover:bg-white/20 relative overflow-hidden group">
                      <motion.span
                        className="absolute inset-0 bg-white/10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">Learn More</span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <StatsSection />

        {/* About Section with Parallax */}
        <ParallaxSection speed={0.3}>
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <h2 className="mb-6">About Shrimpact</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Shrimpact thrives on strategic partnerships driving innovation, sustainability, and quality in shrimp farming. 
                  Rooted in NaCSA (MPEDA), we collaborate with Indian and global entities in tech, markets, finance, and government 
                  to empower small farmers, deliver safe seafood, and support women-led enterprises.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <AnimatedCard key={index} delay={index * 0.2} hover3d className="p-8 rounded-xl card-gradient group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className={`w-16 h-16 mb-6 rounded-2xl bg-${feature.color}/10 flex items-center justify-center relative z-10`}
                    >
                      <feature.icon className={`h-8 w-8 text-${feature.color} drop-shadow-lg`} />
                    </motion.div>
                    <h3 className="text-xl mb-4 relative z-10">{feature.title}</h3>
                    <p className="text-muted-foreground relative z-10">{feature.description}</p>
                    
                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    />
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Why Partner Section */}
        <section className="section-padding bg-muted/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="mb-6">Why Partner with Shrimpact?</h2>
              <p className="text-xl text-muted-foreground">
                Our motto is "Impact" not "Profit" — we focus on verifiable outcomes and creating lasting value for all stakeholders.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <GlassCard key={index} delay={index * 0.15} className="p-8 text-center group">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <benefit.icon className="h-10 w-10 text-primary relative z-10" />
                  </motion.div>
                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Parallax */}
        <ParallaxSection speed={0.4}>
          <section className="section-padding gradient-ocean text-white relative overflow-hidden">
            <FloatingParticles />

            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="mb-6 text-white">Ready to Partner with Us?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Join our ecosystem of farmers, entrepreneurs, and partners building a sustainable seafood future.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link to="/join">
                    <motion.div 
                      whileHover={{ scale: 1.08, y: -5 }} 
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button size="lg" className="btn-hero relative overflow-hidden group">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-200%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10">Explore Opportunities</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/contact">
                    <motion.div 
                      whileHover={{ scale: 1.08, y: -5 }} 
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button size="lg" variant="outline" className="glass-card text-white border-white/30 hover:bg-white/20">
                        Contact Us
                      </Button>
                    </motion.div>
                  </Link>
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
