import { Users, Briefcase, TrendingUp, Award, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import womenImage from "@/assets/women-empowerment.jpg";
import PageTransition from "@/components/PageTransition";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingParticles from "@/components/FloatingParticles";

const WomenEmpowerment = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding gradient-ocean text-white relative overflow-hidden">
          <FloatingParticles />
          <div className="container-custom text-center relative z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 text-white">Women Empowerment</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Women-Led Seafood Retail in Andhra Pradesh, Odisha & West Bengal
            </motion.p>
          </div>
        </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To build a network of hygienic, traceable, and women-run seafood micro-enterprises that deliver 
              safe, premium-quality shrimp to domestic consumers across coastal India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={womenImage} alt="Women Entrepreneurs" className="w-full h-full object-cover" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Heart className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Coastal Communities</h4>
                    <p className="text-muted-foreground">
                      Uplifting women in Andhra Pradesh, Odisha, and West Bengal through sustainable seafood enterprises
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Micro-Enterprise Development</h4>
                    <p className="text-muted-foreground">
                      Creating hygienic, traceable retail outlets run entirely by women entrepreneurs
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Award className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Ambassadors</h4>
                    <p className="text-muted-foreground">
                      Positioning rural women as India's Seafood Quality Ambassadors for domestic markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Support */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-center mb-12">Strategic Support from Shrimpact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl card-gradient">
              <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl mb-4">🔧 Infrastructure & Quality</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• BLDC freezers & clean display counters</li>
                <li>• Direct access to quality shrimp from small farmers</li>
                <li>• FSSAI-compliant training in hygiene & safety</li>
                <li>• Quality assurance protocols</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl card-gradient">
              <div className="w-14 h-14 mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl mb-4">💰 Finance & Access</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Working capital assistance</li>
                <li>• Basic business insurance support</li>
                <li>• Bank loan facilitation</li>
                <li>• SHG formation under PMMSY/NABARD</li>
                <li>• Higher subsidy access</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl card-gradient">
              <div className="w-14 h-14 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl mb-4">🌐 Market & Technology</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Digital traceability apps</li>
                <li>• Farm-to-plate journey tracking</li>
                <li>• "Women of Quality Shrimp" brand launch</li>
                <li>• Premium pricing opportunities</li>
                <li>• Market linkage support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">📈 Impact Goals by 2027</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <p className="font-semibold mb-2">Women Entrepreneurs</p>
                <p className="text-sm text-muted-foreground">Empowered across coastal regions</p>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5">
                <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="font-semibold mb-2">Quality Assurance</p>
                <p className="text-sm text-muted-foreground">Safer, cleaner shrimp for households</p>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5">
                <Heart className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold text-accent mb-2">∞</div>
                <p className="font-semibold mb-2">Community Impact</p>
                <p className="text-sm text-muted-foreground">Sustainable livelihoods created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Women of Quality Shrimp Brand */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Women of Quality Shrimp</h2>
            <p className="text-xl text-muted-foreground mb-8">
              A unified brand that represents trust, quality, and women empowerment in the seafood industry.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg border border-border text-left">
                <h3 className="font-semibold mb-3">Brand Promise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 100% women-owned and operated</li>
                  <li>✓ Fully traceable supply chain</li>
                  <li>✓ Premium quality standards</li>
                  <li>✓ FSSAI certified operations</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border text-left">
                <h3 className="font-semibold mb-3">Customer Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Fresh, safe seafood</li>
                  <li>✓ Supporting women entrepreneurs</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Local community impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories CTA */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Be Part of the Change</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Support women-led seafood enterprises and contribute to sustainable community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="btn-hero">
                Partner with Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default WomenEmpowerment;
