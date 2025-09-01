import { Calculator, Box, FileText, Settings, Shield, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "IS Standard Calculations",
      description: "Automated calculations following Indian Standards with comprehensive reports for all crane components and structural elements."
    },
    {
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "CAD Integration",
      description: "Seamless integration with AutoCAD, Autodesk Inventor, and Solidworks for complete 2D and 3D design automation."
    },
    {
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Drawing Generation",
      description: "Automatic generation of GA drawings, fabrication drawings, and BOMs based on your specific company templates."
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Customization Options",
      description: "Flexible software architecture allows complete customization based on your specific design standards and workflows."
    },
    {
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Complete Ownership",
      description: "Full software ownership with no restrictions on installations or usage across your organization."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "User-Friendly Interface",
      description: "Intuitive interface design ensures quick adoption by your engineering teams with minimal training required."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">⚡ Advanced Automation</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Complete <span className="text-primary font-bold">Automation Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed specifically for EOT crane manufacturers to streamline every aspect of the design process
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl p-0 rounded-2xl group overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">Feature {index + 1}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors" data-testid={`feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" data-testid={`feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
