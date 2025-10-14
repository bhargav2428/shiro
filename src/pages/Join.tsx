import { Users, Briefcase, Store, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingParticles from "@/components/FloatingParticles";

const Join = () => {
  const opportunities = [
    {
      icon: Store,
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
      cta: "Apply as Entrepreneur"
    },
    {
      icon: Users,
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
      cta: "Join Farmer Network"
    },
    {
      icon: Briefcase,
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
      cta: "Partner with Us"
    },
    {
      icon: TrendingUp,
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
      cta: "Become a Buyer"
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-white">Join the Shrimpact Movement</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Be part of a sustainable, traceable, and impact-driven seafood ecosystem
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Opportunities to Collaborate</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're an entrepreneur, farmer, technology partner, or buyer, there's a place for you in our ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="p-8 rounded-xl card-gradient border-2 border-transparent hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <opportunity.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-2xl mb-3">{opportunity.title}</h3>
                <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What You Get:</h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button className="w-full btn-primary">
                    {opportunity.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Join Shrimpact?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-4">Impact</div>
              <h3 className="text-xl mb-2">Not Profit</h3>
              <p className="text-muted-foreground">
                We prioritize measurable social and environmental impact over short-term profits
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-secondary mb-4">Trust</div>
              <h3 className="text-xl mb-2">Through Transparency</h3>
              <p className="text-muted-foreground">
                Complete traceability and open communication build lasting partnerships
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-4">Growth</div>
              <h3 className="text-xl mb-2">Together</h3>
              <p className="text-muted-foreground">
                We grow by helping our partners succeed in their goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Getting Started</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-4">For Women Entrepreneurs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Resident of AP, Odisha, or West Bengal</li>
                  <li>• Interest in seafood retail business</li>
                  <li>• Willingness to undergo FSSAI training</li>
                  <li>• Basic business understanding</li>
                  <li>• Commitment to quality standards</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-4">For Farmers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Active shrimp/seabass farming</li>
                  <li>• Willingness to adopt sustainable practices</li>
                  <li>• Commitment to antibiotic-free farming</li>
                  <li>• Open to technology integration</li>
                  <li>• Quality-first approach</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-4">For Technology Partners</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovative aquaculture solutions</li>
                  <li>• Sustainability focus</li>
                  <li>• Proven or pilot-stage technology</li>
                  <li>• Scalability potential</li>
                  <li>• Alignment with impact goals</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl mb-4">For Buyers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• International/domestic seafood buyer</li>
                  <li>• Commitment to quality & traceability</li>
                  <li>• Fair pricing practices</li>
                  <li>• Long-term partnership mindset</li>
                  <li>• Compliance with food safety standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Application Process</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Submit Interest</h3>
                  <p className="text-muted-foreground">
                    Fill out the contact form with your details and area of interest
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Initial Discussion</h3>
                  <p className="text-muted-foreground">
                    Our team will reach out within 48 hours for a preliminary conversation
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Assessment & Planning</h3>
                  <p className="text-muted-foreground">
                    We evaluate fit, discuss requirements, and create a collaboration plan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Onboarding & Support</h3>
                  <p className="text-muted-foreground">
                    Begin partnership with full training, resources, and ongoing support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of farmers, entrepreneurs, and partners building a sustainable seafood future.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Join;
