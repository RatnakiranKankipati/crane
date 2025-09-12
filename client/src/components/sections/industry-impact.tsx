import { Zap, TrendingUp, Shield } from "lucide-react";
import crane1 from "../../images/crane2.jpg";
import crane2 from "../../images/Crane-Hook-768x576 (1).jpg";
import crane3 from "../../images/crane1.jpg";
import crane4 from "../../images/cranetrolley.jpg";



export function IndustryImpactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-secondary text-white px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">🏢 Industry Impact</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Transforming the <span className="text-secondary font-bold">Crane Industry</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how our automation solutions are revolutionizing EOT crane manufacturing workflows across the industry
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
              src={crane2}
                
                alt="EOT crane in manufacturing facility" 
                className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
                data-testid="img-facility-1"
              />
              <img 
                src={crane1} 
                alt="Industrial manufacturing process" 
                className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300 mt-8"
                data-testid="img-facility-2"
              />
              <img 
                src={crane3} 
                alt="Engineering CAD workstation" 
                className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300 -mt-8"
                data-testid="img-facility-3"
              />
              <img 
                src={crane4} 
                alt="Technical drawings and calculations" 
                className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
                data-testid="img-facility-4"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800" data-testid="impact-title-1">Design Efficiency</h4>
                  <p className="text-slate-600 leading-relaxed">Optimize design workflows and reduce manual efforts significantly</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800" data-testid="impact-title-2">Enhanced Productivity</h4>
                  <p className="text-slate-600 leading-relaxed">Deliver projects faster with automated calculation and drawing generation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800" data-testid="impact-title-3">Quality Assurance</h4>
                  <p className="text-slate-600 leading-relaxed">Ensure consistent quality and compliance with industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
