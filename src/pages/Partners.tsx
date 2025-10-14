import { Building2, Handshake, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

const Partners = () => {
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

  const partnerCategories = [
    {
      icon: <Zap className="h-7 w-7 text-yellow-500" />,
      title: "Technology Partners",
      description: "Innovators driving sustainable aquaculture",
      partners: [
        "Nanobubble Technology Providers",
        "BLDC Motor Manufacturers",
        "DO Sensor & Automation Systems",
        "Solar Energy Solutions",
        "Digital Traceability Platforms",
      ],
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
    },
    {
      icon: <Globe className="h-7 w-7 text-blue-500" />,
      title: "Global Market Partners",
      description: "Connecting Indian seafood to the world",
      partners: [
        "International Seafood Buyers",
        "Export Agencies",
        "Quality Certification Bodies",
        "Logistics & Cold Chain Partners",
        "E-commerce Platforms",
      ],
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Building2 className="h-7 w-7 text-green-500" />,
      title: "Financial & Institutional",
      description: "Supporting growth and sustainability",
      partners: [
        "Banking & Financial Institutions",
        "Insurance Providers",
        "Government Bodies (MPEDA, NaCSA)",
        "NABARD & PMMSY Programs",
        "Impact Investors",
      ],
      bg: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      icon: <Handshake className="h-7 w-7 text-purple-500" />,
      title: "Community Partners",
      description: "Working together for impact",
      partners: [
        "Self-Help Groups (SHGs)",
        "Farmer Cooperatives",
        "Training & Skill Development Orgs",
        "Research Institutions",
        "NGOs & Social Enterprises",
      ],
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
              Our Partners
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-white/90"
            >
              Building a Sustainable Seafood Ecosystem Through Strategic Collaboration
            </motion.p>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link to="/join">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold">
                  Join Our Network
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
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
                Collaboration Drives Innovation
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Shrimpact thrives on strategic partnerships that drive innovation, sustainability, and quality in shrimp farming. We collaborate with Indian and global entities across technology, markets, finance, and government to create lasting impact.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
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
                  className={`p-8 rounded-2xl shadow-md ${category.bg} hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <div
                    className={`w-14 h-14 mb-6 rounded-full ${category.iconBg} flex items-center justify-center`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary mt-1">•</span>
                        <span>{partner}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Partnership Benefits
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Globe className="h-8 w-8 text-blue-500" />,
                  title: "Market Access",
                  desc: "Connect with verified buyers and expand into new markets with our established network.",
                  bg: "bg-blue-50",
                },
                {
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  title: "Innovation Platform",
                  desc: "Test and scale cutting-edge technologies in real-world farming conditions.",
                  bg: "bg-yellow-50",
                },
                {
                  icon: <Handshake className="h-8 w-8 text-purple-500" />,
                  title: "Social Impact",
                  desc: "Contribute to farmer empowerment, women entrepreneurship, and sustainable development.",
                  bg: "bg-purple-50",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`text-center p-6 rounded-2xl shadow-md ${benefit.bg}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${benefit.bg.replace('50', '100')} flex items-center justify-center`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partnership Approach */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Our Partnership Approach
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {[
                {
                  title: "1. Shared Vision & Values",
                  desc: "We partner with organizations that share our commitment to sustainability, quality, and social impact. Our motto 'Impact not Profit' guides every collaboration.",
                },
                {
                  title: "2. Mutual Benefit & Growth",
                  desc: "Partnerships are designed for win-win outcomes. Whether it's technology validation, market access, or financial support, we ensure value creation for all stakeholders.",
                },
                {
                  title: "3. Transparency & Accountability",
                  desc: "We maintain open communication, share data through our traceability systems, and hold ourselves accountable to measurable impact metrics.",
                },
                {
                  title: "4. Long-Term Commitment",
                  desc: "We're building lasting relationships, not transactional agreements. Our partnerships are designed to scale and evolve as we grow together.",
                },
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-gray-600">{approach.desc}</p>
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
              Become a Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-8 max-w-2xl mx-auto text-white/90"
            >
              Join our ecosystem of innovators, market leaders, and impact-makers transforming the seafood industry.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/join">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-100 font-semibold"
                >
                  Explore Partnership Opportunities
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  Contact Partnership Team
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Partners;