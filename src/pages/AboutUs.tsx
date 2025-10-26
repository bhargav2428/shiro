import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Users, Target, Heart, Shield, Leaf, TrendingUp, 
  Globe, Award, BookOpen, Lightbulb, Network, 
  GraduationCap, Sparkles, ArrowRight
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedCard from "@/components/AnimatedCard";
import aboutImage from "@/assets/about1.jpg";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fixed useTransform calls - removed the easing function parameter
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const aboutY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const visionY = useTransform(scrollYProgress, [0.3, 0.8], [0, -30]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
        <FloatingParticles count={isMobile ? 8 : 20} />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <motion.div 
            style={{ y: heroY }}
            className="absolute inset-0 will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10" />
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl" />
          </motion.div>

          <div className="container-custom relative z-10 text-center px-4 sm:px-6">
            <motion.div 
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              
              
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
                className="bg-white/60 backdrop-blur-lg rounded-3xl md:rounded-4xl p-8 md:p-12 lg:p-16 border border-white/40 shadow-2xl shadow-blue-500/10 mb-8 relative overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
                  <span className="text-gray-800 drop-shadow-sm font-normal">About</span>
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm font-medium">
                    Shrimpact
                  </span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-gray-600 leading-relaxed font-light max-w-4xl mx-auto"
                >
                  Making shrimp farming smarter, more sustainable, and farmer-friendly
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <motion.div
            style={{ y: aboutY }}
            className="absolute inset-0 will-change-transform"
          >
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
          </motion.div>

          <div className="container-custom relative z-10 px-4 sm:px-6">
            <motion.div
              {...fadeInUp}
              className="max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8"
                  >
                    <Users className="w-4 h-4" />
                    Who We Are
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
                    Three Decades of
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-medium"> Coastal Community Experience</span>
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                    Shrimpact is an aquaculture enterprise dedicated to making shrimp farming smarter, more sustainable, and farmer-friendly. Founded by Umesh N. R., former CEO of NaCSA (MPEDA), Shrimpact builds on three decades of hands-on experience with India's coastal farming communities.
                  </p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
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
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision, Mission & Values Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
          <motion.div
            style={{ y: visionY }}
            className="absolute inset-0 will-change-transform"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
          </motion.div>

          <div className="container-custom relative z-10 px-4 sm:px-6">
            <motion.div
              {...fadeInUp}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
                  Our Guiding
                  <span className="font-medium"> Principles</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-10 text-center border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
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
                    className="relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-lg border border-yellow-300/30 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-yellow-500/30 transition-all duration-300"
                  >
                    <Target className="h-10 w-10 text-yellow-600 drop-shadow-lg" />
                  </motion.div>
                  
                  <h3 className="text-5xl md:text-6xl font-medium mb-8 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    VISION
                  </h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10 space-y-4"
                  >
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      Making India the most
                    </p>
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      trusted global source for
                    </p>
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      Sustainable, Safe and
                    </p>
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      Superior Shrimp.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-10 text-center border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
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
                    className="relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-lg border border-blue-300/30 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <BookOpen className="h-10 w-10 text-blue-600 drop-shadow-lg" />
                  </motion.div>
                  
                  <h3 className="text-5xl md:text-6xl font-medium mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    MISSION
                  </h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-10"
                  >
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      Our mission is to equip Indian shrimp farmers with technology driven solutions
                      that lower production costs and produce top-Quality shrimp, securing India's
                      prominence in the global shrimp market via transparent supply chains and strategic
                      collaborations that uplift farmers, consumers, and stakeholders alike.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Values */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-10 text-center border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
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
                    className="relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-400/20 to-green-400/20 backdrop-blur-lg border border-emerald-300/30 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-emerald-500/30 transition-all duration-300"
                  >
                    <Heart className="h-10 w-10 text-emerald-600 drop-shadow-lg" />
                  </motion.div>
                  
                  <h3 className="text-5xl md:text-6xl font-medium mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    VALUES
                  </h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 space-y-6"
                  >
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      Integrity, Innovation,
                    </p>
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      and Inclusivity are the
                    </p>
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      pillars that guide every
                    </p>
                    <p className="text-2xl font-light text-gray-800 leading-tight">
                      decision we make.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container-custom px-4 sm:px-6">
            <motion.div
              {...fadeInUp}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
                >
                  <Award className="w-4 h-4" />
                  Credentials
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">Track Record</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  {...fadeInUp}
                  className="space-y-8"
                >
                  {[
                    {
                      icon: Users,
                      title: "Farmer Organization",
                      description: "Organized 16,000+ small-scale shrimp farmers across 750+ clusters",
                      color: "blue"
                    },
                    {
                      icon: Network,
                      title: "Strategic Partnerships",
                      description: "Partnerships with IIT Ropar, Monterey Bay Aquarium USA, FUTURE FISH UK",
                      color: "green"
                    },
                    {
                      icon: TrendingUp,
                      title: "Technology Deployment",
                      description: "Deployment of nanobubble aeration, IoT-based sensors, and AI analytics",
                      color: "purple"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-6 group"
                    >
                      <div className={`w-12 h-12 bg-${item.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-lg rounded-3xl p-8 border border-green-200 shadow-2xl shadow-green-500/10 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recognition & Collaborations</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                      Shrimpact's cluster approach is recognized for driving sustainability and farmer participation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 to-green-50/30 overflow-hidden">
          <div className="container-custom px-4 sm:px-6">
            <motion.div
              {...fadeInUp}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6"
                >
                  <Leaf className="w-4 h-4" />
                  Purpose
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Our Approach to <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent font-medium">Sustainability</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                  Shrimpact believes true sustainability comes from balancing farm productivity, environmental responsibility, and social inclusion.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-emerald-200 shadow-2xl shadow-emerald-500/10 mb-16 text-center"
              >
                <p className="text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
                  We combine science and empathy — using advanced technologies while strengthening community ownership. Each farm we support becomes a model of traceable, low-carbon, and antibiotic-responsible aquaculture.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Globe,
                    title: "Healthy Ecosystems",
                    description: "Efficient water, feed, and energy management",
                    color: "blue"
                  },
                  {
                    icon: Shield,
                    title: "Healthy Shrimp",
                    description: "Disease-resistant, antibiotic-free culture",
                    color: "emerald"
                  },
                  {
                    icon: Users,
                    title: "Healthy Communities",
                    description: "Fair income, gender inclusion, and training access",
                    color: "orange"
                  }
                ].map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group text-center"
                  >
                    <AnimatedCard 
                      delay={index * 0.2}
                      className="p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl hover:shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500"
                    >
                      <div className={`w-16 h-16 bg-${pillar.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <pillar.icon className={`w-8 h-8 text-${pillar.color}-600`} />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{pillar.description}</p>
                    </AnimatedCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container-custom px-4 sm:px-6">
            <motion.div
              {...fadeInUp}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
                >
                  <Lightbulb className="w-4 h-4" />
                  Work
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  What <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-medium">We Do</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                  Shrimpact operates at the intersection of technology, community, and sustainability, implementing projects that make small-scale aquaculture resilient and profitable.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {[
                  {
                    icon: Target,
                    title: "Digital Traceability Systems",
                    description: "Pond-to-plate transparency for consumers and buyers",
                    color: "blue"
                  },
                  {
                    icon: TrendingUp,
                    title: "Nanobubble Aeration Projects",
                    description: "Reducing energy use, improving oxygenation",
                    color: "green"
                  },
                  {
                    icon: Globe,
                    title: "IoT-based Farm Monitoring",
                    description: "Real-time water quality and health alerts",
                    color: "purple"
                  },
                  {
                    icon: Network,
                    title: "Cluster Development",
                    description: "Organizing small farmers for collective efficiency",
                    color: "orange"
                  },
                  {
                    icon: GraduationCap,
                    title: "Training & Capacity Building",
                    description: "Farmer skill enhancement on biosecurity and sustainability",
                    color: "cyan"
                  }
                ].map((initiative, index) => (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-${initiative.color}-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <initiative.icon className={`w-6 h-6 text-${initiative.color}-600`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{initiative.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">{initiative.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Impact Snapshot */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-slate-50 to-blue-50/30 backdrop-blur-lg rounded-3xl p-12 border border-blue-200 shadow-2xl shadow-blue-500/10"
              >
                <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Impact Snapshot</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Lower Disease Incidence",
                      color: "red"
                    },
                    {
                      icon: Award,
                      title: "Better Yields & Profitability",
                      color: "green"
                    },
                    {
                      icon: Leaf,
                      title: "Reduced Environmental Footprint",
                      color: "emerald"
                    }
                  ].map((impact, index) => (
                    <motion.div
                      key={impact.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="text-center group"
                    >
                      <div className={`w-20 h-20 bg-${impact.color}-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <impact.icon className={`w-10 h-10 text-${impact.color}-600`} />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">{impact.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;