import { Calculator, Box, FileText, Settings, Shield, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: "IS Standard Calculations",
      description: "Automated calculations following Indian Standards with comprehensive reports for all crane components and structural elements."
    },
    {
      icon: Box,
      title: "CAD Integration",
      description: "Seamless integration with AutoCAD, Autodesk Inventor, and Solidworks for complete 2D and 3D design automation."
    },
    {
      icon: FileText,
      title: "Drawing Generation",
      description: "Automatic generation of GA drawings, fabrication drawings, and BOMs based on your specific company templates."
    },
    {
      icon: Settings,
      title: "Customization Options",
      description: "Flexible software architecture allows complete customization based on your specific design standards and workflows."
    },
    {
      icon: Shield,
      title: "Complete Ownership",
      description: "Full software ownership with no restrictions on installations or usage across your organization."
    },
    {
      icon: Users,
      title: "User-Friendly Interface",
      description: "Intuitive interface design ensures quick adoption by your engineering teams with minimal training required."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/5 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">⚡ Advanced Automation</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Complete <span className="text-gradient">Automation Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed specifically for EOT crane manufacturers to streamline every aspect of the design process
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="modern-card p-8 rounded-2xl group">
                <div className="feature-icon-gradient w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
