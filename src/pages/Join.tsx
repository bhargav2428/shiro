import { Users, Briefcase, Store, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

const Join = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const opportunities = [
    {
      icon: <Store className="h-7 w-7 text-blue-500" />,
      title: "Women Entrepreneurs",
      description: "Start your own seafood retail business",
      benefits: [
        "BLDC freezer & infrastructure support",
        "FSSAI training & certification",
        "Access to quality shrimp supply",
        "Working capital assistance",
        "Digital traceability tools",
        "Women of Quality Shrimp brand",
      ],
      cta: "Apply as Entrepreneur",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Users className="h-7 w-7 text-green-500" />,
      title: "Small Farmers",
      description: "Join our sustainable farming network",
      benefits: [
        "Technology support (nanobubble, BLDC)",
        "Pre-harvest testing services",
        "Fair pricing & premium for quality",
        "Training on sustainable practices",
        "Access to global markets",
        "Financial linkage support",
      ],
      cta: "Join Farmer Network",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      icon: <Briefcase className="h-7 w-7 text-yellow-500" />,
      title: "Technology Partners",
      description: "Innovate with us in aquaculture",
      benefits: [
        "Real-world testing platform",
        "Access to 1000+ farms",
        "Co-development opportunities",
        "Market validation & scale-up",
        "Joint sustainability initiatives",
        "Impact measurement support",
      ],
      cta: "Partner with Us",
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-purple-500" />,
      title: "Buyers & Exporters",
      description: "Source premium traceable seafood",
      benefits: [
        "100% antibiotic-free guarantee",
        "Complete QR traceability",
        "Pre-harvest quality assurance",
        "Zero rejection target",
        "Flexible supply arrangements",
        "Global compliance (US/EU/JP)",
      ],
      cta: "Become a Buyer",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-teal-400 text-white py-24">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0">
            <FloatingParticles />
          </motion.div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Join the Shrimpact Movement
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-white/90"
            >
              Be part of a sustainable, traceable, and impact-driven seafood ecosystem
            </motion.p>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                Opportunities to Collaborate
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Whether you're an entrepreneur, farmer, technology partner, or buyer, there's a place for you in our ecosystem.
              </motion.p>
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
                  className={`p-8 rounded-2xl shadow-md ${opportunity.bg} hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <div
                    className={`w-14 h-14 mb-6 rounded-full ${opportunity.iconBg} flex items-center justify-center`}
                  >
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      {opportunity.cta}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Why Join Shrimpact?
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  value: "Impact",
                  title: "Not Profit",
                  desc: "We prioritize measurable social and environmental impact over short-term profits.",
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                },
                {
                  value: "Trust",
                  title: "Through Transparency",
                  desc: "Complete traceability and open communication build lasting partnerships.",
                  color: "text-green-500",
                  bg: "bg-green-50",
                },
                {
                  value: "Growth",
                  title: "Together",
                  desc: "We grow by helping our partners succeed in their goals.",
                  color: "text-purple-500",
                  bg: "bg-purple-50",
                },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`text-center p-6 rounded-2xl shadow-md ${reason.bg}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className={`text-4xl font-bold ${reason.color} mb-4`}>{reason.value}</div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Getting Started
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  title: "For Women Entrepreneurs",
                  requirements: [
                    "Resident of AP, Odisha, or West Bengal",
                    "Interest in seafood retail business",
                    "Willingness to undergo FSSAI training",
                    "Basic business understanding",
                    "Commitment to quality standards",
                  ],
                },
                {
                  title: "For Farmers",
                  requirements: [
                    "Active shrimp/seabass farming",
                    "Willingness to adopt sustainable practices",
                    "Commitment to antibiotic-free farming",
                    "Open to technology integration",
                    "Quality-first approach",
                  ],
                },
                {
                  title: "For Technology Partners",
                  requirements: [
                    "Innovative aquaculture solutions",
                    "Sustainability focus",
                    "Proven or pilot-stage technology",
                    "Scalability potential",
                    "Alignment with impact goals",
                  ],
                },
                {
                  title: "For Buyers",
                  requirements: [
                    "International/domestic seafood buyer",
                    "Commitment to quality & traceability",
                    "Fair pricing practices",
                    "Long-term partnership mindset",
                    "Compliance with food safety standards",
                  ],
                },
              ].map((req, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold mb-4">{req.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {req.requirements.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Application Process
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {[
                {
                  step: "1",
                  title: "Submit Interest",
                  desc: "Fill out the contact form with your details and area of interest.",
                },
                {
                  step: "2",
                  title: "Initial Discussion",
                  desc: "Our team will reach out within 48 hours for a preliminary conversation.",
                },
                {
                  step: "3",
                  title: "Assessment & Planning",
                  desc: "We evaluate fit, discuss requirements, and create a collaboration plan.",
                },
                {
                  step: "4",
                  title: "Onboarding & Support",
                  desc: "Begin partnership with full training, resources, and ongoing support.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-6 bg-white rounded-lg shadow-md"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-teal-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-8 max-w-2xl mx-auto text-white/90"
            >
              Join hundreds of farmers, entrepreneurs, and partners building a sustainable seafood future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Join;