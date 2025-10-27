import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2, ArrowRight, Users, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Web images for contact and communication themes
const WEB_IMAGES = {
  hero: "https://images.unsplash.com/photo-1628859742240-269783f56d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  contact: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  support: "https://plus.unsplash.com/premium_photo-1661572867239-41b14b2ece0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

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
  const [errors, setErrors] = useState({ name: "", email: "", type: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  // Magnetic effect for buttons
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const sectionRefs = useState<(HTMLElement | null)[]>([])[0];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: "", email: "", type: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      hasError = true;
    }
    if (!formData.type) {
      newErrors.type = "Inquiry type is required";
      hasError = true;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
        className: "bg-green-50 text-green-800 border-green-200",
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
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={WEB_IMAGES.hero}
              alt="Contact us for partnerships and inquiries"
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
          </motion.div>

          <FloatingParticles count={20} />
          
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
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Connect
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                    With Us
                  </span>
                </motion.h1>
                
               
              </div>

              

              {/* Enhanced CTA Button */}
             
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section id="contact-form" className="py-24 relative overflow-hidden">
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
              className="grid lg:grid-cols-3 gap-12"
            >
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
                  >
                    Contact Information
                  </motion.h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Mail className="h-8 w-8 text-blue-600" />,
                        title: "Email Address",
                        content: (
                          <a 
                            href="mailto:info@shrimpact.com" 
                            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-lg"
                          >
                            info@shrimpact.com
                          </a>
                        ),
                        description: "",
                        gradient: "from-blue-500 to-cyan-500",
                        bg: "bg-blue-50"
                      },
                      {
                        icon: <Phone className="h-8 w-8 text-green-600" />,
                        title: "Phone Number",
                        content: (
                          <a 
                            href="tel:+911234567890" 
                            className="text-gray-600 hover:text-green-500 transition-colors duration-200 text-lg"
                          >
                            +91 903 5843 520
                          </a>
                        ),
                        description: "",
                        gradient: "from-green-500 to-emerald-500",
                        bg: "bg-green-50"
                      },
                      {
                        icon: <MapPin className="h-8 w-8 text-purple-600" />,
                        title: "Our Location",
                        content: <p className="text-gray-600 text-lg">Kakinada, Andhra Pradesh, India</p>,
                        description: "",
                        gradient: "from-purple-500 to-pink-500",
                        bg: "bg-purple-50"
                      },
                    ].map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -10,
                          transition: { duration: 0.3 }
                        }}
                        className={`p-6 rounded-3xl ${info.bg} border border-gray-200/50 shadow-lg relative overflow-hidden group cursor-pointer`}
                      >
                        {/* Gradient Overlay */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        <div className="flex items-start gap-4 relative z-10">
                          <motion.div
                            whileHover={{ 
                              rotate: 360,
                              scale: 1.2,
                              transition: { duration: 0.6 }
                            }}
                            className="flex-shrink-0"
                          >
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                              {info.icon}
                            </div>
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h3>
                            <div className="mb-2">{info.content}</div>
                            <p className="text-gray-500 text-sm">{info.description}</p>
                          </div>
                        </div>

                        {/* Animated border */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${info.gradient}`}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <div className="p-8 rounded-3xl bg-white border border-gray-200/50 shadow-2xl relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5">
                    <img 
                      src={WEB_IMAGES.contact}
                      alt="Contact form background"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
                  >
                    Send Us a Message
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mb-8 text-lg"
                  >
                    Fill out the form below, and our dedicated team will respond promptly to discuss your needs.
                  </motion.p>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <motion.div className="grid md:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-2 relative"
                      >
                        <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                         
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-lg py-6 ${errors.name ? "border-red-500" : ""} ${focusedField === "name" ? "shadow-lg border-blue-500" : ""}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm absolute -bottom-6"
                            id="name-error"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2 relative"
                      >
                        <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-lg py-6 ${errors.email ? "border-red-500" : ""}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm absolute -bottom-6"
                            id="email-error"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-lg py-6"
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="organization" className="text-gray-700 font-semibold">Organization</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-lg py-6"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2 relative"
                    >
                      <Label htmlFor="type" className="text-gray-700 font-semibold">Inquiry Type *</Label>
                      <Select 
                        value={formData.type} 
                        onValueChange={(value) => handleChange("type", value)} 
                        required
                      >
                        <SelectTrigger 
                          id="type" 
                          className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-6 ${errors.type ? "border-red-500" : ""}`}
                          aria-invalid={!!errors.type}
                          aria-describedby={errors.type ? "type-error" : undefined}
                        >
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
                      {errors.type && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm absolute -bottom-6"
                          id="type-error"
                        >
                          {errors.type}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2 relative"
                    >
                      <Label htmlFor="message" className="text-gray-700 font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry, partnership interest, or any questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-lg resize-none ${errors.message ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm absolute -bottom-6"
                          id="message-error"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                        }} 
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="relative overflow-hidden"
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 flex items-center justify-center gap-3 group text-lg py-7 rounded-2xl"
                          disabled={isSubmitting}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.8 }}
                          />
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-6 w-6 animate-spin" />
                              Sending Your Message...
                            </>
                          ) : (
                            <>
                              <span className="relative z-10">Send Message</span>
                              <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions Section */}
       
      </div>
    </PageTransition>
  );
};

export default Contact;