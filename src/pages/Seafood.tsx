import { CheckCircle, FileText, QrCode, Droplets, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import qualityImage from "@/assets/quality-shrimp.jpg";
import techImage from "@/assets/technology.jpg";

const Seafood = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-white">Safe & Sustainable Seafood</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Safer, traceable shrimp at lower risk—verified before harvest, protected in cold chain, and delivered to spec.
          </p>
        </div>
      </section>

      {/* Buyer Promise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Buyer Promise</h2>
              <p className="text-xl text-muted-foreground">
                Zero Rejection Target | Pre-Harvest Testing | Complete Traceability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg mb-2">Pond Health & Water Quality</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• DO-first program with sensors & alerts</li>
                  <li>• Nanobubble technology for clean ponds</li>
                  <li>• Lower FCR (≤1.2) & better growth</li>
                  <li>• Reduced carbon footprint</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-lg mb-2">100% Antibiotic-Free</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Rapid screening 24-48h pre-harvest</li>
                  <li>• Tests for chloramphenicol, nitrofurans & more</li>
                  <li>• Results linked to mobile app</li>
                  <li>• Zero rejection target for exports</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <QrCode className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg mb-2">Pond-to-Plate Traceability</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• QR code with pond ID & inputs log</li>
                  <li>• Pre-harvest COA & harvest video</li>
                  <li>• Digital chain of custody</li>
                  <li>• Fast recalls if needed</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <Thermometer className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg mb-2">Cold Chain Excellence</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Hygienic harvest practices</li>
                  <li>• Temperature-controlled transport</li>
                  <li>• GMP/SSOP/HACCP compliance</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Food Safety */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Quality & Food Safety</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Antibiotic-Free Guarantee</h3>
                    <p className="text-muted-foreground">Pre-harvest tests synced to Q app for complete transparency</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Microbial Testing</h3>
                    <p className="text-muted-foreground">Pre-harvest tests for critical microbes like Salmonella</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Clean Harvest</h3>
                    <p className="text-muted-foreground">Hygienic harvesting and packing protocols</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Organoleptic Tests</h3>
                    <p className="text-muted-foreground">Professional quality checks for every container shipment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={qualityImage} alt="Quality Shrimp with QR Code" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Products</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl card-gradient border-2 border-primary/20">
              <h3 className="text-2xl mb-4">Premium Shrimp</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Species:</strong> Litopenaeus vannamei</p>
                <p><strong>Size ranges:</strong> 10/20 … 100/120</p>
                <p><strong>Format:</strong> Frozen</p>
                <p><strong>Certifications:</strong> 100% Antibiotic-free, Traceable</p>
              </div>
            </div>

            <div className="p-8 rounded-xl card-gradient border-2 border-secondary/20">
              <h3 className="text-2xl mb-4">Premium Seabass</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Species:</strong> Lates Calcarifer</p>
                <p><strong>Sizes:</strong> 1-2 kg, 2 kg+</p>
                <p><strong>Format:</strong> Frozen</p>
                <p><strong>Quality:</strong> Export grade, Traceable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={techImage} alt="Sustainable Technology" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="mb-6">Our Sustainability Commitment</h2>
              <div className="space-y-4">
                <div>
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
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Water & Materials</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Effluent standards compliance</li>
                    <li>• Plankton & bloom management</li>
                    <li>• Phasing out single-use plastics</li>
                    <li>• Bio-bag transition for seed logistics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Social Responsibility</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Worker safety training programs</li>
                    <li>• Fair labor policies</li>
                    <li>• Community empowerment initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Buyers CTA */}
      <section className="section-padding gradient-ocean text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">For Buyers</h2>
            <p className="text-xl mb-8 text-white/90">
              24-hour response to RFQs | 7-day sample dispatch
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <FileText className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Download Specs</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <QrCode className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Request Samples</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Book Plant Tour</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero">
                  Request Samples / RFQ
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seafood;
