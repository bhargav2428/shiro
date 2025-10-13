import { Users, Package, Leaf, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const statsRef = useScrollAnimation();
  const [counters, setCounters] = useState({
    antibiotic: 0,
    pathogen: 0,
    fcr: 0,
    women: 0
  });

  const stats = [
    {
      icon: Package,
      value: "100%",
      label: "Antibiotic-Free",
      description: "Verified before harvest",
      targetNumber: 100,
      key: 'antibiotic'
    },
    {
      icon: Award,
      value: "95%",
      label: "Pathogen Reduction",
      description: "Through our protocols",
      targetNumber: 95,
      key: 'pathogen'
    },
    {
      icon: Leaf,
      value: "≤1.2",
      label: "Feed Conversion",
      description: "Sustainable efficiency",
      targetNumber: 1.2,
      key: 'fcr'
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Women Empowered",
      description: "By 2027 target",
      targetNumber: 1000,
      key: 'women'
    }
  ];

  useEffect(() => {
    if (statsRef.isVisible) {
      const animateCounter = (key: string, target: number, isFCR = false) => {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: isFCR ? current.toFixed(1) : Math.floor(current)
          }));
        }, duration / steps);
      };

      animateCounter('antibiotic', 100);
      animateCounter('pathogen', 95);
      animateCounter('fcr', 1.2, true);
      animateCounter('women', 1000);
    }
  }, [statsRef.isVisible]);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div 
          ref={statsRef.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl card-gradient hover-lift group transition-all duration-700 ${
                statsRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.key === 'antibiotic' && `${counters.antibiotic}%`}
                {stat.key === 'pathogen' && `${counters.pathogen}%`}
                {stat.key === 'fcr' && `≤${counters.fcr}`}
                {stat.key === 'women' && `${counters.women.toLocaleString()}+`}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
