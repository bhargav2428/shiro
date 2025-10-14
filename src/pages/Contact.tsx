import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    type: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        type: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              Get in Touch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-white/90"
            >
              We respond to all inquiries within 24 hours
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-12"
            >
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <motion.div variants={containerVariants}>
                  <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8">
                    Contact Information
                  </motion.h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Mail className="h-6 w-6 text-blue-500" />,
                        title: "Email",
                        content: (
                          <a href="mailto:info@shrimpact.com" className="text-gray-600 hover:text-blue-500 transition-colors">
                            info@shrimpact.com
                          </a>
                        ),
                        bg: "bg-blue-50",
                      },
                      {
                        icon: <Phone className="h-6 w-6 text-green-500" />,
                        title: "Phone",
                        content: (
                          <a href="tel:+911234567890" className="text-gray-600 hover:text-green-500 transition-colors">
                            +91 123 456 7890
                          </a>
                        ),
                        bg: "bg-green-50",
                      },
                      {
                        icon: <MapPin className="h-6 w-6 text-purple-500" />,
                        title: "Location",
                        content: <p className="text-gray-600">Andhra Pradesh, India</p>,
                        bg: "bg-purple-50",
                      },
                    ].map((info, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-4"
                        whileHover={{ x: 10, transition: { duration: 0.3 } }}
                      >
                        <div className={`w-12 h-12 rounded-full ${info.bg} flex items-center justify-center flex-shrink-0`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-2xl shadow-md bg-white"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="font-semibold mb-3 text-lg">Business Hours</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="p-8 rounded-2xl shadow-md bg-white">
                  <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2">
                    Send Us a Message
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-600 mb-8"
                  >
                    Fill out the form below and we'll get back to you as soon as possible.
                  </motion.p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          placeholder="Your company name"
                          value={formData.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="type">Inquiry Type *</Label>
                      <Select value={formData.type} onValueChange={(value) => handleChange("type", value)} required>
                        <SelectTrigger id="type" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buyer">Buyer Inquiry</SelectItem>
                          <SelectItem value="farmer">Farmer Partnership</SelectItem>
                          <SelectItem value="women">Women Entrepreneur</SelectItem>
                          <SelectItem value="technology">Technology Partner</SelectItem>
                          <SelectItem value="export">Export/Import</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Quick Actions
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  title: "Request Samples",
                  desc: "Get product samples within 7 days",
                  cta: "Request Now",
                },
                {
                  title: "Download Specs",
                  desc: "Product specifications & QA pack",
                  cta: "Download",
                },
                {
                  title: "Book Plant Tour",
                  desc: "Virtual or in-person facility visit",
                  cta: "Schedule",
                },
              ].map((action, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="font-semibold mb-2 text-lg">{action.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{action.desc}</p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 hover:bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action.cta}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;