import { Shuffle, Layout, Zap, Repeat, ArrowRight,Workflow,Globe,Target,DollarSign    } from "lucide-react";


export function KeyMetricsSection() {
  const metrics = [
    { value: "100%", label: "Customizable Workflows", icon: Workflow },
    { value: "5+", label: "Global Standards Supported", icon: Globe },
    { value: "0", label: "Manual Calculation Errors", icon:Target  },
    { value: "15%", label: "Material Cost Reduction", icon: DollarSign },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-700 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:scale-110 hover:bg-white/15 transition-all duration-300 shadow-lg">
                {/* <div className="text-4xl mb-4">{metric.icon}</div> */}
                {/* <metric.icon  className="mb-4 w-6 h-6 text-primary text-center" />   */}
                <div className="flex items-center justify-center">
  <metric.icon className="mb-4 w-8 h-8 " style={{color:"hsl(35, 95%, 58%)"}} />
</div>

                <div className="text-4xl lg:text-5xl font-bold text-accent mb-4" data-testid={`metric-value-${index}`}>
                  {metric.value}
                </div>
                <p className="text-white font-medium text-lg" data-testid={`metric-label-${index}`}>
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
