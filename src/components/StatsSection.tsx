import { Users, Package, Leaf, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Package,
      value: "100%",
      label: "Antibiotic-Free",
      description: "Verified before harvest"
    },
    {
      icon: Award,
      value: "95%",
      label: "Pathogen Reduction",
      description: "Through our protocols"
    },
    {
      icon: Leaf,
      value: "≤1.2",
      label: "Feed Conversion",
      description: "Sustainable efficiency"
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Women Empowered",
      description: "By 2027 target"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl card-gradient hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
