import { Users, Briefcase, TrendingUp, Award, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import womenImage from "@/assets/women-empowerment.jpg";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";

const WomenEmpowerment = () => {
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
              Empowering Women in Seafood
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-white/90"
            >
              Transforming lives through women-led seafood retail in Andhra Pradesh, Odisha, and West Bengal
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
                  Join the Movement
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
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
                Our Vision
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Building a network of hygienic, traceable, and women-run seafood micro-enterprises delivering premium-quality shrimp across coastal India.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                variants={itemVariants}
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={womenImage}
                  alt="Women Entrepreneurs"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-6">
                <motion.h3 variants={itemVariants} className="text-2xl font-bold">
                  Focus Areas
                </motion.h3>
                {[
                  {
                    icon: <Heart className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />,
                    title: "Coastal Communities",
                    desc: "Uplifting women in Andhra Pradesh, Odisha, and West Bengal through sustainable seafood enterprises.",
                  },
                  {
                    icon: <Briefcase className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />,
                    title: "Micro-Enterprise Development",
                    desc: "Creating hygienic, traceable retail outlets run entirely by women entrepreneurs.",
                  },
                  {
                    icon: <Award className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />,
                    title: "Quality Ambassadors",
                    desc: "Positioning rural women as India's Seafood Quality Ambassadors for domestic markets.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    {item.icon}
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Support */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Strategic Support from Shrimpact
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
                  icon: <Briefcase className="h-7 w-7 text-blue-500" />,
                  title: "🔧 Infrastructure & Quality",
                  items: [
                    "BLDC freezers & clean display counters",
                    "Direct access to quality shrimp from small farmers",
                    "FSSAI-compliant training in hygiene & safety",
                    "Quality assurance protocols",
                  ],
                  bg: "bg-blue-50",
                  iconBg: "bg-blue-100",
                },
                {
                  icon: <TrendingUp className="h-7 w-7 text-green-500" />,
                  title: "💰 Finance & Access",
                  items: [
                    "Working capital assistance",
                    "Basic business insurance support",
                    "Bank loan facilitation",
                    "SHG formation under PMMSY/NABARD",
                    "Higher subsidy access",
                  ],
                  bg: "bg-green-50",
                  iconBg: "bg-green-100",
                },
                {
                  icon: <Users className="h-7 w-7 text-purple-500" />,
                  title: "🌐 Market & Technology",
                  items: [
                    "Digital traceability apps",
                    "Farm-to-plate journey tracking",
                    "Women of Quality Shrimp brand launch",
                    "Premium pricing opportunities",
                    "Market linkage support",
                  ],
                  bg: "bg-purple-50",
                  iconBg: "bg-purple-100",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl shadow-md ${card.bg}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div
                    className={`w-14 h-14 mb-6 rounded-full ${card.iconBg} flex items-center justify-center`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {card.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              📈 Impact Goals by 2027
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Target className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
                  value: "1,000+",
                  title: "Women Entrepreneurs",
                  desc: "Empowered across coastal regions",
                  bg: "bg-blue-50",
                },
                {
                  icon: <Award className="h-12 w-12 mx-auto mb-4 text-yellow-500" />,
                  value: "100%",
                  title: "Quality Assurance",
                  desc: "Safer, cleaner shrimp for households",
                  bg: "bg-yellow-50",
                },
                {
                  icon: <Heart className="h-12 w-12 mx-auto mb-4 text-pink-500" />,
                  value: "∞",
                  title: "Community Impact",
                  desc: "Sustainable livelihoods created",
                  bg: "bg-pink-50",
                },
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`text-center p-8 rounded-2xl shadow-md ${goal.bg}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {goal.icon}
                  <div className="text-4xl font-bold text-gray-800 mb-2">{goal.value}</div>
                  <p className="font-semibold mb-2">{goal.title}</p>
                  <p className="text-sm text-gray-600">{goal.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Women of Quality Shrimp Brand */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                Women of Quality Shrimp
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8"
              >
                A unified brand representing trust, quality, and women empowerment in the seafood industry.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Brand Promise",
                    items: [
                      "100% women-owned and operated",
                      "Fully traceable supply chain",
                      "Premium quality standards",
                      "FSSAI certified operations",
                    ],
                  },
                  {
                    title: "Customer Benefits",
                    items: [
                      "Fresh, safe seafood",
                      "Supporting women entrepreneurs",
                      "Transparent pricing",
                      "Local community impact",
                    ],
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <h3 className="font-semibold mb-3 text-lg">{section.title}</h3>
                    <ul className="space-y-2 text-gray-600">
                      {section.items.map((item, i) => (
                        <li key={i}>✓ {item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-teal-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Be Part of the Change
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-8 max-w-2xl mx-auto text-white/90"
            >
              Support women-led seafood enterprises and contribute to sustainable community development.
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
                  Partner with Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default WomenEmpowerment;