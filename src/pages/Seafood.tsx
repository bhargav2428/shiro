import { CheckCircle, FileText, QrCode, Droplets, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import qualityImage from "@/assets/quality-shrimp.jpg";
import techImage from "@/assets/technology.jpg";
import PageTransition from "@/components/PageTransition";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedCard from "@/components/AnimatedCard";
import GlassCard from "@/components/GlassCard";
import FloatingParticles from "@/components/FloatingParticles";

const Seafood = () => {
  const buyerPromises = [
    {
      icon: CheckCircle,
      title: "Pond Health & Water Quality",
      color: "primary",
      items: [
        "DO-first program with sensors & alerts",
        "Nanobubble technology for clean ponds",
        "Lower FCR (≤1.2) & better growth",
        "Reduced carbon footprint"
      ]
    },
    {
      icon: CheckCircle,
      title: "100% Antibiotic-Free",
      color: "secondary",
      items: [
        "Rapid screening 24-48h pre-harvest",
        "Tests for chloramphenicol, nitrofurans & more",
        "Results linked to mobile app",
        "Zero rejection target for exports"
      ]
    },
    {
      icon: QrCode,
      title: "Pond-to-Plate Traceability",
      color: "accent",
      items: [
        "QR code with pond ID & inputs log",
        "Pre-harvest COA & harvest video",
        "Digital chain of custody",
        "Fast recalls if needed"
      ]
    },
    {
      icon: Thermometer,
      title: "Cold Chain Excellence",
      color: "primary",
      items: [
        "Hygienic harvest practices",
        "Temperature-controlled transport",
        "GMP/SSOP/HACCP compliance",
        "Real-time monitoring"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding gradient-ocean text-white relative overflow-hidden">
          <FloatingParticles />
          <div className="container-custom text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-white"
            >
              Safe & Sustainable Seafood
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            >
              Safer, traceable shrimp at lower risk—verified before harvest, protected in cold chain, and delivered to spec.
            </motion.p>
          </div>
        </section>

        {/* Buyer Promise */}
        <ParallaxSection speed={0.2}>
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center mb-12"
              >
                <h2 className="mb-4">Our Buyer Promise</h2>
                <p className="text-xl text-muted-foreground">
                  Zero Rejection Target | Pre-Harvest Testing | Complete Traceability
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {buyerPromises.map((promise, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} hover3d className="p-6 rounded-lg border border-border bg-background">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <promise.icon className={`h-8 w-8 text-${promise.color} mb-4`} />
                    </motion.div>
                    <h3 className="text-lg mb-2">{promise.title}</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {promise.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                        >
                          • {item}
                        </motion.li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Quality & Food Safety */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-6">Quality & Food Safety</h2>
                <div className="space-y-4">
                  {[
                    { title: "Antibiotic-Free Guarantee", desc: "Pre-harvest tests synced to Q app for complete transparency" },
                    { title: "Microbial Testing", desc: "Pre-harvest tests for critical microbes like Salmonella" },
                    { title: "Clean Harvest", desc: "Hygienic harvesting and packing protocols" },
                    { title: "Organoleptic Tests", desc: "Professional quality checks for every container shipment" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img src={qualityImage} alt="Quality Shrimp with QR Code" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <ParallaxSection speed={0.3}>
          <section className="section-padding">
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                Our Products
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <GlassCard delay={0} className="p-8 rounded-xl border-2 border-primary/20">
                  <h3 className="text-2xl mb-4">Premium Shrimp</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Species:</strong> Litopenaeus vannamei</p>
                    <p><strong>Size ranges:</strong> 10/20 … 100/120</p>
                    <p><strong>Format:</strong> Frozen</p>
                    <p><strong>Certifications:</strong> 100% Antibiotic-free, Traceable</p>
                  </div>
                </GlassCard>

                <GlassCard delay={0.2} className="p-8 rounded-xl border-2 border-secondary/20">
                  <h3 className="text-2xl mb-4">Premium Seabass</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Species:</strong> Lates Calcarifer</p>
                    <p><strong>Sizes:</strong> 1-2 kg, 2 kg+</p>
                    <p><strong>Format:</strong> Frozen</p>
                    <p><strong>Quality:</strong> Export grade, Traceable</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Sustainability Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
              >
                <img src={techImage} alt="Sustainable Technology" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <h2 className="mb-6">Our Sustainability Commitment</h2>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-primary" />
                      Energy Efficiency
                    </h3>
                    <ul className="space-y-1 text-muted-foreground ml-7">
                      <li>• Nanobubble technology reducing paddle wheel usage by 50%</li>
                      <li>• High-efficiency BLDC motors</li>
                      <li>• DO-based automated aerators</li>
                      <li>• Solar power systems integration</li>
                      <li>• 15-30% energy savings achieved</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="font-semibold mb-2">Water & Materials</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Effluent standards compliance</li>
                      <li>• Plankton & bloom management</li>
                      <li>• Phasing out single-use plastics</li>
                      <li>• Bio-bag transition for seed logistics</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="font-semibold mb-2">Social Responsibility</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Worker safety training programs</li>
                      <li>• Fair labor policies</li>
                      <li>• Community empowerment initiatives</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* For Buyers CTA */}
        <section className="section-padding gradient-ocean text-white relative overflow-hidden">
          <FloatingParticles />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-6 text-white">For Buyers</h2>
              <p className="text-xl mb-8 text-white/90">
                24-hour response to RFQs | 7-day sample dispatch
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: FileText, label: "Download Specs" },
                  { icon: QrCode, label: "Request Samples" },
                  { icon: CheckCircle, label: "Book Plant Tour" }
                ].map((item, idx) => (
                  <GlassCard key={idx} delay={idx * 0.1} className="p-6">
                    <item.icon className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-semibold">{item.label}</p>
                  </GlassCard>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="btn-hero">
                      Request Samples / RFQ
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="glass-card text-white border-white/30 hover:bg-white/20">
                      Contact Sales Team
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Seafood;
