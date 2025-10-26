import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Eye, Leaf, Zap, Users, CheckCircle, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import traceabilityImage from "@/assets/traceability-flow.jpg";

const Tech = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const traceabilityRef = useRef<HTMLElement>(null);
  const safeRef = useRef<HTMLElement>(null);
  const sustainableRef = useRef<HTMLElement>(null);

  const isTraceabilityInView = useInView(traceabilityRef, { once: true, margin: "-50px" });
  const isSafeInView = useInView(safeRef, { once: true, margin: "-50px" });
  const isSustainableInView = useInView(sustainableRef, { once: true, margin: "-50px" });

  const traceabilityFeatures = [
    "Digital traceability system recording every production stage",
    "Mobile apps and QR codes for batch tracking",
    "Exact farm, farmer, and production history tracking",
    "Full supply-chain transparency",
    "Enhanced buyer and consumer confidence"
  ];

  const safetyFeatures = [
    "Real-time water quality monitoring",
    "IoT-based sensors and farm-level data logging",
    "Healthy pond environment maintenance",
    "Regular health monitoring and biosecurity protocols",
    "Rapid residue test kits access",
    "Domestic and international food safety standards compliance"
  ];

  const sustainabilityFeatures = [
    "Energy-efficient aerators reducing power use and emissions",
    "Better feed management lowering carbon footprint",
    "Small-scale farmer empowerment",
    "Women entrepreneur support",
    "Collective farming and training programs",
    "Fair market access initiatives"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Technology</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              >
                Connecting technology, transparency, and community to make India's shrimp 
                <span className="font-semibold text-blue-600"> traceable to its source</span>, 
                <span className="font-semibold text-green-600"> safe to eat</span>, and 
                <span className="font-semibold text-cyan-600"> sustainable for the planet</span>.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Traceable Section */}
        <section ref={traceabilityRef} className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTraceabilityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isTraceabilityInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Traceable – Pond to Plate Transparency
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTraceabilityInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                >
                  Shrimpact builds a digital traceability system that records every stage of shrimp production — 
                  from seed stocking to harvest and processing. Using mobile apps and QR codes, each batch of 
                  shrimp can be traced back to the exact farm, farmer, and production history. This ensures full 
                  supply-chain transparency and builds buyer and consumer confidence in Indian shrimp.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTraceabilityInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-4"
                >
                  {traceabilityFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isTraceabilityInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isTraceabilityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 shadow-2xl">
                  <div 
                    className="cursor-pointer group"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <img
                      src={traceabilityImage}
                      alt="Pond-to-Plate Traceability: Indian Farm-Raised Shrimp Flow Diagram"
                      className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-lg">
                        <p className="text-sm font-medium text-gray-800">Click to enlarge</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 font-medium">
                      Complete traceability from hatchery to consumer with 6-step verification process
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Click image to view larger version
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Safe Section */}
        <section ref={safeRef} className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSafeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSafeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-8 justify-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                  Safe – Antibiotic-Responsible & Verified
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isSafeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-700 mb-8 leading-relaxed text-center"
              >
                Through real-time water quality monitoring, IoT-based sensors, and farm-level data logging, 
                Shrimpact helps farmers maintain healthy pond environments and reduce the need for antibiotics. 
                Regular health monitoring, biosecurity protocols, and access to rapid residue test kits ensure 
                shrimp that meet domestic and international food safety standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSafeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {safetyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSafeInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Sustainable Section */}
        <section ref={sustainableRef} className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSustainableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSustainableInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-8 justify-center"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                  Sustainable – Climate-Smart and Inclusive Farming
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isSustainableInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-700 mb-8 leading-relaxed text-center"
              >
                Shrimpact promotes eco-efficient and socially responsible aquaculture by deploying innovative 
                technologies and empowering farming communities for a sustainable future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSustainableInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sustainabilityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isSustainableInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {index < 2 ? <Zap className="w-4 h-4 text-cyan-600" /> : <Users className="w-4 h-4 text-cyan-600" />}
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Technology Meets Responsibility
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                <span className="font-semibold text-blue-200">Shrimpact connects technology, transparency, and community</span> 
                {" "}to make India's shrimp{" "}
                <span className="font-semibold text-cyan-200">traceable to its source</span>, 
                <span className="font-semibold text-green-200"> safe to eat</span>, and 
                <span className="font-semibold text-yellow-200"> sustainable for the planet</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Modal */}
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={traceabilityImage}
                alt="Pond-to-Plate Traceability: Indian Farm-Raised Shrimp Flow Diagram - Enlarged View"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Pond-to-Plate Traceability Flow
                </h3>
                <p className="text-sm text-gray-600">
                  Complete 6-step verification process from hatchery to consumer
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default Tech;
