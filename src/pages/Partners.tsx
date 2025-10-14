import { Building2, Handshake, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingParticles from "@/components/FloatingParticles";

const Partners = () => {
  const partnerCategories = [
    {
      icon: Zap,
      title: "Technology Partners",
      description: "Innovators driving sustainable aquaculture",
      partners: [
        "Nanobubble Technology Providers",
        "BLDC Motor Manufacturers",
        "DO Sensor & Automation Systems",
        "Solar Energy Solutions",
        "Digital Traceability Platforms",
      ]
    },
    {
      icon: Globe,
      title: "Global Market Partners",
      description: "Connecting Indian seafood to the world",
      partners: [
        "International Seafood Buyers",
        "Export Agencies",
        "Quality Certification Bodies",
        "Logistics & Cold Chain Partners",
        "E-commerce Platforms",
      ]
    },
    {
      icon: Building2,
      title: "Financial & Institutional",
      description: "Supporting growth and sustainability",
      partners: [
        "Banking & Financial Institutions",
        "Insurance Providers",
        "Government Bodies (MPEDA, NaCSA)",
        "NABARD & PMMSY Programs",
        "Impact Investors",
      ]
    },
    {
      icon: Handshake,
      title: "Community Partners",
      description: "Working together for impact",
      partners: [
        "Self-Help Groups (SHGs)",
        "Farmer Cooperatives",
        "Training & Skill Development Orgs",
        "Research Institutions",
        "NGOs & Social Enterprises",
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-white">Our Partners</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Building a Sustainable Seafood Ecosystem Through Strategic Collaboration
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Collaboration Drives Innovation</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Shrimpact thrives on strategic partnerships that drive innovation, sustainability, and quality in shrimp farming. 
              We collaborate with Indian and global entities across technology, markets, finance, and government to create 
              lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="p-8 rounded-xl card-gradient hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.partners.map((partner, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Partnership Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl mb-3">Market Access</h3>
              <p className="text-muted-foreground">
                Connect with verified buyers and expand into new markets with our established network
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl mb-3">Innovation Platform</h3>
              <p className="text-muted-foreground">
                Test and scale cutting-edge technologies in real-world farming conditions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Handshake className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl mb-3">Social Impact</h3>
              <p className="text-muted-foreground">
                Contribute to farmer empowerment, women entrepreneurship, and sustainable development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Partnership Approach</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-3">1. Shared Vision & Values</h3>
                <p className="text-muted-foreground">
                  We partner with organizations that share our commitment to sustainability, quality, and social impact. 
                  Our motto "Impact not Profit" guides every collaboration.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-3">2. Mutual Benefit & Growth</h3>
                <p className="text-muted-foreground">
                  Partnerships are designed for win-win outcomes. Whether it's technology validation, market access, 
                  or financial support, we ensure value creation for all stakeholders.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-3">3. Transparency & Accountability</h3>
                <p className="text-muted-foreground">
                  We maintain open communication, share data through our traceability systems, and hold ourselves 
                  accountable to measurable impact metrics.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-3">4. Long-Term Commitment</h3>
                <p className="text-muted-foreground">
                  We're building lasting relationships, not transactional agreements. Our partnerships are designed 
                  to scale and evolve as we grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Become a Partner</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our ecosystem of innovators, market leaders, and impact-makers transforming the seafood industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="btn-hero">
                Explore Partnership Opportunities
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Contact Partnership Team
              </Button>
            </Link>
          </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Partners;
