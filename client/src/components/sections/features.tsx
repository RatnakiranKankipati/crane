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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Complete Automation Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed specifically for EOT crane manufacturers
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-card p-8 rounded-xl shadow-lg border group hover:shadow-2xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
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
